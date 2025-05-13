
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Plus
} from "lucide-react";
import { getAvailableKeywords, toggleKeyword as toggleKeywordUtil, addCustomKeyword } from "@/utils/keywordUtils";

export const TrademarkForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [customKeyword, setCustomKeyword] = useState("");
  const [formData, setFormData] = useState({
    owner_name: "",
    mark: "",
    application_number: "",
    national_classes: "",
    us_classes: "",
    description: "",
    application_date: "",
    logo_url: "",
    keywords: [] as string[],
  });
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  // State to track when keywords are updated
  const [keywordsUpdated, setKeywordsUpdated] = useState(0);

  // Get available keywords from utility - will refresh when keywordsUpdated changes
  const [availableKeywords, setAvailableKeywords] = useState<string[]>([]);

  // Refresh keywords when component mounts or keywordsUpdated changes
  useEffect(() => {
    setAvailableKeywords(getAvailableKeywords());
  }, [keywordsUpdated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle keyword selection using utility function
  const toggleKeyword = (keyword: string) => {
    setFormData(prev => {
      const result = toggleKeywordUtil(prev.keywords, keyword);

      // Show message if provided (e.g., max keywords reached)
      if (result.message) {
        toast.error(result.message);
      }

      return {
        ...prev,
        keywords: result.keywords
      };
    });
  };

  // Handle adding a custom keyword
  const handleAddCustomKeyword = () => {
    if (!customKeyword.trim()) {
      toast.error("Please enter a keyword");
      return;
    }

    // Check if keyword already exists
    if (formData.keywords.includes(customKeyword.trim())) {
      toast.error("This keyword is already added");
      return;
    }

    // Add to localStorage for future use
    const added = addCustomKeyword(customKeyword.trim());

    // If successfully added to localStorage, refresh available keywords
    if (added) {
      // Force refresh of available keywords by incrementing the state
      setKeywordsUpdated(prev => prev + 1);

      // Add to current selection
      setFormData(prev => {
        const result = toggleKeywordUtil(prev.keywords, customKeyword.trim());

        if (result.message) {
          toast.error(result.message);
          return prev;
        }

        // Clear the input field after adding
        setCustomKeyword("");

        return {
          ...prev,
          keywords: result.keywords
        };
      });

      toast.success("Keyword added successfully");
    } else {
      toast.error("Failed to add keyword or keyword already exists");
    }
  };

  // Handle custom keyword input change
  const handleCustomKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomKeyword(e.target.value);
  };

  // Track text selection in the description field
  const handleDescriptionSelect = () => {
    if (descriptionRef.current) {
      setSelectionStart(descriptionRef.current.selectionStart);
      setSelectionEnd(descriptionRef.current.selectionEnd);
    }
  };

  // Apply formatting to selected text
  const applyFormatting = (format: 'bold' | 'italic' | 'underline' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
    if (!descriptionRef.current) return;

    const textarea = descriptionRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) {
      toast.error("Please select some text to format");
      return;
    }

    const selectedText = formData.description.substring(start, end);
    let formattedText = '';

    switch (format) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'h1':
        formattedText = `<h1>${selectedText}</h1>`;
        break;
      case 'h2':
        formattedText = `<h2>${selectedText}</h2>`;
        break;
      case 'h3':
        formattedText = `<h3>${selectedText}</h3>`;
        break;
      case 'h4':
        formattedText = `<h4>${selectedText}</h4>`;
        break;
      case 'h5':
        formattedText = `<h5>${selectedText}</h5>`;
        break;
      case 'h6':
        formattedText = `<h6>${selectedText}</h6>`;
        break;
      default:
        formattedText = selectedText;
    }

    const newText =
      formData.description.substring(0, start) +
      formattedText +
      formData.description.substring(end);

    setFormData(prev => ({ ...prev, description: newText }));

    // Set focus back to textarea after formatting
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + formattedText.length);
    }, 0);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Function to convert image file to base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let logoUrl = "";

      // Convert image to base64 if one is selected
      if (imageFile) {
        try {
          // Convert the image to base64
          logoUrl = await convertToBase64(imageFile);
        } catch (error) {
          console.error('Error converting image to base64:', error);
          throw new Error('Failed to process the image');
        }
      }

      // Create the trademark data object
      const trademarkData = {
        owner_name: formData.owner_name,
        mark: formData.mark || null,
        application_number: formData.application_number,
        national_classes: formData.national_classes || null,
        us_classes: formData.us_classes || null,
        description: formData.description || null,
        application_date: formData.application_date || null,
        logo_url: logoUrl || null,
        keywords: formData.keywords.length > 0 ? formData.keywords : null // Store keywords as an array
      };

      console.log("Saving trademark with data:", trademarkData);

      // Insert the trademark data into the database
      const { error } = await supabase
        .from('trademarks')
        .insert([trademarkData]);

      if (error) throw error;

      toast.success("Trademark created successfully!");
      navigate('/admin?tab=trademarks');
    } catch (error) {
      console.error('Error creating trademark:', error);
      toast.error("Failed to create trademark");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-primary-blue">Create New Trademark</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="owner_name">Owner Name</Label>
            <Input
              id="owner_name"
              name="owner_name"
              value={formData.owner_name}
              onChange={handleChange}
              required
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mark">Mark</Label>
            <Input
              id="mark"
              name="mark"
              value={formData.mark}
              onChange={handleChange}
              placeholder="Enter the wordmark"
              className="bg-white border border-gray-300"
            />
            <p className="text-sm text-gray-500">This will be displayed as the headline of the article</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="application_number">Application Number</Label>
            <Input
              id="application_number"
              name="application_number"
              value={formData.application_number}
              onChange={handleChange}
              required
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="national_classes">International Classes</Label>
            <Input
              id="national_classes"
              name="national_classes"
              value={formData.national_classes}
              onChange={handleChange}
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="us_classes">US Classes</Label>
            <Input
              id="us_classes"
              name="us_classes"
              value={formData.us_classes}
              onChange={handleChange}
              className="bg-white border border-gray-300"
            />
          </div>



          <div className="space-y-2">
            <Label htmlFor="application_date">Application Date</Label>
            <Input
              id="application_date"
              name="application_date"
              type="date"
              value={formData.application_date}
              onChange={handleChange}
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="flex gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('bold')}
                  className="px-3 py-1 h-8"
                  title="Bold"
                >
                  <Bold className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('italic')}
                  className="px-3 py-1 h-8"
                  title="Italic"
                >
                  <Italic className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('underline')}
                  className="px-3 py-1 h-8"
                  title="Underline"
                >
                  <Underline className="w-4 h-4" />
                </Button>
              </div>
              <div className="h-8 w-px bg-gray-200 mx-1"></div>
              <div className="flex gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h1')}
                  className="px-3 py-1 h-8"
                  title="Heading 1"
                >
                  <Heading1 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h2')}
                  className="px-3 py-1 h-8"
                  title="Heading 2"
                >
                  <Heading2 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h3')}
                  className="px-3 py-1 h-8"
                  title="Heading 3"
                >
                  <Heading3 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h4')}
                  className="px-3 py-1 h-8"
                  title="Heading 4"
                >
                  <Heading4 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h5')}
                  className="px-3 py-1 h-8"
                  title="Heading 5"
                >
                  <Heading5 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => applyFormatting('h6')}
                  className="px-3 py-1 h-8"
                  title="Heading 6"
                >
                  <Heading6 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Select text and click a button to format
            </p>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onSelect={handleDescriptionSelect}
              ref={descriptionRef}
              rows={6}
              className="bg-white border border-gray-300"
              placeholder="Enter the description text for the trademark"
            />
            <p className="text-xs text-gray-500">
              You can make text <strong>bold</strong>, <em>italic</em>, <u>underlined</u>, or add headings by selecting it and using the buttons above
            </p>
          </div>

          <div className="space-y-2">
            <Label>Keywords (Select up to 5)</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableKeywords.map((keyword) => (
                <Button
                  key={keyword}
                  type="button"
                  variant={formData.keywords.includes(keyword) ? "default" : "outline"}
                  className={`rounded-full text-xs px-4 py-1 h-auto ${
                    formData.keywords.includes(keyword) ? "bg-blue-600" : ""
                  }`}
                  onClick={() => toggleKeyword(keyword)}
                >
                  {keyword}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <Input
                placeholder="Add your own keyword"
                value={customKeyword}
                onChange={handleCustomKeywordChange}
                className="bg-white border border-gray-300"
              />
              <Button
                type="button"
                onClick={handleAddCustomKeyword}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="w-4 h-4 mr-1" /> Add
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Selected: {formData.keywords.length}/5
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Trademark Logo</Label>
            <div className="flex flex-col gap-4">
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-white border border-gray-300"
              />

              {imagePreview && (
                <div className="w-full max-w-[240px] h-[240px] border border-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Logo Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#005ea2] hover:bg-[#004d86] text-white"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Trademark"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

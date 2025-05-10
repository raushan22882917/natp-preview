
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Upload } from "lucide-react";
import { getAvailableKeywords, toggleKeyword as toggleKeywordUtil } from "@/utils/keywordUtils";

export const TrademarkForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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

  // Get available keywords from utility
  const availableKeywords = getAvailableKeywords();

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
            <Label htmlFor="national_classes">National Classes</Label>
            <Input
              id="national_classes"
              name="national_classes"
              value={formData.national_classes}
              onChange={handleChange}
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="national_classes">US Classes</Label>
            <Input
              id="national_classes"
              name="national_classes"
              value={formData.national_classes}
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
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="bg-white border border-gray-300"
              placeholder="Enter the description text for the trademark"
            />
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

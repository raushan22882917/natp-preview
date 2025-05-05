
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

export const TrademarkForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    owner_name: "",
    application_number: "",
    national_classes: "",
    description: "",
    application_date: "",
    logo_url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('trademarks').insert([formData]);

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
            />
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

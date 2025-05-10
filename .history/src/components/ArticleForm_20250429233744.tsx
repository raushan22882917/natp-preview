
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const ArticleForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [trademarks, setTrademarks] = useState<{ id: string; owner_name: string }[]>([]);
  const [filteredTrademarks, setFilteredTrademarks] = useState<{ id: string; owner_name: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    read_time: "",
    trademark_id: ""
  });

  useEffect(() => {
    const fetchTrademarks = async () => {
      const { data, error } = await supabase
        .from('trademarks')
        .select('id, owner_name')
        .order('owner_name');
      
      if (error) {
        console.error('Error fetching trademarks:', error);
        toast.error("Failed to load trademarks");
        return;
      }

      setTrademarks(data || []);
      setFilteredTrademarks(data || []);
    };

    fetchTrademarks();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTrademarks(trademarks);
    } else {
      const filtered = trademarks.filter(trademark => 
        trademark.owner_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTrademarks(filtered);
    }
  }, [searchQuery, trademarks]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTrademarkChange = (value: string) => {
    setFormData(prev => ({ ...prev, trademark_id: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('articles').insert([formData]);
      
      if (error) throw error;
      
      toast.success("Article created successfully!");
      navigate('/admin?tab=articles');
    } catch (error) {
      console.error('Error creating article:', error);
      toast.error("Failed to create article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-primary-blue">Create New Article</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="trademark_id">Related Trademark</Label>
            <Select
              value={formData.trademark_id}
              onValueChange={handleTrademarkChange}
            >
              <SelectTrigger className="bg-white border border-gray-300">
                <SelectValue placeholder="Select a trademark owner" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]">
                <div className="sticky top-0 p-2 bg-white z-10 border-b">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search trademarks..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="pl-8 bg-white border border-gray-300"
                    />
                  </div>
                </div>
                {filteredTrademarks.length === 0 ? (
                  <div className="p-2 text-center text-gray-500">No results found</div>
                ) : (
                  filteredTrademarks.map((trademark) => (
                    <SelectItem key={trademark.id} value={trademark.id}>
                      {trademark.owner_name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={8}
              required
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="read_time">Read Time (e.g., "5 min")</Label>
            <Input
              id="read_time"
              name="read_time"
              value={formData.read_time}
              onChange={handleChange}
              placeholder="5 min"
              className="bg-white border border-gray-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#005ea2] hover:bg-[#004d86] text-white" 
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Article"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

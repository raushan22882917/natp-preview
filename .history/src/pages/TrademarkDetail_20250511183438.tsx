
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { TrademarkArticle, type TrademarkDetail } from "@/components/TrademarkArticle";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Foote
interface Article {
  id: string;
  title: string;
  content: string;
  read_time?: string;
}

export default function TrademarkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [trademark, setTrademark] = useState<TrademarkDetail | null>(null);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrademarkAndArticle = async () => {
      if (!id) {
        navigate("/search");
        return;
      }

      try {
        // Fetch trademark details
        const { data: trademarkData, error: trademarkError } = await supabase
          .from('trademarks')
          .select('*')
          .eq('id', id)
          .single();

        if (trademarkError) throw trademarkError;

        // Fetch associated article
        const { data: articleData, error: articleError } = await supabase
          .from('articles')
          .select('*')
          .eq('trademark_id', id)
          .single();

        if (articleError && articleError.code !== 'PGRST116') throw articleError;

        // Combine trademark and article data
        const combinedData: TrademarkDetail = {
          ...trademarkData,
          read_time: articleData?.read_time || '5 min read',
          // If mark is not provided, use owner_name as fallback
          mark: trademarkData.mark || trademarkData.owner_name,
          // Include article content and title if available
          articleContent: articleData?.content || null,
          articleTitle: articleData?.title || null
        };

        setTrademark(combinedData);
        setArticle(articleData);
      } catch (error) {
        console.error("Error fetching trademark:", error);
        toast.error("Failed to load trademark details");
      } finally {
        setLoading(false);
      }
    };

    fetchTrademarkAndArticle();
  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="h-[240px] bg-gray-200 rounded-lg mb-6"></div>
            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="h-40 bg-gray-200 rounded w-full"></div>
          </div>
        ) : trademark ? (
          <TrademarkArticle trademark={trademark} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trademark Not Found</h2>
            <p className="text-gray-600 mb-6">The trademark you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => navigate("/search")}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Return to Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

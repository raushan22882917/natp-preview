import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { format } from "date-fns";
import {
  Share2,
  Printer,
  Copy,
  Facebook,
  Edit,
  Save,
  X,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  getAvailableKeywords,
  toggleKeyword as toggleKeywordUtil,
  updateTrademarkKeywords,
} from "@/utils/keywordUtils";

export type TrademarkDetail = {
  id: string;
  owner_name: string;
  mark?: string;
  application_number: string;
  national_classes?: string;
  us_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
  read_time?: string;
  keywords?: string[];
  articleContent?: string | null;
  articleTitle?: string | null;
};

interface TrademarkArticleProps {
  trademark: TrademarkDetail;
  searchQuery?: string;
  onBack?: () => void;
}

export function TrademarkArticle({
  trademark,
  searchQuery,
  onBack,
}: TrademarkArticleProps) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const query = searchQuery || searchParams.get("q") || "";

  // For debugging
  useEffect(() => {
    console.log("Current query param:", query);
    console.log("Current location:", location);
  }, [query, location]);

  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "A";
  };

  // Get available keywords from utility
  const availableKeywords = getAvailableKeywords();

  // State for managing keywords
  const [keywords, setKeywords] = useState<string[]>(trademark.keywords || []);
  const [isEditingKeywords, setIsEditingKeywords] = useState(false);

  // Toggle keyword selection using utility function
  const toggleKeyword = (keyword: string) => {
    const result = toggleKeywordUtil(keywords, keyword);
    setKeywords(result.keywords);

    // Show message if provided (e.g., max keywords reached)
    if (result.message) {
      toast.error(result.message);
    }
  };

  // Save keywords to database using utility function
  const saveKeywords = async () => {
    try {
      // Show loading toast
      const loadingToast = toast.loading("Updating keywords...");

      // Use the utility function to update keywords
      const result = await updateTrademarkKeywords(trademark.id, keywords);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (result.success) {
        // Update the trademark object with the new keywords
        trademark.keywords = [...keywords];
        toast.success("Keywords updated successfully");
        setIsEditingKeywords(false);
      } else {
        // Show error message
        toast.error(result.error || "Failed to update keywords");
      }
    } catch (error) {
      console.error("Error updating keywords:", error);
      toast.error("Failed to update keywords. Please try again.");
    }
  };

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-blue-600">
          {onBack ? (
            <button
              onClick={onBack}
              className="text-sm hover:underline flex items-center gap-1">
              <ArrowLeft size={16} /> Back to Results
            </button>
          ) : (
            <Link
              to={query ? `/search?q=${encodeURIComponent(query)}` : "/search"}
              className="text-sm hover:underline flex items-center gap-1">
              <ArrowLeft size={16} /> Back to Results
            </Link>
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 px-2 py-1 inline-block">
          {trademark.mark || trademark.owner_name}
        </h1>

        {/* Trademark Logo Box */}
        <div className="w-full h-[240px] border border-blue-200 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
          {trademark.logo_url ? (
            <img
              src={trademark.logo_url}
              alt={`${trademark.mark || trademark.owner_name} logo`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className = "text-[150px] text-gray-700 font-bold";
                  fallback.textContent = trademark.mark
                    ? trademark.mark.charAt(0).toUpperCase()
                    : getFirstLetter(trademark.owner_name);
                  parent.appendChild(fallback);
                }
              }}
            />
          ) : (
            <div className="text-[80px] text-gray-700 font-bold text-center">
              {trademark.mark || getFirstLetter(trademark.owner_name)}
            </div>
          )}
        </div>

        {/* Trademark Details */}
        <div className="flex flex-wrap gap-y-2 text-sm border-b border-gray-200 pb-4">
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">Owner:</span>
            <span>{trademark.owner_name}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">
              International Class(es):
            </span>
            <span>{trademark.national_classes || "N/A"}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">
              US Class(es):
            </span>
            <span>{trademark.us_classes || "N/A"}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">
              Application Number:
            </span>
            <span>{trademark.application_number}</span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="font-semibold text-gray-700 mr-2">
              Application Date:
            </span>
            <span>
              {trademark.application_date
                ? format(new Date(trademark.application_date), "MMM d, yyyy")
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-center mb-6">
          {trademark.articleTitle}
        </h2>
        {trademark.articleContent ? (
          <div dangerouslySetInnerHTML={{ __html: trademark.articleContent }} />
        ) : trademark.description ? (
          <div dangerouslySetInnerHTML={{ __html: trademark.description }} />
        ) : (
          <p className="text-gray-500 italic">
            No content available for this trademark.
          </p>
        )}
      </div>

      {/* Article Tags */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Keywords</h3>

          {isEditingKeywords && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={saveKeywords}
                className="flex items-center gap-1">
                <Save className="h-4 w-4" /> Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setKeywords(trademark.keywords || []);
                  setIsEditingKeywords(false);
                }}
                className="flex items-center gap-1">
                <X className="h-4 w-4" /> Cancel
              </Button>
            </div>
          )}
        </div>

        {isEditingKeywords ? (
          // Editable keywords
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {availableKeywords.map((keyword) => (
                <Button
                  key={keyword}
                  type="button"
                  variant={keywords.includes(keyword) ? "default" : "outline"}
                  className={`rounded-full text-xs px-4 py-1 h-auto  ${
                    keywords.includes(keyword) ? "bg-blue-600" : ""
                  }`}
                  onClick={() => toggleKeyword(keyword)}>
                  {keyword}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Selected: {keywords.length}/5
            </p>
          </div>
        ) : (
          // Display-only keywords
          <div className="flex flex-wrap gap-2 mb-4">
            {keywords.length > 0 ? (
              keywords.map((keyword, index) => (
                <Button
                  key={index}
                  className="rounded-full text-xs px-4 py-1 h-auto bg-[#005ea2] text-white hover:bg-[#005ea2] hover:text-white">
                  {keyword}
                </Button>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">
                No keywords selected
              </p>
            )}
          </div>
        )}

        <div className="max-w-5xl mx-auto pt-36 px-4 text-center text-[#333747]">
          <h3 className="text-3xl md:text-4xl font-semibold mb-3">
            Boost your brand visibility today.
          </h3>
          <p className="font-semibold text-lg mb-6">
            reach out now and let's take your brand to next level.
          </p>
          <Link
            to="/contact"
            className="bg-[#207ea0] hover:bg-[#207ea0] transition text-white py-3 px-6 rounded shadow">
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}

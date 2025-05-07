import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Share2, Printer, Copy, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TrademarkDetail = {
  id: string;
  owner_name: string;
  mark?: string; // Added mark field
  application_number: string;
  national_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
  read_time?: string;
  keywords?: string[]; // Added keywords field
};

interface TrademarkArticleProps {
  trademark: TrademarkDetail;
}

export function TrademarkArticle({ trademark }: TrademarkArticleProps) {
  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "A";
  };

  return (
      <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Link to="/" className="text-sm hover:underline">
              Articles
            </Link>
            <span className="text-sm">{trademark.read_time || "5 min read"}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 bg-yellow-200 px-2 py-1 inline-block">
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
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-[150px] text-gray-700 font-bold';
                    fallback.textContent = trademark.mark ? trademark.mark.charAt(0).toUpperCase() : getFirstLetter(trademark.owner_name);
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
              <span className="font-semibold text-gray-700 mr-2">Classes:</span>
              <span>{trademark.national_classes || "N/A"}</span>
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

          {/* Share Icons */}
          <div className="flex gap-3 mt-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-center mb-6">Introduction</h2>
          {trademark.description ? (
            <div dangerouslySetInnerHTML={{ __html: trademark.description }} />
          ) : (
            <p className="text-gray-500 italic">No description available for this trademark.</p>
          )}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {/* Default keywords if none are provided */}
            {(!trademark.keywords || trademark.keywords.length === 0) ? (
              <>
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto">
                  Brand Success
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto">
                  Trademark Awareness
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto">
                  Marketing Excellence
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto">
                  Industry Leader
                </Button>
              </>
            ) : (
              // Display user-selected keywords
              trademark.keywords.map((keyword, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="rounded-full text-xs px-4 py-1 h-auto">
                  {keyword}
                </Button>
              ))
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Outcome</p>
          </div>
        </div>
      </article>
    );
}




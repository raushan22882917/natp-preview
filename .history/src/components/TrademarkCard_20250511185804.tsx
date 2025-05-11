import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export type TrademarkResult = {
  id: string;
  owner_name: string;
  application_number: string;
  national_classes?: string;
  us_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
};

interface TrademarkCardProps {
  trademark: TrademarkResult;
}

export function TrademarkCard({ trademark }: TrademarkCardProps) {
  // Format the application date if it exists
  const formattedDate = trademark.application_date
    ? format(new Date(trademark.application_date), "MMM d, yyyy")
    : '';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-row gap-6">
      {/* Left side - Trademark info */}
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">{trademark.mark}</h3>

        {/* Application details in bordered boxes */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="border border-blue-300 rounded px-3 py-2">
            <div className="text-gray-600 text-xs">Application Number</div>
            <div className="font-medium">{trademark.application_number}</div>
          </div>

          {trademark.national_classes && (
            <div className="border border-blue-300 rounded px-3 py-2">
              <div className="text-gray-600 text-xs">National Classes</div>
              <div className="font-medium">{trademark.national_classes}</div>
            </div>
          )}

          {trademark.application_date && (
            <div className="border border-blue-300 rounded px-3 py-2">
              <div className="text-gray-600 text-xs">Application Date</div>
              <div className="font-medium">{formattedDate}</div>
            </div>
          )}

          {trademark.us_classes && (
            <div className="border border-blue-300 rounded px-3 py-2">
              <div className="text-gray-600 text-xs">US Classes</div>
              <div className="font-medium">{trademark.us_classes}</div>
            </div>
          )}
        </div>

        {/* Description paragraph */}
        <p className="text-gray-700 mb-6">
        Our portfolio showcases the innovative brands we've helped elevate. Each entry highlights their unique trademark journey.
        </p>

        {/* View Article button */}
        <Button asChild className="bg-[#00A3E0] hover:bg-[#0091c7]">
          <Link to={`/trademark/${trademark.id}`}>View Article</Link>
        </Button>
      </div>

      {/* Right side - Logo/Image */}
      <div className="flex-shrink-0 w-[300px] h-[200px] bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden">
        {trademark.logo_url ? (
          <img
            src={trademark.logo_url}
            alt={`${trademark.owner_name} logo`}
            className="max-w-full max-h-full object-contain p-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // If image fails to load, show the trademark name as fallback
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'text-center p-4';
                fallback.innerHTML = `
                  <div class="text-2xl font-bold text-gray-800 mb-2">${trademark.owner_name}</div>
                  <div class="text-lg text-gray-600">A MATCHMAKING AGENCY FOR SOCIAL CHANGE</div>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
        ) : (
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-gray-800 mb-2">{trademark.owner_name}</div>
            <div className="text-lg text-gray-600">A MATCHMAKING AGENCY FOR SOCIAL CHANGE</div>
          </div>
        )}
      </div>
    </div>
  );
}

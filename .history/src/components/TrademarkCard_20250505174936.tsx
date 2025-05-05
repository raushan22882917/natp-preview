import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export type TrademarkResult = {
  id: string;
  owner_name: string;
  application_number: string;
  national_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
};

interface TrademarkCardProps {
  trademark: TrademarkResult;
}

export function TrademarkCard({ trademark }: TrademarkCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{trademark.owner_name}</h3>

        <div className="grid grid-cols-2 gap-y-4 mb-6">
          <div className="col-span-1">
            <div className="text-gray-600 text-sm">Application Number</div>
            <div className="font-medium">{trademark.application_number}</div>
          </div>

          {trademark.national_classes && (
            <div className="col-span-1">
              <div className="text-gray-600 text-sm">National Classes</div>
              <div className="font-medium">{trademark.national_classes}</div>
            </div>
          )}

          {trademark.application_date && (
            <div className="col-span-1">
              <div className="text-gray-600 text-sm">Application Date</div>
              <div className="font-medium">
                {format(new Date(trademark.application_date), "MMM d, yyyy")}
              </div>
            </div>
          )}
        </div>

        {trademark.description && (
          <p className="text-gray-700 mb-6">{trademark.description}</p>
        )}

        <Button asChild className="bg-[#00A3E0] hover:bg-[#0091c7] mt-2">
          <Link to={`/trademark/${trademark.id}`}>View Article</Link>
        </Button>
      </div>

      <div className="flex-shrink-0 w-full md:w-[240px] h-[240px] bg-white border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        {trademark.logo_url ? (
          <img
            src={trademark.logo_url} // This will work with both URLs and base64 data
            alt={`${trademark.owner_name} logo`}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // If image fails to load, show the first letter as fallback
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'text-9xl text-gray-700 font-bold';
                fallback.textContent = trademark.owner_name ? trademark.owner_name.charAt(0).toUpperCase() : 'A';
                parent.appendChild(fallback);
              }
            }}
          />
        ) : (
          <div className="text-9xl text-gray-700 font-bold">
            {trademark.owner_name ? trademark.owner_name.charAt(0).toUpperCase() : 'A'}
          </div>
        )}
      </div>
    </div>
  );
}

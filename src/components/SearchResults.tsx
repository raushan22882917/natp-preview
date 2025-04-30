
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";

export type SearchResult = {
  id: string;
  owner_name: string;
  application_number: string;
  national_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
};

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
}

export function SearchResults({ results, loading }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-gray-100">
              <CardContent className="flex flex-row p-6">
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
                <div className="w-[200px] h-[200px] bg-gray-200 rounded ml-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 text-lg">No results found</p>
        <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {results.map((result) => (
        <Card key={result.id} className="bg-white border border-gray-200 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{result.owner_name}</h3>

                <div className="grid grid-cols-1 gap-2 mb-4">
                  <div className="flex">
                    <div className="w-40 font-medium">Application Number</div>
                    <div>{result.application_number}</div>
                  </div>

                  {result.national_classes && (
                    <div className="flex">
                      <div className="w-40 font-medium">National Classes</div>
                      <div>{result.national_classes}</div>
                    </div>
                  )}

                  {result.application_date && (
                    <div className="flex">
                      <div className="w-40 font-medium">Application Date</div>
                      <div>
                        {format(new Date(result.application_date), "MMM d, yyyy")}
                      </div>
                    </div>
                  )}
                </div>

                {result.description && (
                  <p className="text-gray-700 mb-4">{result.description}</p>
                )}

                <Button asChild className="bg-[#00A3E0] hover:bg-[#0091c7] mt-2">
                  <Link to={`/trademark/${result.id}`}>View Article</Link>
                </Button>
              </div>

              <div className="md:ml-6 mt-4 md:mt-0 flex-shrink-0">
                <div className="w-full md:w-[240px] h-[200px] bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  {result.logo_url ? (
                    <img
                      src={result.logo_url}
                      alt={`${result.owner_name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-6xl text-gray-400 font-bold">A</div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

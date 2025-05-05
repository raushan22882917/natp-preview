import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrademarkCard,
  type TrademarkResult,
} from "@/components/TrademarkCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { debounce } from "lodash";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<TrademarkResult[]>([]);
  const [loading, setLoading] = useState(false);

  // We're keeping this function for reference, but it's no longer used for automatic search
  // It could be repurposed for other features if needed in the future
  const debouncedSearch = useCallback((query: string) => {
    const searchFn = debounce(async (searchText: string) => {
      // Function body kept for reference
      console.log("This function is no longer used for automatic search");
    }, 300);

    searchFn(query);
    return searchFn;
  }, []);

  // We're no longer using the automatic search on query change
  // Instead, search will only happen when the user clicks the search button or presses Enter

  // Handle form submission for explicit search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("trademarks")
        .select("*")
        .or(
          `owner_name.ilike.%${searchQuery}%,application_number.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,national_classes.ilike.%${searchQuery}%`
        )
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        setResults(data);
        toast.success(`Found ${data.length} results`);
      } else {
        setResults([]);
        toast.info("No results found for your search");
      }
    } catch (error) {
      toast.error("Failed to perform search. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };
  const features = [
    {
      title: "Instant Access to Publication Status",
      description:
        "Use the Quick Search tool to locate published trademarks by application number or owner name with immediate results.",
    },
    {
      title: "Reliable, Up-to-Date Search Results",
      description:
        "With daily database updates, you receive accurate and current trademark registration information every time you search.",
    },
    {
      title: "Direct Access to Trademark Articles",
      description:
        "Efficient navigation allows quick access to detailed content, supporting greater insight and brand awareness.",
    },
  ];
  const faqs = [
    {
      question: "How to Search for Trademarks?",
      answer:
        "Enter the application number or company name in the search field and select “Search” to view registered trademarks. Each result links to a detailed article for further information.",
    },
    {
      question: "What Information Is Provided?",
      answer:
        "Each trademark entry includes an article with image, owner details, and application date. General trademark guidance is also available to support new brand owners.",
    },
    {
      question: "Can I Update My Search?",
      answer:
        "Yes. You may revise your search at any time by entering a new application number or company name and initiating a new query. This ensures access to the most current trademark status.",
    },
    {
      question: "How to Contact Support?",
      answer:
        "For further assistance, use the 'Contact' button to reach our support team. We are available to address inquiries and ensure reliable guidance on trademark-related matters.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Hero Section */}
      <div className="min-h-[300px] flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold  text-[#333747] mb-6">
          Access Our Private Trademark Database
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#333747]">
          Utilize expert services to strengthen brand visibility and explore trademark opportunities.
          </p>
          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 relative">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Enter owner name, application number, or keywords"
                className="bg-white w-[600px] h-[60px] text-gray-600 z-10 relative pr-4 py-3 border-[#00A3E0] !text-xl font-semibold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(e);
                  }
                }}
              />
              {loading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="bg-[#00A3E0] hover:bg-[#0091c7] min-w-[120px] h-[60px] text-white text-lg"
              disabled={loading}>
              {loading ? "Searching..." : <>Submit</>}
            </Button>
          </form>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-pulse space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                    <div className="h-20 bg-gray-200 rounded w-full mb-4" />
                    <div className="h-10 bg-gray-200 rounded w-32" />
                  </div>
                  <div className="flex-shrink-0 w-full md:w-[240px] h-[240px] bg-gray-200 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && results.length === 0 && searchQuery.trim() !== "" && (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">No results found</p>
            <p className="text-gray-500 mt-2">
              Try adjusting your search terms
            </p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-6">
            {results.map((result) => (
              <TrademarkCard key={result.id} trademark={result} />
            ))}
          </div>
        )}
      </div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-2 text-center">
          <h2 className="text-[50px] font-semibold text-[#333747] mb-4 px-20">
          Find Your Trademark Using the Quick Search Tool
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-15">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <img
                      src="/images/1.svg"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-[24px] font-semibold text-[#333747] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#333747] text-lg font-semibold">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Features */}
      {/* <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Search Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Search by Owner Name</h3>
              <p className="text-gray-600">Search for trademarks using the owner's name to find all associated registrations.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Search by Application Number</h3>
              <p className="text-gray-600">Quickly locate specific trademarks using their unique application numbers.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Search by Description</h3>
              <p className="text-gray-600">Find trademarks by searching through their descriptions and details.</p>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="md:col-span-1">
            <h2 className="text-5xl font-semibold text-[#333747] mb-6">FAQs</h2>
            <p className="text-[#333747] text-lg font-semibold mb-6">
            Get clear answers to key questions about our trademark search and data access tools.
            </p>
            <button className="bg-[#00A3D1] text-white px-6 py-3 shadow-md hover:bg-[#0088b0] transition-colors text-lg font-semibold">
              Contact
            </button>
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 space-y-0 ml-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#2c5ca4] py-6 last:border-b">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}>
                  <span className="text-xl font-medium text-[#333747]">
                    {faq.question}
                  </span>
                  <span className="text-[#2c5ca4]">
                    {openIndex === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-[#333747] text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#2557A7]  text-white pt-10">
        <div className="w-[90vw] h-[40vh] mx-auto px-4 flex justify-between gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/Logo.png" className="w-24 h-24" alt="Logo" />
            </div>
            <div className="mt-40">
              <div className="mb-2 font-semibold">Contact:</div>
              <a
                href="mailto:info@natp-trademark.com"
                className="text-white underline">
                info@natp-trademark.com
              </a>
            </div>
          </div>
          <div className="flex  justify-between items-center gap-20">
            {/* Center Section */}
            <div className="flex flex-col space-y-4 md:col-span-">
              <a href="#" className="hover:underline">
                Our Services
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:underline">
                Trademark Info
              </a>
              <a href="#" className="hover:underline">
                FAQs
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </div>

            {/* Right Section */}
            <div className="flex flex-col space-y-4 md:col-span-1">
              <a href="#" className="hover:underline">
                Trademark Publication
              </a>
              <a href="#" className="hover:underline">
                Search
              </a>
              <a href="#" className="hover:underline">
                Request Publication
              </a>
              <a href="#" className="hover:underline">
                General Information
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-10 pt-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm px-4 mx-10">
          <p>© 2025 NATP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

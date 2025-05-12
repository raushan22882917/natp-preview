import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  TrademarkCard,
  type TrademarkResult,
} from "@/components/TrademarkCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { debounce } from "lodash";
import { SearchResults } from "@/components/SearchResults";
import { Footer } from "@/components/Footer";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchQuery);

  // Log whenever component renders to debug
  console.log("Search component rendering with query:", searchQuery);

  const [results, setResults] = useState<TrademarkResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  // Define performSearch function first, before any useEffect that uses it
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      // Get all trademarks first
      const { data: allTrademarks, error } = await supabase
        .from("trademarks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      console.log("Searching for:", query);

      // Filter the results based on our specific criteria with case sensitivity
      const filteredResults = allTrademarks.filter(trademark => {
        // Track if we found a match for debugging
        let matchFound = false;
        let matchReason = "";

        // 1. Exact match for application number (must be exact, including case)
        if (trademark.application_number && trademark.application_number === query) {
          matchFound = true;
          matchReason = `Match found by application number: ${trademark.application_number}`;
        }

        // 2. Exact word match for mark words (case sensitive)
        if (!matchFound && trademark.mark) {
          // Split by whitespace to get individual words
          const markWords = trademark.mark.split(/\s+/);

          // Check if any word exactly matches the query (case sensitive)
          if (markWords.some(word => word === query)) {
            matchFound = true;
            matchReason = `Match found by mark word: ${query} in ${trademark.mark}`;
          }
        }

        // 3. Exact word match for owner name words (except "LLC") (case insensitive for owner names)
        if (!matchFound && trademark.owner_name) {
          // Split by whitespace to get individual words
          const ownerWords = trademark.owner_name.split(/\s+/);

          // Convert query to lowercase for case-insensitive comparison with owner names
          const queryLower = query.toLowerCase();

          // Check if any word matches the query (case insensitive) and is not "LLC"
          if (ownerWords.some(word => word.toLowerCase() === queryLower && word !== "LLC")) {
            matchFound = true;
            matchReason = `Match found by owner word: ${query} in ${trademark.owner_name}`;
          }
        }

        // Log the result for this trademark
        if (matchFound) {
          console.log(matchReason);
          console.log("Full trademark data:", {
            id: trademark.id,
            application_number: trademark.application_number,
            mark: trademark.mark,
            owner_name: trademark.owner_name
          });
        }

        return matchFound;
      });

      if (filteredResults.length > 0) {
        setResults(filteredResults);
        if (searchSubmitted) {
          toast.success(`Found ${filteredResults.length} results`);
        }
      } else {
        setResults([]);
        if (searchSubmitted) {
          toast.info("No results found for your search");
        }
      }
    } catch (error) {
      console.error("Search error:", error);
      if (searchSubmitted) {
        toast.error("Failed to perform search. Please try again.");
      }
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [searchSubmitted]);

  // Debug info
  useEffect(() => {
    console.log("Search page loaded with query:", searchQuery);
  }, [searchQuery]);

  // Update inputValue whenever searchQuery (from URL) changes
  useEffect(() => {
    console.log("URL query param changed to:", searchQuery);
    setInputValue(searchQuery);
    // If there's a search query in the URL, consider it as submitted
    if (searchQuery) {
      setSearchSubmitted(true);
      performSearch(searchQuery);
    }
  }, [searchQuery, performSearch]);

  // Effect to trigger search when query changes
  useEffect(() => {
    if (!searchQuery) return;

    // Create a debounced function inside the effect
    const debouncedFn = debounce(() => {
      performSearch(searchQuery);
    }, 300);

    // Execute the debounced function
    debouncedFn();

    // Clean up
    return () => {
      debouncedFn.cancel();
    };
  }, [searchQuery, performSearch]);

  // Handle form submission for explicit search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setSearchParams({ q: inputValue }); // Update URL
    setSearchSubmitted(true);
  };

  const features = [
    {
      title: "Instant Access to Publication Status",
      description:
        "Use the Quick Search tool to locate published trademarks by application number or owner name - find the same trademark with either search method.",
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
        "You can find the same trademark by searching with either its application number or a word from its owner name or mark. Enter the exact application number (e.g., 97654321), an exact word from the trademark name, or an exact word from the owner name (except 'LLC') in the search field and select 'Submit'. The search is case sensitive for application numbers and mark words, but case insensitive for owner names. For example, searching for 'raushan' will match both 'raushan' and 'RAUSHAN' in owner names. For application numbers, all digits must match exactly. Each result links to a detailed article for further information.",
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
        "For further assistance, use the 'Contact Us' button to reach our support team. We are available to address inquiries and ensure reliable guidance on trademark-related matters.",
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
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-6">
            Access Our Private Trademark Database
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-[#333747]">
            Utilize expert services to strengthen brand visibility and explore
            trademark opportunities.
          </p>
          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 relative">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search using the application number or owners's name."
                className="bg-white w-full sm:w-[600px] h-[60px] text-gray-600 z-10 relative pr-4 py-3 border-[#207ea0] !text-xl font-semibold"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#207ea0] hover:bg-[#207ea0] min-w-[120px] h-[60px] text-white text-lg"
              disabled={loading}>
              {loading ? "Searching..." : <>Submit</>}
            </Button>
          </form>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <SearchResults
          results={results}
          loading={loading}
          searchSubmitted={searchSubmitted}
          searchQuery={searchQuery}
        />
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-2 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[50px] font-semibold text-[#333747] mb-4 px-2 sm:px-10 md:px-20">
            Find Your Trademark Using the Quick Search Tool
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-15">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <img src="/images/1.svg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#333747] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#333747] text-base sm:text-lg font-semibold">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="md:col-span-1 mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-6">
              FAQs
            </h2>
            <p className="text-[#333747] text-lg sm:text-xl font-semibold mb-6">
              Get clear answers to key questions about our trademark search and
              data access tools.
            </p>
            <button className="bg-[#207ea0] text-white px-6 py-3 shadow-md hover:bg-[#207ea0] transition-colors text-lg font-semibold">
              Contact Us
            </button>
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#207ea0] py-6 last:border-b">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}>
                  <span className="text-xl sm:text-2xl font-medium text-[#333747]">
                    {faq.question}
                  </span>
                  <span className="text-[#207ea0]">
                    {openIndex === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-[#333747] text-lg sm:text-xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Footer } from "@/components/Footer";
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

  // Debounced search function that will execute after user stops typing
  const debouncedSearch = useCallback((query: string) => {
    const searchFn = debounce(async (searchText: string) => {
      if (!searchText.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("trademarks")
          .select("*")
          .or(
            `owner_name.ilike.%${searchText}%,application_number.ilike.%${searchText}%,description.ilike.%${searchText}%,national_classes.ilike.%${searchText}%`
          )
          .order("created_at", { ascending: false })
          .limit(10);

        if (error) throw error;

        if (data && data.length > 0) {
          setResults(data);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    searchFn(query);
    return searchFn;
  }, []);

  // Effect to trigger search when query changes
  useEffect(() => {
    const searchFn = debouncedSearch(searchQuery);

    // Cleanup function to cancel debounced search on unmount
    return () => {
      searchFn.cancel();
    };
  }, [searchQuery, debouncedSearch]);

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
      title: "Find Your Brand's Publication Status Instantly",
      description:
        "Our Quick Search tool allows you to enter an application number or owner’s name to swiftly locate your published trademarks.",
    },
    {
      title: "Get Accurate Results Every Time You Search",
      description:
        "Our database is updated daily, ensuring you receive the most accurate and up-to-date information on trademark registrations.",
    },
    {
      title: "Navigate Effortlessly to Your Brand's Articles",
      description:
        "With easy navigation, you can quickly access detailed articles about each trademark, enhancing your understanding and awareness.",
    },
  ];
  const faqs = [
    {
      question: "How to search trademarks?",
      answer:
        "To search for trademarks, enter the application number or company name in the search bar. Click the search button to view registered brands. Each brand icon will lead you to a detailed article.",
    },
    {
      question: "What information is available?",
      answer:
        "You can find detailed articles about each trademark, including the trademark image, owner, and application date. We also provide general information about trademarks to enhance your understanding. This information is designed to support new brand owners.",
    },
    {
      question: "Can I update my search?",
      answer:
        "Yes, you can modify your search at any time by entering a new application number or company name. Simply replace the existing input and click search again. This allows you to stay updated on your trademark status.",
    },
    {
      question: "How to contact support?",
      answer:
        "If you have further questions, click the 'Contact' button for assistance. Our support team is available to help you with any inquiries. We are committed to providing the best support for your trademark needs.",
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
            Explore Our Private Database
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#333747]">
            Discover the power of trademarks and boost your brand visibility
            with our expert services.
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
            Discover Your Trademark with Our Quick Search Feature
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-15">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <img
                      src="https://wtpregister.com/images/tpm/box-icon.png"
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
              Find answers to common questions about our search functionality
              and trademark information.
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

      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, BarChart } from "lucide-react";
import { Footer } from "@/components/Footer";
export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <div className="hero-waves min-h-[200px] flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/90">
            Comprehensive solutions designed to elevate your brand's visibility and recognition
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto pb-4 py-12">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-28 items-start md:items-center px-4">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-[45px] font-semibold text-[#333747] leading-tight mb-4">
              Strategic Brand Visibility Services
            </h2>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <p className="text-[#333747] font-medium md:font-semibold text-base md:text-lg leading-relaxed">
              We support emerging brands by improving their market presence
              through targeted visibility measures. Our team of marketing
              professionals and content specialists ensures effective
              positioning within the trademark landscape.
            </p>
          </div>
        </div>

        {/* Trademark Publication Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-start px-4">
          {/* Text Content */}
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#333747] mb-4 md:mb-6 leading-tight">
              Trademark Publication for Brand Advancement
            </h3>
            <p className="text-[#333747] text-base md:text-lg font-medium mb-4 md:mb-6 leading-relaxed">
              Our process enhances visibility and credibility by publicly
              presenting your trademark, supporting recognition and trust within
              your target market.
            </p>
            <Button
              asChild
              className="bg-[#207ea0] hover:bg-[#1a6d8e] text-white py-3 px-5 md:py-4 md:px-6 shadow-lg rounded-md transition-all duration-300">
              <Link to="/services/publication" className="inline-block">
                More Info
              </Link>
            </Button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/3 w-full">
            <img
              src="/images/trademark-publication.jpg"
              alt="Illustration representing trademark publication"
              className="w-full h-auto rounded-md object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/Trademark Publication.svg";
              }}
            />
          </div>
        </div>

        {/* Article Creation Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-32 items-start">
          <div className="md:w-2/3 w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#333747] mb-4 md:mb-6">
              Article Creation for Brand Visibility
            </h3>
            <p className="text-[#333747] text-base md:text-lg mb-6 md:mb-8 font-semibold">
              We produce tailored, high-quality articles to present your brand
              and trademark, strengthening recognition and audience engagement.
            </p>
            <Button
              asChild
              className="bg-[#207ea0] hover:bg-[#1a6d8e] text-white py-3 px-5 md:py-4 md:px-6 shadow-xl rounded-md transition-all duration-300">
              <Link to="/services/article" className="inline-block">
                More Info
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3 w-full">
            <img
              src="/images/article-creation.jpg"
              alt="Article Creation"
              className="w-full max-h-[300px] object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/Article Creation.svg";
              }}
            />
          </div>
        </div>

        {/* SEO Solutions Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-32 items-start">
          <div className="md:w-2/3 w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#333747] mb-4 md:mb-6">
              Customized SEO for Targeted Visibility
            </h3>
            <p className="text-[#333747] text-base md:text-lg font-semibold mb-6 md:mb-8">
              Our expert-driven strategies improve search rankings and ensure
              focused exposure for your brand and trademark.
            </p>
            <Button
              asChild
              className="bg-[#207ea0] hover:bg-[#1a6d8e] text-white py-3 px-5 md:py-4 md:px-6 shadow-xl rounded-md transition-all duration-300">
              <Link to="/services/seo" className="inline-block">
                More Info
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3 w-full">
            <img
              src="/images/seo-solutions.jpg"
              alt="SEO Solutions"
              className="w-full max-h-[300px] object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/Customized SEO.svg";
              }}
            />
          </div>
        </div>

        {/* Complete Power Section */}
        <div className="p-8 mb-16 max-w-5xl mx-auto">
          {/* Top section: heading + description side by side */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="md:w-1/2 mb-6">
              <h3 className="text-4xl font-semibold text-[#333747] leading-snug">
                Unlock Your Brand’s Full Market Potential
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#333747] text-base font-semibold leading-relaxed">
                We enhance brand visibility through ongoing database updates and
                strategic support, ensuring relevance and discoverability in a
                competitive environment.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img src="/images/1.svg" alt="" className="w-10 h-10" />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Daily Updates for Current Brand Data
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                Our system ensures your trademark information remains accurate
                and up to date.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <img src="/images/1.svg" alt="" className="w-10 h-10" />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Consistent Support Throughout the Process
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                Our support team is available to assist you at all times.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <img src="/images/1.svg" alt="" className="w-10 h-10" />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Ongoing Enhancement for Quality and Usability
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                We regularly improve content and platform functionality to
                ensure an optimal user experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-lg ">
          <h3 className="text-5xl font-semibold text-[#333747] mb-8">
            Begin Building Your Brand Presence Today
          </h3>
          <p className="text-[#333747] text-[18px] font-semibold mb-8 max-w-5xl text-center ">
            Leverage our trademark publication services to strengthen visibility
            and unlock brand potential.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-[#207ea0] text-white hover:bg-[#207ea0] py-6 px-8 shadow-xl ">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

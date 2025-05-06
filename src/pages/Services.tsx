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
        <div className="flex flex-col md:flex-row gap-12 mb-28 items-center">
          <div className="md:w-1/2">
            <h2 className="text-[45px] font-semibold text-[#333747] mb-4">
              Strategic Brand Visibility Services
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#333747] font-semibold text-lg">
              We support emerging brands by improving their market presence
              through targeted visibility measures. Our team of marketing
              professionals and content specialists ensures effective
              positioning within the trademark landscape.
            </p>
          </div>
        </div>

        {/* Trademark Publication Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
          <div className="md:w-2/3 mb-16">
            <h3 className="text-3xl font-semibold text-[#333747] mb-8">
              Trademark Publication for Brand Advancement
            </h3>
            <p className="text-[#333747] mb-8 text-lg font-semibold">
              Our process enhances visibility and credibility by publicly
              presenting your trademark, supporting recognition and trust within
              your target market.
            </p>
            <Button
              asChild
              className="bg-[#00A3E0] hover:bg-[#00A3E0] text-white py-6 px-8 shadow-xl">
              <Link to="/services/publication" className="inline-block">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/trademark-publication.jpg"
              alt="Trademark Publication"
              className="w-full h-auto rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/Trademark Publication.svg";
              }}
            />
          </div>
        </div>

        {/* Article Creation Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-32 items-start">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-semibold text-[#333747] mb-6">
              Article Creation for Brand Visibility
            </h3>
            <p className="text-[#333747] mb-8 text-lg font-semibold">
              We produce tailored, high-quality articles to present your brand
              and trademark, strengthening recognition and audience engagement.
            </p>
            <Button
              asChild
              className="bg-[#00A3E0] hover:bg-[#00A3E0] text-white float-end py-6 px-8 shadow-xl">
              <Link to="/services/article" className="inline-block">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/article-creation.jpg"
              alt="Article Creation"
              className="w-full h-auto rounded-md flex items-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/Article Creation.svg";
              }}
            />
          </div>
        </div>

        {/* SEO Solutions Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-32 items-start">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-semibold text-[#333747] mb-6">
              Customized SEO for Targeted Visibility
            </h3>
            <p className="text-[#333747] text-lg font-semibold mb-8">
              Our expert-driven strategies improve search rankings and ensure
              focused exposure for your brand and trademark.
            </p>
            <Button
              asChild
              className="bg-[#00A3E0] text-white py-6 px-8 shadow-xl hover:bg-[#00A3E0]">
              <Link to="/services/seo" className="inline-block">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/seo-solutions.jpg"
              alt="SEO Solutions"
              className="w-full h-auto rounded-md"
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
              className="bg-[#00A3E0] text-white hover:bg-[#00A3E0] py-6 px-8 shadow-xl ">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

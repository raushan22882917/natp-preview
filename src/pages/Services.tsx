import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, BarChart } from "lucide-react";
import { Footer } from "@/components/Footer";
export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              Strategies Designed to Showcase Your Brand
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#333747] font-semibold text-lg">
              Our services are designed to elevate new brands, ensuring they
              gain the visibility they deserve in today's competitive market.
              With a dedicated team of marketing experts and professional
              content creators, we are committed to helping you navigate the
              trademark landscape and enhance your brand's presence.
            </p>
          </div>
        </div>

        {/* Trademark Publication Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-2/3 mb-16">
            <h3 className="text-3xl font-semibold text-[#333747] mb-8">
              Trademark Publication: Unlock Your Brand's Potential
            </h3>
            <p className="text-[#333747] mb-8 text-lg font-semibold">
              Our trademark publication process is designed to elevate your
              brand's visibility and credibility. By showcasing your trademark,
              we help you build awareness and trust among your target audience.
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
              className="w-full h-auto rounded-md shadow-md bg-blue-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://wtpregister.com/images/tpm/Services-TRADEMARK-PUBLICATION.png";
              }}
            />
          </div>
        </div>

        {/* Article Creation Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-32 items-center">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-semibold text-[#333747] mb-6">
              Article Creation: Enhance Your Brand's Exposure and Recognition
            </h3>
            <p className="text-[#333747] mb-8 text-lg font-semibold">
              Our team of professional content creators specializes in producing
              high-quality articles that showcase your brand and trademark. By
              enhancing your visibility, we help you connect with your audience
              and establish a strong market presence.
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
              className="w-full h-auto rounded-md shadow-md flex items-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://wtpregister.com/images/tpm/Services-Article-picture.png";
              }}
            />
          </div>
        </div>

        {/* SEO Solutions Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-32 items-center">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-semibold text-[#333747] mb-6">
              Tailored SEO Solutions Designed Specifically for Your Needs
            </h3>
            <p className="text-[#333747] text-lg font-semibold mb-8">
              Our SEO strategies are designed to elevate your search engine
              rankings and enhance brand visibility. With a dedicated team of
              experts, we ensure your trademark and brand receive the attention
              they deserve.
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
              className="w-full h-auto rounded-md shadow-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://wtpregister.com/images/tpm/Services-seo-PICTURE.png";
              }}
            />
          </div>
        </div>

        {/* Complete Power Section */}
        <div className="p-8 mb-16 max-w-5xl mx-auto">
          {/* Top section: heading + description side by side */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="md:w-1/2 mb-6">
              <p className="text-xs font-semibold text-[#333747] tracking-wider mb-2">
                Services
              </p>
              <h3 className="text-4xl font-semibold text-[#333747] leading-snug">
                Discover the Complete Power of Your Brand
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#333747] text-base font-semibold leading-relaxed">
                Our services are designed to elevate your brand's visibility in
                the marketplace. With daily updates to our trademark database,
                we ensure that your brand remains relevant and easily
                discoverable. Trust our dedicated team to provide you with the
                support and expertise you need to thrive.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img
                  src="https://wtpregister.com/images/tpm/icons/box.svg"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Stay Ahead with Daily Database Updates
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                We update our database every day to keep your brand information
                current.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <img
                  src="https://wtpregister.com/images/tpm/icons/box.svg"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Experience Exceptional Support Every Step of the Way
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                Our dedicated customer support team is always available to
                assist you.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <img
                  src="https://wtpregister.com/images/tpm/icons/box.svg"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <h4 className="font-semibold text-[#333747] text-2xl mb-6">
                Commitment to Continuous Improvement
              </h4>
              <p className="text-[#333747] text-sm font-semibold">
                We continually enhance our articles and website for better user
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-lg ">
          <h3 className="text-5xl font-semibold text-[#333747] mb-8">
            Start Your Brand Journey Today
          </h3>
          <p className="text-[#333747] text-[18px] font-semibold mb-8 max-w-5xl ">
            Discover your brand's potential through our professional trademark
            publication services. Together, we can enhance your visibility.
          </p>
          <Button
            asChild
            className="bg-[#00A3E0] text-white hover:bg-[#00A3E0] py-6 px-8 shadow-xl">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

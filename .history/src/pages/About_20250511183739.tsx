import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* About Hero Section */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#333747] max-w-xl">
            Supporting Emerging Brands
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#333747] max-w-xl">
            We strengthen new brands by managing trademark visibility through
            expert publications and marketing, allowing owners to focus on
            business operations.
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl text-[#333747] font-semibold mb-6">
              Establishing a Trademark Database for New Brands
            </h2>
            <p className="text-[#333747] mb-8 font-semibold text-lg md:text-xl">
              We built a trademark database to support emerging brands. Our aim
              is to increase visibility through targeted content and strategic
              marketing.
            </p>

            {/* Sub Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 mb-4">
                  <img src="/images/1.svg" alt="Origin Icon" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-[#363636]">
                  Our Origins
                </h4>
                <p className="text-[#212529] font-semibold text-base">
                  Founded to guide new brands through trademark challenges.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 mb-4">
                  <img src="/images/1.svg" alt="Mission Icon" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-[#363636]">
                  Our Mission
                </h4>
                <p className="text-[#212529] font-semibold text-base">
                  Providing the tools and support for emerging brands to
                  succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="/images/Establishing a Trademark Database.svg"
              alt="Trademark Database Graphic"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold text-[#333747] mb-16 leading-snug max-w-4xl mx-auto">
            Our Principles at a Glance
          </h2>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Professionalism.svg"
                alt="Professionalism Icon"
                className="w-20 h-20 mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-2">
                Professionalism
              </h4>
              <p className="text-[#333747] font-semibold text-base">
                We ensure high standards in all services.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Client Focus.svg"
                alt="Client Focus Icon"
                className="w-20 h-20 mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-2">
                Client Focus
              </h4>
              <p className="text-[#333747] font-semibold text-base">
                Tailored support for each brand’s needs.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Progress.svg"
                alt="Progress Icon"
                className="w-20 h-20 mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-2">
                Progress
              </h4>
              <p className="text-[#333747] font-semibold text-base">
                We continuously improve to better serve you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 relative">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#333747] mb-6 leading-snug">
                You focus on your business, we manage your brand visibility.
              </h2>
            </div>
          </div>

          {/* Right Boxes */}
          <div className="md:w-1/2 space-y-6">
            {[
              {
                title: "Comprehensive Client Support Services",
                desc: "Our team is ready to assist with any request promptly and reliably.",
              },
              {
                title: "Strategic Innovation in Service Delivery",
                desc: "We develop unique strategies to help your brand stand out.",
              },
              {
                title: "Integrated Brand Visibility Management",
                desc: "From content to visibility we cover all aspects of brand awareness.",
              },
              {
                title: "Specialized Expertise and Strategic Guidance",
                desc: "Our experts deliver effective strategies for stronger brand presence.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-3 border-[#005ea2] p-6 rounded-lg flex items-start gap-4">
                <img
                  src="/images/2.svg"
                  alt="Service icon"
                  className="w-[45px] h-[45px] object-contain mt-1"
                />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#333747]">
                    {item.title}
                  </h4>
                  <p className="text-[#333747]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto py-16 px-4 text-center text-[#333747]">
        <h3 className="text-3xl md:text-4xl font-semibold mb-3">
          Contact our team to enhance your brand visibility.
        </h3>
        <p className="font-semibold text-lg mb-6">
          Discover how we can elevate your brand visibility.
        </p>
        <Link
          to="/contact"
          className="bg-[#207ea0] hover:bg-[#207ea0] transition text-white py-3 px-6 rounded shadow">
          Contact Us
        </Link>
      </div>

      <Footer />
    </div>
  );
}

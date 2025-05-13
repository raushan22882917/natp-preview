import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { Link } from "react-router-dom";

export default function Index() {
  // Use the hash scroll hook to handle scrolling to sections
  useHashScroll();

  const faqs = [
    {
      question: "What is trademark publication?",
      answer:
        "Trademark publication refers to the official disclosure of a trademark application to the public. This step enables public awareness and provides an opportunity for potential objections. Our service ensures that your trademark is properly published and positioned for market visibility.",
    },
    {
      question: "How are articles created?",
      answer:
        "Articles are prepared by qualified content specialists and are specifically designed to highlight your trademark. Each text is customized to improve brand visibility and audience engagement, with a focus on quality, relevance, and strategic impact.",
    },
    {
      question: "What SEO services offered?",
      answer:
        "We offer a full range of SEO services, including keyword optimization, content strategy, and link building. These measures improve your brand’s online discoverability and support targeted trademark visibility.",
    },
    {
      question: "How can I apply?",
      answer:
        "You may submit your application through our online form by providing the required trademark details. Our team will assist you throughout the process to ensure efficient and accurate submission.",
    },
    {
      question: "Can I update my article?",
      answer:
        "Yes. Article revisions may be requested at any time. Our team ensures that all content remains current and aligned with your brand. Please contact us with the necessary adjustments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-inter relative">
      <Navbar />
      <Hero />

      {/* Main content starts immediately after Hero */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-center my-16 px-4">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#333747] text-[28px] md:text-[35px] font-semibold my-4 leading-snug">
            You focus on your business, we manage your brand visibility.
          </h2>
          <p className="text-base md:text-lg font-semibold text-[#333747] mb-5">
            Our team handles brand visibility, enabling you to focus on growth.
            Through professional trademark publication and marketing, we
            position your brand effectively in a competitive environment.
          </p>
          <button className="bg-[#207ea0] shadow-xl text-white px-6 py-3 my-4">
            More Info
          </button>
        </div>
        <img
          src="/images/Icon_You_focus_on_your_business,_we_manage_your_brand_visibility.svg"
          className="rounded-md shadow w-full md:w-[55%]"
          alt="Business Illustration"
        />
      </div>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl font-inter mx-auto p-2">
          <h2 className="text-[38px] w-[70%] leading-tight font-semibold text-[#333747] mb-12">
            Integrated Services for Brand Visibility and Trademark Recognition
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col shadow-sm h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img
                    src="/images/Content Service.svg"
                    alt="Article Creation"
                    className="w-[220px] mx-auto mb-8"
                  />
                  <h3 className="text-2xl font-semibold text-[#333747] -mt-5 leading-tight mb-6">
                    Professional Content Services for Trademark Promotion
                  </h3>
                  <p className="text-[#333747] text-[16px] font-semibold mb-6">
                    We provide trademark publication, expert article
                    development, and SEO-focused visibility enhancement.
                  </p>
                </div>
                <button className="bg-[#207ea0] text-white py-3 px-6 shadow-xl mt-auto mr-auto">
                  More Info
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col shadow-sm h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img
                    src="/images/Targeted SEO.svg"
                    alt="SEO Strategies"
                    className="w-[220px] mx-auto mb-8"
                  />
                  <h3 className="text-2xl font-semibold text-[#333747] -mt-5 leading-tight mb-[3.4rem]">
                    Targeted SEO Measures for Improved Online Visibility
                  </h3>
                  <p className="text-[#333747] text-[16px] font-semibold mb-6">
                    We apply proven strategies to strengthen your brand’s
                    presence in search rankings.
                  </p>
                </div>
                <button className="bg-[#207ea0] text-white py-3 px-6 shadow-xl mt-auto mr-auto">
                  More Info
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col shadow-sm h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img
                    src="/images/Brand Recognition and Protection.svg"
                    alt="Trademark Services"
                    className="w-[220px] mx-auto mb-8"
                  />
                  <h3 className="text-2xl font-semibold text-[#333747] -mt-5 leading-tight mb-6">
                    Trademark Publication for Brand Recognition and Protection
                  </h3>
                  <p className="text-[#333747] text-[16px] font-semibold mb-6">
                    We publish your trademark to support brand visibility and
                    legal security.
                  </p>
                </div>
                <button className="bg-[#207ea0] text-white py-3 px-6 shadow-xl mt-auto mr-auto">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-20 px-4 bg-white max-w-5xl mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] leading-snug font-bold text-[#333747] text-center md:text-left">
            Explore our track record in effective brand visibility and
            registration support.
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-[#333747] text-base sm:text-lg font-semibold leading-relaxed text-center md:text-left">
            Our services achieve consistently high success rates, securing the
            visibility your brand requires. Numerous clients have relied on our
            expertise to strengthen their market presence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-3">
                95%
              </p>
              <p className="text-sm sm:text-base text-[#333747]">
                Client satisfaction remains our core commitment.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-3">
                100%
              </p>
              <p className="text-sm sm:text-base text-[#333747]">
                All trademark publications adhere to strict quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center sm:px-10 lg:px-20">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333747] mb-6">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-[#333747] mb-12 text-base sm:text-lg font-semibold">
            Information on trademark publication, content services, and SEO
            support.
          </p>

          {/* FAQs */}
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-[#207ea0] py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}>
                  <h3 className="text-[#333747] text-lg sm:text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <span className="text-[#207ea0] text-xl">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-[#333747] text-sm sm:text-base mt-4 font-medium">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <div className="pt-12 pb-20 px-4  text-center">
        <h2 className="text-4xl font-semibol text-gary-600 mb-4 text-[#333747]">
          Join Our Team
        </h2>
        <p className="mb-6 text-lg font-semibold text-[#333747]">
          We’re hiring qualified professionals now.
        </p>
        <Link to="/contact" className="bg-[#207ea0]  text-white  py-3 px-6  shadow-xl mr-auto">
          Contact Us
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

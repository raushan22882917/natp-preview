import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Index() {
  const faqs = [
    {
      question: "What is trademark publication?",
      answer:
        "Trademark publication is the process of making a trademark application publicly available. This helps to inform the public about new trademarks and allows for opposition if necessary. Our service ensures that your brand gains visibility in the marketplace.",
    },
    {
      question: "How are articles created?",
      answer:
        "Our team of professional content creators crafts articles that highlight your trademark. Each article is tailored to enhance your brand's visibility and engagement. We focus on quality and relevance to ensure maximum impact.",
    },
    {
      question: "What SEO services offered?",
      answer:
        "We provide comprehensive SEO services designed to boost your brand's online presence. Our strategies include keyword optimization, content marketing, and link building. This ensures your trademark is easily discoverable by your target audience.",
    },
    {
      question: "How can I apply?",
      answer:
        "Applying for trademark publication is simple. You can fill out our online application form, providing the necessary details about your trademark. Our team will guide you through the process to ensure a smooth experience.",
    },
    {
      question: "Can I update my article?",
      answer:
        "Yes, you can request updates to your article at any time. Our team is dedicated to ensuring your content remains accurate and relevant. Simply reach out to us with your desired changes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-inter relative">
      <Navbar />
      <Hero />

      {/* Main content starts immediately after Hero */}
      <div className="max-w-5xl mx-auto flex justify-between gap-10 items-center my-16">
        <div className="w-1/2">
          <h2 className="text-[#333747] text-[45px] font-semibold my-4 leading-snug">
            Focus on Your Business, We Handle Awareness
          </h2>
          <p className="text-lg font-semibold text-[#333747] mb-5">
            Our dedicated team takes care of your brand's visibility, allowing
            you to concentrate on what you do best—growing your business. With
            our expertise in trademark publication and marketing, we ensure your
            brand stands out in a competitive marketplace.
          </p>
          <button className="bg-[#00a3d1] shadow-xl text-white px-6 py-3 my-4">
            Learn More
          </button>
        </div>
        <img
          src="https://wtpregister.com/images/tpm/start-page-2.png"
          className="rounded-md shadow w-[45%]"
          alt=""
        />
      </div>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl font-inter mx-auto p-2">
          <h2 className="text-[38px] w-[70%] leading-tight font-semibold text-[#333747] mb-12">
            Comprehensive Services to Elevate <br />
            Your Brand Visibility and Trademark Awareness
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className=" flex flex-col shadow-sm">
              <img
                src="https://wtpregister.com/images/tpm/icons/article-mix.svg"
                alt="Article Creation"
                className="w-[220px] mx-auto mb-8"
              />
              <h3 className="text-2xl font-semibold  text-[#333747] -mt-5 leading-tight mb-6">
                Expert Article Creation to Showcase Your Brand and Trademark
                Effectively
              </h3>
              <p className="text-[#333747] text-[16px] font-semibold mb-6">
                Our services include trademark publication, professional article
                creation, and SEO optimization.
              </p>
              <button className="bg-[#00a3d1] text-white  py-3 px-6  shadow-xl mr-auto">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className=" flex flex-col   shadow-sm">
              <img
                src="https://wtpregister.com/images/tpm/icons/seo-MIX.svg"
                alt="SEO Strategies"
                className="w-[220px] mx-auto mb-8"
              />
              <h3 className="text-2xl font-semibold  text-[#333747] -mt-5 leading-tight mb-6">
                SEO Strategies to Enhance Your Brand’s Online Presence and Reach
              </h3>
              <p className="text-[#333747] text-[16px] font-semibold mb-6">
                We implement effective SEO techniques to boost your brand's
                visibility in search results.
              </p>
              <button className="bg-[#00a3d1]  text-white  py-3 px-6  shadow-xl mr-auto">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className=" flex flex-col  shadow-sm">
              <img
                src="https://wtpregister.com/images/tpm/icons/publicartion-MIXCOLOR.svg"
                alt="Trademark Services"
                className="w-[220px] mx-auto mb-8"
              />
              <h3 className="text-2xl font-semibold  text-[#333747] -mt-5 leading-tight mb-6">
                Trademark Publication Services to Promote Your Brand Identity
              </h3>
              <p className="text-[#333747] text-[16px] font-semibold mb-6">
                Our trademark publication service ensures your brand is
                recognized and protected.
              </p>
              <button className="bg-[#00a3d1] mt-4 text-white  py-3 px-6  shadow-xl mr-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-20 bg-white max-w-5xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-[35px] leading-10 font-bold text-[#333747]">
            Transforming Brands: Discover Our Unmatched Trademark Publication
            Success Rates
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-[#333747] text-lg font-semibold mb-6 leading-relaxed">
            Our trademark publication services boast a remarkable success rate,
            ensuring your brand gains the visibility it deserves. Join countless
            satisfied clients who have trusted us to elevate their brand's
            presence.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <p className="text-5xl font-semibold mr-36 mb-5 text-[#333747]">95%</p>
              <p className="text-[16px] text-[#333747]">
                Client satisfaction is our top priority and commitment.
              </p>
            </div>
            <div className="">
              <p className="text-5xl font-semibold mr-36 mb-5 text-[#333747]">100%</p>
              <p className="text-[16px] text-[#333747]">
                Every trademark publication meets our high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center px-40">
          {/* Heading */}
          <h2 className="text-5xl font-semibold  text-[#333747] mb-6">FAQs</h2>
          <p className="text-[#333747] mb-12 text-lg font-semibold">
            Find answers to your questions about trademark publication, article
            creation, and SEO services.
          </p>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-[#2c5ca4] py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}>
                  <h3 className="  text-[#333747] text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <span className="text-[#2c5ca4] text-xl">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-[#333747] text-left text-[16px] mr-5 mt-4 font-semibold">
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
          We're Hiring!
        </h2>
        <p className="mb-6 text-lg font-semibold text-[#333747]">
          Explore exciting career opportunities with us today!
        </p>
        <button className="bg-[#00a3d1]  text-white  py-3 px-6  shadow-xl mr-auto">
          Contact HR
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

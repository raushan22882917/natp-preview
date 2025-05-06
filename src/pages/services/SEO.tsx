import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
export default function SEO() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <div className=" min-h-[200px] flex items-center justify-center">
        <div className=" max-w-5xl   flex gap-5">
          <h1 className="text-5xl font-semibold text-[#333747]  mb-4">
            Search Engine Optimization (SEO)
          </h1>
          <p className="w-1/2 text-[#333747] text-lg font-semibold">
            We improve your brand’s search engine visibility through targeted
            keyword strategies and optimized content, enabling sustained organic
            reach and audience trust.
          </p>
        </div>
      </div>

      <section className=" py-16  my-10">
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-4xl font-semibold  text-[#333747] mb-6">
            Strengthen Brand Visibility Through SEO
          </h2>
          <p className="text-[#333747] font-semibold text-lg max-w-5xl  mb-16">
            Effective SEO supports emerging brands in building a strong online
            presence. We optimize content, apply targeted keywords, and improve
            site structure to increase search rankings, attract qualified
            traffic, and establish credibility.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-[12rem]">
            {/* Card 1 */}
            <div className="flex flex-col ">
              <img
                src="/images/1.svg"
                className="
            w-10 h-10"
                alt=""
              />
              <h3 className="text-[26px] font-semibold mt-4 text-[#333747] mb-6">
                Targeted Content Optimization
              </h3>
              <p className="text-[#333747] text-[15px] font-semibold ">
                We align your website content with audience expectations to
                improve relevance and engagement.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <img
                src="/images/1.svg"
                className="
            w-10 h-10"
                alt=""
              />
              <h3 className="text-[26px] font-semibold mt-4 text-[#333747] mb-6">
                Keyword Strategy for Enhanced Visibility
              </h3>
              <p className="text-[#333747]  text-[15px] font-semibold">
                We analyze and apply high-impact keywords to maximize search
                reach and relevance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col">
              <img
                src="/images/1.svg"
                className="
            w-10 h-10"
                alt=""
              />
              <h3 className="text-[26px] font-semibold mt-4 text-[#333747] mb-6">
                Optimized Site Architecture for Usability
              </h3>
              <p className="text-[#333747]  text-[15px] font-semibold ">
                We enhance structural layout to support intuitive navigation and
                user access.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col justify-between max-w-5xl mx-auto">
            <div className="mb-6 md:mb-0 text-center">
              <h3 className="text-[40px] font-semibold text-[#333747] mb-2">
                Increase Your Brand’s Online Reach
              </h3>
              <p className="text-lg text-[#333747]">
                Request a personalized consultation to learn how our SEO
                measures can generate sustained organic traffic and strengthen
                brand visibility.
              </p>
            </div>

            <div>
              <button className="mx-auto bg-[#00A3E0] mt-5 text-white shadow-md py-3 px-8 block">
                Contact
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

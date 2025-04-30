import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function Article() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className=" py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-32">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-4 items-start">
            {/* Left - Heading */}
            <div>
              <h2 className="text-5xl font-semibold text-[#333747] leading-tight">
                Professional Article
                <br />
                Creation
              </h2>
            </div>

            {/* Right - Paragraph */}
            <div>
              <p className="text-[#333747] text-lg  font-semibold leading-relaxed">
                In today's competitive market, having professionally crafted
                articles is essential for enhancing brand visibility and
                awareness. Our Article Creation service ensures that your
                trademark and brand story are communicated effectively,
                capturing the attention of your target audience.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Subtitle */}
            <p className="text-sm text-[#333747] mb-4 ">Crafting</p>

            {/* Main Title */}
            <h3 className="text-4xl font-semibold text-[#333747] mb-6">
              Your Brand's Story: From Concept to Publication
            </h3>

            {/* Small Paragraph */}
            <p className="text-[#333747] text-lg max-w-5xl font-semibold leading-relaxed mb-12">
              Our Article Creation Services Are Designed to Share Your Brand's
              Story with Clarity, Creativity, and Impact, Helping You Connect
              with Your Audience and Build a Strong Online Presence.
            </p>

            {/* 3 Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Step 1 */}
              <div className="flex flex-col">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt="Research"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-4">
                  Extensive Research
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  Our team conducts in-depth research across reliable online
                  sources to gather accurate, engaging, and relevant information
                  tailored to your niche and audience.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col  ">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt="Drafting"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-4">
                  Drafting & Refinement
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  We transform the gathered insights into a well-structured
                  draft, ensuring it aligns with your brand's tone and vision.
                  Each draft undergoes meticulous editing for clarity and
                  quality.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col  ">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt="Publishing"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747]">
                  Publishing & Optimization
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  Once finalized, the article is published on your website,
                  optimized for SEO to enhance visibility and engagement,
                  ensuring your content reaches the right audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-12 px-10 ">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 ">
            <h2 className="text-[#333747] font-semibold text-4xl mb-6">
              Professional Article Creation: Showcasing Your Brand with Clarity
              and Impact
            </h2>
            <p className="text-[#333747] text-lg mb-6 font-semibold">
              Our article creation services are designed to help your brand
              stand out by enhancing visibility, establishing credibility, and
              connecting with your audience. With expertly crafted content
              tailored to your unique voice and needs, we ensure your message
              resonates and leaves a lasting impression.
            </p>

            <h2 className="text-xl text-[#333747] mb-10 font-semibold">
              Why Article Creation is Essential for Newly Established Brands:
            </h2>

            <ul className="space-y-4 text-[#333747]">
              <li className="flex items-start">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt=""
                  className="w-5 h-5 mt-1 mr-2"
                />
                <p className="text-[16px] font-semibold">
                  <span>Boost Your Online Presence:</span> Professionally
                  written articles enhance your brand’s visibility and attract a
                  larger audience.
                </p>
              </li>
              <li className="flex items-start">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt=""
                  className="w-5 h-5 mt-1 mr-2"
                />
                <p className="text-[16px] font-semibold text-[#333747]">
                  <span>Establish Credibility:</span> High-quality content
                  positions your brand as an authority in your industry,
                  fostering trust with potential customers.
                </p>
              </li>
              <li className="flex items-start">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt=""
                  className="w-5 h-5 mt-1 mr-2"
                />
                <p className="text-[16px] font-semibold text-[#333747]">
                  <span>Stand Out in the Market:</span> Compelling articles
                  highlight your unique value, helping your brand shine in a
                  competitive landscape.
                </p>
              </li>
              <li className="flex items-start">
                <img
                  src="https://wtpregister.com/images/tpm/box.png"
                  alt=""
                  className="w-5 h-5 mt-1 mr-2"
                />
                <p className="text-[16px] font-semibold text-[#333747]">
                  <span>Leverage SEO Strategies:</span> Optimized content
                  ensures your brand appears prominently in search engine
                  results.
                </p>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div>
              <h2 className="text-4xl text-[#333747] font-semibold mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-[#333747] mb-6 text-xl font-semibold">
                Unlock your brand's potential with a complimentary consultation.
                Let's elevate your trademark visibility together!
              </p>
              <Button
                asChild
                className="bg-[#00A3E0] mt-5 text-white shadow-md py-6 px-8">
                <Link to="/services/publication" className="inline-block">
                  Apply Now
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="https://wtpregister.com/images/clarity.png"
                alt="Paper Boats"
                className="rounded-lg shadow-lg m-4 h-[280px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

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
              <p className="text-[#333747] text-lg  font-semibold leading-relaxed pt-2">
                Well-crafted articles are key to strengthening brand visibility.
                Our service presents your trademark and brand narrative clearly
                and effectively to reach your intended audience.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Main Title */}
            <h3 className="text-4xl font-semibold text-[#333747] mb-6">
              Developing and Publishing Your Brand Narrative
            </h3>

            {/* Small Paragraph */}
            <p className="text-[#333747] text-lg max-w-5xl font-semibold leading-relaxed mb-12">
              Our article creation service conveys your brand’s message with
              clarity and precision, supporting audience engagement and a strong
              digital presence.
            </p>

            {/* 3 Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Step 1 */}
              <div className="flex flex-col">
                <img
                  src="/images/1.svg"
                  alt="Research"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-4">
                  Thorough Research Process
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  We collect precise and relevant information from verified
                  sources to ensure content accuracy and alignment with your
                  target audience.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col  ">
                <img
                  src="/images/1.svg"
                  alt="Drafting"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-4">
                  Content Drafting and Editing
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  Collected insights are structured into a coherent draft,
                  refined to match your brand’s tone. Each version is thoroughly
                  reviewed for clarity and quality.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col  ">
                <img
                  src="/images/1.svg"
                  alt="Publishing"
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-4">
                  Publication and SEO Optimization
                </h4>
                <p className="text-[#333747] text-[15px] leading-relaxed font-semibold">
                  After final review, the article is published and optimized for
                  search engines to maximize visibility and audience reach.
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
              Professional Article Creation for Effective Brand Communication
            </h2>
            <p className="text-[#333747] text-lg mb-6 font-semibold">
              We deliver tailored content that strengthens brand visibility,
              builds trust, and engages your target audience — ensuring your
              message is clear, consistent, and impactful.
            </p>

            <h2 className="text-xl text-[#333747] mb-10 font-semibold">
              The Importance of Article Creation for Emerging Brands
            </h2>

            <ul className="space-y-6 text-[#333747]">
              <li className="flex items-start space-x-3">
                <img src="/images/2.svg" alt="" className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Enhancing Online Visibility
                  </h4>
                  <p className="text-[16px]">
                    Professionally written content increases brand exposure and
                    broadens audience reach.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/2.svg" alt="" className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Establishing Brand Credibility
                  </h4>
                  <p className="text-[16px]">
                    High-quality articles support your position as a trusted
                    authority within your sector.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/2.svg" alt="" className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Differentiation in the Marketplace
                  </h4>
                  <p className="text-[16px]">
                    Well-crafted texts communicate your unique value and
                    strengthen competitive positioning.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/2.svg" alt="" className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Utilizing SEO Effectively
                  </h4>
                  <p className="text-[16px]">
                    Search engine-optimized content improves ranking and ensures
                    discoverability.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid place-items-center mt-20">
            <div className="text-center max-w-2xl">
              <h2 className="text-4xl text-[#333747] font-semibold mb-4">
                Start Your Brand Success Journey
              </h2>
              <p className="text-[#333747] mb-6 text-xl font-semibold">
                Discover effective methods to build recognition and market
                presence.
              </p>
              <Button
                asChild
                className="bg-[#207ea0] hover:bg-[#207ea0]  mt-5 text-white shadow-md py-6 px-8">
                <Link to="/services/publication" className="inline-block">
                  Apply Now
                </Link>
              </Button>
            </div>

            {/* <div>
              <img
                src="https://wtpregister.com/images/clarity.png"
                alt="Paper Boats"
                className="rounded-lg shadow-lg m-4 h-[280px]"
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

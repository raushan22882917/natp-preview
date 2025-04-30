
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className=" py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Heading */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              Professional Article<br />Creation
            </h2>
          </div>

          {/* Right - Paragraph */}
          <div>
            <p className="text-gray-800 text-sm  leading-relaxed">
              In today's competitive market, having professionally crafted articles is essential
              for enhancing brand visibility and awareness. Our Article Creation service ensures
              that your trademark and brand story are communicated effectively, capturing the
              attention of your target audience.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="">
          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-2 ">Crafting</p>

          {/* Main Title */}
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Your Brand's Story: From Concept to Publication
          </h3>

          {/* Small Paragraph */}
          <p className="text-gray-800 text-sm max-w-4xl mx-auto leading-relaxed mb-12">
            Our Article Creation Services Are Designed to Share Your Brand's Story with Clarity,
            Creativity, and Impact, Helping You Connect with Your Audience and Build a Strong
            Online Presence.
          </p>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col  ">
              <img
                src="https://wtpregister.com/images/tpm/box.png"
                alt="Research"
                className="w-12 h-12 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Extensive Research
              </h4>
              <p className="text-gray-700 text-xs leading-relaxed font-semibold">
                Our team conducts in-depth research across reliable online sources to gather
                accurate, engaging, and relevant information tailored to your niche and audience.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col  ">
              <img
                src="https://wtpregister.com/images/tpm/box.png"
                alt="Drafting"
                className="w-12 h-12 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Drafting & Refinement
              </h4>
              <p className="text-gray-700 text-xs leading-relaxed font-semibold">
                We transform the gathered insights into a well-structured draft, ensuring it aligns
                with your brand's tone and vision. Each draft undergoes meticulous editing for
                clarity and quality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col  ">
              <img
                src="https://wtpregister.com/images/tpm/box.png"
                alt="Publishing"
                className="w-12 h-12 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700 mb-2 font-sme">
                Publishing & Optimization
              </h4>
              <p className="text-gray-700 text-xs leading-relaxed font-semibold">
                Once finalized, the article is published on your website, optimized for SEO to
                enhance visibility and engagement, ensuring your content reaches the right audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className=" py-12 px-10">
  <div className="max-w-4xl mx-auto">
    <div className="mb-10 ">
      <h2 className="text-gray-700 font-semibold text-3xl mb-4">Professional Article Creation: Showcasing Your Brand with Clarity and Impact</h2>
      <p className="text-gray-700 text-sm  mb-6">
        Our article creation services are designed to help your brand stand out by enhancing visibility, establishing credibility, and connecting with your audience. With expertly crafted content tailored to your unique voice and needs, we ensure your message resonates and leaves a lasting impression.
      </p>

      <h2 className="text-xl text-gray-700 mb-4">Why Article Creation is Essential for Newly Established Brands:</h2>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <img src="https://wtpregister.com/images/tpm/box.png" alt="" className="w-5 h-5 mt-1 mr-2"/>
          <p><span>Boost Your Online Presence:</span> Professionally written articles enhance your brand’s visibility and attract a larger audience.</p>
        </li>
        <li className="flex items-start">
        <img src="https://wtpregister.com/images/tpm/box.png" alt="" className="w-5 h-5 mt-1 mr-2"/>
          <p className="text-sm"><span>Establish Credibility:</span> High-quality content positions your brand as an authority in your industry, fostering trust with potential customers.</p>
        </li>
        <li className="flex items-start">
        <img src="https://wtpregister.com/images/tpm/box.png" alt="" className="w-5 h-5 mt-1 mr-2"/>
          <p className="text-sm"><span>Stand Out in the Market:</span> Compelling articles highlight your unique value, helping your brand shine in a competitive landscape.</p>
        </li>
        <li className="flex items-start">
        <img src="https://wtpregister.com/images/tpm/box.png" alt="" className="w-5 h-5 mt-1 mr-2"/>
          <p className="text-sm"><span>Leverage SEO Strategies:</span> Optimized content ensures your brand appears prominently in search engine results.</p>
        </li>
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl  text-gray-700 font-semibold mb-4">Start Your Journey Today</h2>
        <p className="text-gray-800 mb-6 text-sm">
          Unlock your brand's potential with a complimentary consultation. Let's elevate your trademark visibility together!
        </p>
        <Button asChild className="bg-[#00A3E0] mt-5 text-white hover:bg-[#0091c7]">
              <Link to="/services/publication" className="inline-block">Learn More</Link>
            </Button>
      </div>
      <div>
        <img src="https://wtpregister.com/images/clarity.png" alt="Paper Boats" className="rounded-lg shadow-lg m-4"/>
      </div>
    </div>
  </div>
</div>
<Footer />
    </div>
  );
}

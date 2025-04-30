
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
export default function SEO() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      <div className=" min-h-[200px] flex items-center justify-center">
        <div className=" max-w-4xl   flex gap-5">
          <h1 className="text-4xl  font-semibold text-gray-700  mb-4">
            Search Engine Optimization
          </h1>
          <p className="w-1/2 text-gary-800">
            Our SEO services enhance your brand's visibility in search engines, making it easier for potential customers to discover you. By implementing our effective strategies and targeting relevant keywords, we help you rank higher in search results.
          </p>
        </div>
      </div>

      <section className=" py-16  my-10">
      <div className="max-w-4xl mx-auto ">
        <p className="text-gray-600 text-sm">visibility</p>
        <h2 className="text-3xl text-gray-800 mb-6">
          Unlock Your Brand's Potential with SEO
        </h2>
        <p className="text-gray-700  text-sm max-w-4xl  mb-12">
          Search Engine Optimization (SEO) is essential for new brands aiming to enhance their online presence. Our services focus on optimizing the content, targeting the right keywords, and improving site structure to ensure you rank higher in search results. By leveraging SEO, you can attract potential customers organically and build lasting trust.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="flex flex-col ">
            <img src="https://wtpregister.com/images/tpm/box.png" className="
            w-10 h-10" alt="" />
            <h3 className="text-2xl mt-4 text-gray-700 mb-2">
              Comprehensive Content Optimization for Your Brand
            </h3>
            <p className="text-gray-700  text-sm">
              We refine your website's content to resonate with your target audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
          <img src="https://wtpregister.com/images/tpm/box.png" className="
            w-10 h-10" alt="" />
            <h3 className="text-2xl mt-4  text-gray-700 mb-2">
              Strategic Keyword Targeting for Maximum Reach
            </h3>
            <p className="text-gray-700 text-sm ">
              Our team identifies and implements the most effective keywords.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
          <img src="https://wtpregister.com/images/tpm/box.png" className="
            w-10 h-10" alt="" />
            <h3 className="text-2xl mt-4  text-gray-700 mb-2">
              Enhanced Site Structure for Better Navigation
            </h3>
            <p className="text-gray-700 text-sm">
              We optimize our site’s architecture to improve user experience.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row  justify-between max-w-5xl mx-auto">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-gray-700 mb-2">
              Boost Your Brand's Online Presence
            </h3>
          </div>
            <div className="flex flex-col w-1/2">
            <div className="text-gray-800 mb-6 md:mb-0 md:ml-8">
            Ready to elevate your brand's visibility? Contact us today for a personalized consultation and discover how our SEO strategies can drive organic traffic to your website.
          </div>
          <button className="mr-auto ml-8 mt-5 bg-[#00A3E0] text-white  py-2 px-6  shadow">
              Contact
            </button>
            </div>
          <div>
           
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </div>
  );
}

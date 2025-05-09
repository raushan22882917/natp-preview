import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* About Hero Section */}
      <div className=" py-8">
        <div className="max-w-6xl mx-auto px-1 flex justify-between">
          <h1 className="text-7xl md:text-6xl max-w-[500px] font-semibold text-[#333747] mb-6">
            Supporting Emerging Brands
          </h1>
          <p className="text-xl max-w-[550px] mb-10 font-semibold text-[#333747]">
            We strengthen new brands by managing trademark visibility through
            expert publications and marketing, allowing owners to focus on
            business operations.
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-1 flex flex-col md:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="md:w-[60%]">
            <h2 className="text-4xl w-full md:text-4xl text-[#333747] font-semibold mb-6 ">
              Establishing a Trademark Database for New Brands
            </h2>
            <p className="text-[#333747] mb-8 font-semibold text-[20px] w-[37rem]">
              We built a trademark database to support emerging brands. Our aim
              is to increase visibility through targeted content and strategic
              marketing.
            </p>

            {/* Sub Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex flex-col items-start ">
                <div className="w-14 h-14 mb-4">
                  <img src="/images/1.svg" alt="" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#363636] ">
                    Our Origins
                  </h4>
                  <p className="text-[#212529] font-semibold w-[12rem]">
                    Founded to guide new brands through trademark challenges.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start flex-col">
                <div className="w-14 h-14 mb-4">
                  {" "}
                  <img src="/images/1.svg" alt="" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#363636]">
                    Our Mission
                  </h4>
                  <p className="text-[#212529] font-semibold">
                    Providing the tools and support for emerging brands to
                    succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-[100%] pl-10">
            <img
              src="/images/Establishing a Trademark Database.svg"
              alt="Arrows Graphic"
              className="w-full rounded-lg scale-125"
            />
          </div>
        </div>
      </section>

      <section className=" py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl text-center w-[800px] mx-auto font-semibold text-[#333747] mb-20 leading-snug">
            Our Principles at a Glance
          </h2>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Professionalism.svg"
                alt="Professionalism Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Professionalism
              </h4>
              <p className="text-[#333747] font-semibold">
                We ensure high standards in all services.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Client Focus.svg"
                alt="Client-Centric Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Client Focus
              </h4>
              <p className="text-[#333747] font-semibold">
                Tailored support for each brands needs.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/Progress.svg"
                alt="Improvement Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Progress
              </h4>
              <p className="text-[#333747] font-semibold">
                We continuously improve to better serve you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 relative">
            <div className="sticky top-24">
              <h2 className="text-4xl text-[#333747] font-semibold mb-6 leading-snug">
                You focus on your business we manage your brand visibility.
              </h2>
              {/* <p className="text-[#333747] font-semibold text-xl">
                Our services allow you to concentrate on growing your brand
                while we manage your visibility. With our dedicated team, we
                ensure that your trademark and brand story are professionally
                crafted and effectively promoted.
              </p> */}
            </div>
          </div>

          {/* Right Boxes - removed max-h and overflow properties */}
          <div className="md:w-[60%] space-y-8 pr-2">
            {/* Box 1 */}
            <div className="border border-blue-400 p-6 rounded">
              <div className="flex flex-col items-start space-x-4">
                <div className="w-[45px] h-[45px] shrink-0 ml-4">
                  <img
                    src="/images/2.svg"
                    alt="Service icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Comprehensive Client Support Services
                  </h4>
                  <p className="text-[#333747]">
                    Our team is ready to assist with any request promptly and
                    reliably.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="border border-blue-400 p-6 rounded">
              <div className="flex flex-col items-start space-x-4">
                <div>
                  <div className="w-[45px] h-[45px] shrink-0 ml-4">
                    <img
                      src="/images/2.svg"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Strategic Innovation in Service Delivery
                  </h4>
                  <p className="text-[#333747]">
                    We develop unique strategies to help your brand stand out.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="border border-blue-400 p-6 rounded">
              <div className="flex flex-col items-start space-x-4">
                <div>
                  <div className="w-[45px] h-[45px] shrink-0 ml-4">
                    <img
                      src="/images/2.svg"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Integrated Brand Visibility Management
                  </h4>
                  <p className="text-[#333747]">
                    From content to visibility we cover all aspects of brand
                    awareness.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="border border-blue-400 p-6 rounded">
              <div className="flex flex-col items-start space-x-4">
                <div>
                  <div className="w-[45px] h-[45px] shrink-0 ml-4">
                    <img
                      src="/images/2.svg"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Specialized Expertise and Strategic Guidance
                  </h4>
                  <p className="text-[#333747]">
                    Our experts deliver effective strategies for stronger brand
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto h-[200px] flex flex-col justify-center items-center text-center px-4 text-[#333747]">
        <h3 className="text-4xl font-semibold mb-2">
          Contact our team to enhance your brand visibility.
        </h3>
        <p className="font-semibold text-lg mb-4">
          Discover how we can elevate your brand visibility.
        </p>
        <button className="shadow bg-[#207ea0] py-3 px-6 text-white">
          Contact Us
        </button>
      </div>

      <Footer />
    </div>
  );
}

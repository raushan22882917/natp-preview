import { Navbar } from "@/components/Navbar";
import  Hero  from "@/components/Hero";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* About Hero Section */}
      <div className=" py-8">
        <div className="max-w-6xl mx-auto px-1 flex justify-between">
          <h1 className="text-7xl md:text-6xl max-w-[500px] font-semibold text-[#333747] mb-6">
            Empowering New Brands
          </h1>
          <p className="text-xl max-w-[550px] mb-10 font-semibold text-[#333747]">
            At our core, we are dedicated to elevating new brands by enhancing
            their visibility through expertly crafted trademark publications and
            comprehensive marketing services. Our mission is to empower brand
            owners to focus on their business while we handle the intricacies of
            trademark awareness
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-1 flex flex-col md:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="md:w-[60%]">
            <h2 className="text-4xl w-full md:text-4xl text-[#333747] font-semibold mb-6 ">
              Our Journey: Building a Trademark Database for Emerging Brands
            </h2>
            <p className="text-[#333747] mb-8 font-semibold text-[20px] w-[37rem]">
              Founded to empower new brands, our company has established a
              comprehensive trademark database. We are dedicated to enhancing
              brand visibility through expertly crafted articles and marketing
              strategies.
            </p>

            {/* Sub Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex flex-col items-start ">
                <div className="w-14 h-14 mb-4">
                  <img
                    src="https://wtpregister.com/images/tpm/box-icon.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#363636] ">
                    Our Origins
                  </h4>
                  <p className="text-[#212529] font-semibold w-[12rem]">
                    We began with a vision to support new brands in navigating
                    trademark challenges.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start flex-col">
                <div className="w-14 h-14 mb-4">
                  {" "}
                  <img
                    src="https://wtpregister.com/images/tpm/box-icon.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#363636]">
                    Our Mission
                  </h4>
                  <p className="text-[#212529] font-semibold">
                    To provide exceptional support and resources for emerging
                    brands to thrive in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-[90%] pl-10">
            <img
              src="https://wtpregister.com/images/tpm/about-us-1.jpg"
              alt="Arrows Graphic"
              className="w-full rounded-lg shadow-lg scale-125"
            />
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-4xl text-center w-[800px] mx-auto font-semibold text-[#333747] mb-20 leading-snug">
            Our Core Values: The Foundation of Our Commitment to You
          </h2>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://wtpregister.com/images/tpm/about-icon-1.png"
                alt="Professionalism Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Professionalism and Dedication: <br /> Your Brand Deserves the
                Best
              </h4>
              <p className="text-[#333747] font-semibold">
                We uphold the highest standards in trademark publication and
                marketing.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://wtpregister.com/images/tpm/about-icon-2.png"
                alt="Client-Centric Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Client-Centric Approach: <br /> Your Success is Our Priority
              </h4>
              <p className="text-[#333747] font-semibold">
                We tailor our services to meet the unique needs of each client.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://wtpregister.com/images/tpm/about-icon-3.png"
                alt="Improvement Icon"
                className="w-[77px] h-[77px] mb-6"
              />
              <h4 className="text-xl font-semibold text-[#333747] mb-3">
                Continuous Improvement: <br /> Evolving to Serve You Better
              </h4>
              <p className="text-[#333747] font-semibold">
                Our team consistently seeks innovative solutions to enhance your
                brand visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 relative">
            <div className="sticky top-24">
              <h3 className="text-[#333747] text-lg uppercase font-semibold">
                Name
              </h3>
              <h2 className="text-4xl text-[#333747] font-semibold mb-6 leading-snug">
                Focus on Your Business, We Handle Awareness
              </h2>
              <p className="text-[#333747] font-semibold text-xl">
                Our services allow you to concentrate on growing your brand
                while we manage your visibility. With our dedicated team, we
                ensure that your trademark and brand story are professionally
                crafted and effectively promoted.
              </p>
            </div>
          </div>

          {/* Right Boxes - removed max-h and overflow properties */}
          <div className="md:w-[60%] space-y-8 pr-2">
            {/* Box 1 */}
            <div className="border border-blue-400 p-6 rounded">
              <div className="flex flex-col items-start space-x-4">
                <div className="w-[45px] h-[45px] shrink-0 ml-4">
                  <img
                    src="https://wtpregister.com/images/tpm/box-icon.png"
                    alt="Service icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Dedicated Support
                  </h4>
                  <p className="text-[#333747]">
                    Our team is always available to assist you with any
                    inquiries or modifications you may need. We pride ourselves
                    on our commitment to client satisfaction and personalized
                    service.
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
                      src="https://wtpregister.com/images/tpm/box-icon.png"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Innovative Solutions
                  </h4>
                  <p className="text-[#333747]">
                    We think outside the box to provide unique marketing
                    strategies tailored to your brand. Our approach ensures that
                    your trademark stands out in a crowded marketplace.
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
                      src="https://wtpregister.com/images/tpm/box-icon.png"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Comprehensive Care
                  </h4>
                  <p className="text-[#333747]">
                    From article creation to visibility enhancement, we handle
                    every aspect of your brand's awareness. This allows you to
                    focus on what you do best—running your business.
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
                      src="https://wtpregister.com/images/tpm/box-icon.png"
                      alt="Service icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#333747]">
                    Expert Insights
                  </h4>
                  <p className="text-[#333747]">
                    Our professional content creators and marketing experts work
                    tirelessly to elevate your brand's presence. Trust us to
                    provide valuable insights and strategies that drive results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
     <div className="max-w-5xl mx-auto flex justify-between items-center h-[200px]">
      <div>
        <h3 className="text-4xl font-semibold mb-4">Connect with Our Expert Team</h3>
        <p className="font-semibold text-lg">Discover how we can elevate your brand visibility.</p>
      </div>
     <div>
     <button className="shadow bg-blue-500 py-3 px-6 text-white">Contact</button>
     </div>
     </div>
     <footer className="bg-[#2557A7]  text-white pt-10">
      <div className="w-[90vw] h-[40vh] mx-auto px-4 flex justify-between gap-8">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
          <img src="https://wtpregister.com/images/tpm/LOGO-light.png" className="w-24 h-24" alt="" />
          </div>
         <div className="mt-40">
         <div className="mb-2 font-semibold">Contact:</div>
          <a href="mailto:info@wtpregister.com" className="text-white underline">
            info@wtpregister.com
          </a>
         </div>
        </div>
        <div className="flex  justify-between items-center gap-20">
        {/* Center Section */}
        <div className="flex flex-col space-y-4 md:col-span-">
          <a href="#" className="hover:underline">Our Services</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Trademark Info</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">About Us</a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <a href="#" className="hover:underline">Trademark Publication</a>
          <a href="#" className="hover:underline">Search</a>
          <a href="#" className="hover:underline">Request Publication</a>
          <a href="#" className="hover:underline">General Information</a>
        </div>
       </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500 mt-10 pt-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm px-4 mx-10">
        <p>© 2025 WTP. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
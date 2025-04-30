import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const sections = [
    {
      title: "INTRODUCTION",
      content:
        "These Terms and Conditions (hereinafter “T&C”) govern the relationship between WTP (“Service Provider”), with a central email address of info@wtpregister.com, and any individual or legal entity (“Customer”) that purchases or uses the Prepaid Service. By entering into an agreement with the Service Provider, the Customer acknowledges and accepts these T&C in their entirety. The Service Provider shall make these T&C available in a printable format.",
    },
    {
      title: "DEFINITIONS",
      content:
        "2.1 Database: Refers to the integrated information system managed by the Service Provider, which compiles data from national, EU, and international registers not publicly accessible. </br> 2.2 Prepaid Service: Refers to the Customer’s access to fee-based content in the Database on the Service Provider’s website, wtpregister.com, for a period of three (3) years from the date of payment of the Service Fee.</br>2.3 Service Fee: The amount payable by the Customer in advance, in accordance with the Service Provider’s current offer, to gain access to the Prepaid Service.</br>2.4 Contract: The legal agreement formed between the Service Provider and the Customer upon the Customer’s payment of the Service Fee.",
    },
    {
      title: "SCOPE OF SERVICE",
      content:
        "3.1 The Prepaid Service:</br>• Provides the Customer with access to the fee-based portion of the Database.</br>• Becomes active for a term of three (3) years once the Customer’s Service Fee payment has been received.</br>3.2 Exclusive Nature of T&C:</br>• These T&C alone set forth the rights and obligations of both parties.</br>• No other general terms and conditions or similar documents from the Customer or third parties shall apply.</br>3.3 Amendments:</br>• The Service Provider reserves the right to unilaterally modify these T&C, provided the Customer is informed in writing before such changes take effect.</br>• Any modified provisions become part of this Contract only after the Customer has received notice and accepted them.",
    },
    {
      title: "PAYMENT TERMS",
      content:
        "4.1 The Service Provider will make the Prepaid Service accessible to the Customer upon receipt of the Service Fee, as outlined in the current offer.</br>4.2 Payment must be made via bank transfer to the Service Provider’s designated account. A payment is deemed complete once the Service Provider’s account has been credited with the full amount.",
    },
    {
      title: "CUSTOMER’S RIGHT OF WITHDRAWAL",
      content:
        "5.1 Offer and Order:</br>• An agreement for the Prepaid Service is formed once the Customer pays the Service Fee stated in the applicable offer.</br>5.2 Withdrawal Period:</br>• The Customer may withdraw from the Contract within seven (7) days from the date of payment, without providing a reason.</br>• The Contract becomes effective on the day the Service Fee is paid.",
    },
    {
      title: "LIMITATION OF LIABILITY AND DISCLAIMERS",
      content:
        "6.1 Database Accuracy:</br>• The Service Provider compiles information from national, EU, and international registers “as is,” with no guarantees regarding accuracy or completeness.</br>6.2 Exclusion of Damages:</br>• The Service Provider shall not be liable for direct or indirect damages, lost profits, missed business opportunities, or business interruption arising from the use or inability to use wtpregister.com.</br>• This limitation of liability applies regardless of whether the Service Provider knew or should have known of potential damages.",
    },
    {
      title: "ARTICLE SHOWCASING SERVICE",
      content:
        "7.1 Description:</br>• Upon receipt of the Service Fee, the Service Provider may create an article showcasing the Customer’s achievements and successes (“Article Showcasing Service”).<?br>7.2 Purpose:</br>• This service aims to highlight the Customer’s brand journey and accomplishments, thereby enhancing visibility and credibility.</br>7.3 Editing and Content:</br>• The Service Provider reserves the right to edit the content for clarity, quality, and consistency, while maintaining the integrity of the Customer’s information.</br>7.4 Limitation of Liability:</br>• The Service Provider is not responsible for any direct or indirect damages, including lost profits or business opportunities, linked to the Article Showcasing Service.",
    },
    {
      title: "CONTRACT DURATION AND TERMINATION",
      content:
        "8.1 Fixed Period and Automatic End:</br>• The Contract for the Prepaid Service automatically concludes at the end of a one (1)-year fixed period and is not subject to ordinary termination before that time.</br>8.2 Immediate Termination for Breach:</br>• Either party may terminate the Contract immediately in the event of a serious breach by the other party.</br>• Prior to immediate termination, the breaching party must be given a reasonable time to remedy any correctable issues.</br>• Any situation making further cooperation intolerable constitutes valid grounds for immediate termination.",
    },
    {
      title: "REFUND POLICY",
      content:
        "9.1 WTP strives for complete Customer satisfaction. If you are not fully satisfied with the services provided, you may request a refund within sixty (60) days of your payment date. To initiate a refund, please contact info@wtpregister.com with your order details and reason for dissatisfaction. Refunds will be processed in accordance with these T&C and any additional policies provided by WTP. This refund policy applies solely to the services outlined herein.",
    },
    {
      title: "GOVERNING LAW AND DISPUTE RESOLUTION",
      content:
        "10.1 Governing Law:</br>• These T&C, along with any related Contracts, shall be governed by the laws of the United States.</br>10.2 Negotiation and Jurisdiction:</br>• Both parties agree to make reasonable, good-faith efforts to resolve any dispute arising from these T&C or the Prepaid Service through negotiation.</br>• If an amicable resolution cannot be reached, either party may seek legal recourse in a court of competent jurisdiction.",
    },
    {
      title: "DATA PROTECTION",
      content:
        "11.1 Privacy Commitment:</br>• The Service Provider’s privacy practices for wtpregister.com, including how personal data is collected and used, are outlined in the separate Privacy Policy.</br>11.2 Accessibility:</br>• A link to the “Privacy Policy” is provided on wtpregister.com, and the Customer is encouraged to read it to understand how personal information is handled.",
    },
  ];

  const [activeSection, setActiveSection] = useState<{
    title: string;
    content: string;
  }>({
    title: sections[0].title,
    content: sections[0].content,
  });
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection({
              title: entry.target.getAttribute("data-section")!,
              content:
                sections.find(
                  (sec) =>
                    sec.title === entry.target.getAttribute("data-section")
                )?.content || "",
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = sectionRefs.current[section.title];
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section.title];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (sectionTitle) => {
    const element = sectionRefs.current[sectionTitle];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto min-h-screen py-8">
        <div>
          <h2 className="text-5xl font-semibold mb-4 text-[#333747]">
            Terms & Conditions
          </h2>
          <p className="font-semibold text-lg text-[#333747]">
            Read our terms and conditions and privacy policy to understand your
            rights and responsibilities
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 px-6 mt-32">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <h2 className="text-text-[#333747] font-semibold text-[22px] mb-4">
                Contents Overview
              </h2>
              <ul className="space-y-1">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleClick(section.title)}
                      className={`w-full text-left p-2 rounded-md text-[16px] transition-all duration-300 font-medium ${
                        activeSection.title === section.title
                          ? "bg-[#2C5CA4] text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-8 space-y-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                id={section.title.replace(/\s+/g, "-").toLowerCase()}
                data-section={section.title}
                ref={(el) => (sectionRefs.current[section.title] = el)}
                className="scroll-mt-32">
                <h2 className="text-[28px] font-semibold text-[#333747] mb-4 font-sans">
                  {idx + 1}. {section.title}
                </h2>
                <div
                  className="text-[#333747] text-[15px] leading-7 font-semibold"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#2557A7]  text-white pt-10">
        <div className="w-[90vw] h-[40vh] mx-auto px-4 flex justify-between gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://wtpregister.com/images/tpm/LOGO-light.png"
                className="w-24 h-24"
                alt=""
              />
            </div>
            <div className="mt-40">
              <div className="mb-2 font-semibold">Contact:</div>
              <a
                href="mailto:info@wtpregister.com"
                className="text-white underline">
                info@wtpregister.com
              </a>
            </div>
          </div>
          <div className="flex  justify-between items-center gap-20">
            {/* Center Section */}
            <div className="flex flex-col space-y-4 md:col-span-">
              <a href="#" className="hover:underline">
                Our Services
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:underline">
                Trademark Info
              </a>
              <a href="#" className="hover:underline">
                FAQs
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </div>

            {/* Right Section */}
            <div className="flex flex-col space-y-4 md:col-span-1">
              <a href="#" className="hover:underline">
                Trademark Publication
              </a>
              <a href="#" className="hover:underline">
                Search
              </a>
              <a href="#" className="hover:underline">
                Request Publication
              </a>
              <a href="#" className="hover:underline">
                General Information
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-10 pt-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm px-4 mx-10">
          <p>© 2025 WTP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

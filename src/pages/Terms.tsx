import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const sections = [
    {
      title: "INTRODUCTION",
      content:
        "These Terms and Conditions ('T&C') define the contractual relationship between NATP ('the Provider'), reachable via info@natp-trademark.com, and any person or entity ('the Customer') utilizing or purchasing the Prepaid Service. By engaging in this agreement, the Customer accepts these T&C in full. A printable version of these terms is available from the Provider.",
    },
    {
      title: "DEFINITIONS",
      content:
        "1.1 Database: A proprietary system operated by the Provider that aggregates data from non-public national, EU, and international trademark registers.</br>1.2 Prepaid Service: Paid access granted to the Customer for a duration of three (3) years to secured sections of the Database hosted on natp-trademark.com, commencing upon receipt of payment. </br>1.3 Service Fee: The upfront cost payable by the Customer, as per the current offer of the Provider, for access to the Prepaid Service. </br>1.4 Agreement: The legally binding arrangement activated upon the Provider's receipt of the Customer’s Service Fee. </br>",
    },
    {
      title: "SERVICE DESCRIPTION",
      content: `2.1 Scope: </br><p style="padding-left: 10px;">• Grants the Customer access to premium content within the Database. </p><p style="padding-left: 10px;">• Service becomes available for three (3) years after full payment. </p>2.2 Exclusivity: <p style="padding-left: 10px;">• Only these T&C apply to the Agreement. </p><p style="padding-left: 10px;">• Any alternative terms submitted by the Customer or third parties are excluded. </p>2.3 Modifications: <p style="padding-left: 10px;">• The Provider may amend these T&C unilaterally, with prior written notification. </p><p style="padding-left: 10px;">• Amendments are effective only once communicated and acknowledged by the Customer.</p> `,
    },
    {
      title: "PAYMENT CONDITIONS",
      content:
        "3.1 Access to the service is provided only after full payment of the applicable Service Fee. </br>3.2 Payment must be made via bank transfer or check to the specified account of the Provider. The transaction is considered finalized once the full amount is received. </br>",
    },
    {
      title: "RIGHT OF WITHDRAWAL",
      content:
        `4.1 Contract Formation: </br><p style="padding-left: 10px;">• The agreement becomes binding when the Customer submits the Service Fee in response to the applicable offer. </p>4.2 Withdrawal Period: <p style="padding-left: 10px;">• The Customer may cancel the agreement within seven (7) days of payment without explanation. </p><p style="padding-left: 10px;">• The agreement takes effect upon payment. </p>`,
    },
    {
      title: "LIABILITY AND DISCLAIMERS",
      content:
        `5.1 Data Integrity: </br><p style="padding-left: 10px;">• The Database content is compiled from third-party registers and provided 'as is' without warranties regarding accuracy or completeness. </p>5.2 Limitation of Liability: </br><p style="padding-left: 10px;">• The Provider accepts no liability for direct or indirect damages, including lost revenue, opportunities, or service disruptions due to use or non-use of natp-trademark.com. </p><p style="padding-left: 10px;">• This limitation applies regardless of prior knowledge of potential issues. </p>`,
    },
    {
      title: "ARTICLE PUBLICATION SERVICE",
      content:
        `6.1 Overview: </br><p style="padding-left: 10px;">• After payment, the Provider may offer an article publication service highlighting the Customer’s brand achievements. </p>6.2 Purpose: </br><p style="padding-left: 10px;">• To present and reinforce the Customer’s brand presence and reputation. </p>6.3 Editorial Rights: </br><p style="padding-left: 10px;">• The Provider may revise submitted content for clarity and consistency without altering the factual basis. </p>6.4 Disclaimer: </br><p style="padding-left: 10px;">• No liability is assumed for damages related to this optional service. </p>`,
    },
    {
      title: "DURATION AND TERMINATION",
      content:
        `7.1 Contract Period: </br><p style="padding-left: 10px;">• The Agreement automatically ends after one (1) year and cannotbe terminated ordinarily during that period. </p>7.2 Termination for Cause: </br><p style="padding-left: 10px;">• Either party may terminate immediately upon serious breach. </p><p style="padding-left: 10px;">• The breaching party must be allowed to resolve correctable issues within a reasonable timeframe. </p><p style="padding-left: 10px;">• Any circumstance that renders continued cooperation unreasonable may justify immediate termination. </p>`,
    },
    {
      title: "REFUND POLICY",
      content:
        "8.1 Customers may request a refund within thirty (30) days of payment if dissatisfied. Requests should be directed to info@natp-trademark.com, including order details and the reason. Refunds will follow these T&C and applicable supplemental policies. The policy applies only to services described herein.",
    },
    {
      title: "GOVERNING LAW AND DISPUTE SETTLEMENT",
      content:
        `9.1 Jurisdiction: </br><p style="padding-left: 10px;">• The Agreement and T&C are subject to the laws of the United States. </p>9.2 Dispute Resolution: </br><p style="padding-left: 10px;">• Parties shall attempt to resolve conflicts amicably. </p><p style="padding-left: 10px;">• If resolution fails, legal action may be pursued before a competent court. </p>`,
    },
    {
      title: "DATA PRIVACY",
      content:
        `10.1 Data Handling: </br><p style="padding-left: 10px;">• Details on the handling of personal data are available in the separate Privacy Policy. </p>10.2 Policy Access:</br><p style="padding-left: 10px;">• A link to the Privacy Policy is available on natp-trademark.com. Customers are encouraged to review it for information on data use. </p>`,
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
                  {section.title === "INTRODUCTION"
                    ? section.title
                    : `${idx}. ${section.title}`}
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

      <Footer/>
    </div>
  );
}

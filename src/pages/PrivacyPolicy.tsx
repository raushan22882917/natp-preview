import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "At NATP, we prioritize the confidentiality of your personal information. This Privacy Policy explains how we handle, utilize, and secure data collected through the use of our services.",
    },
    {
      title: "Information Collection",
      content:
        "2.1 We collect personal data voluntarily submitted by users, including names, contact details, and payment-related information.</br>2.2 Additional data, such as IP addresses and browsing patterns, may be gathered through automated systems to enhance service performance and ensure system security.",
    },
    {
      title: "Purpose of Data Use",
      content:
        "3.1 Collected information is used to deliver our services, manage transactions, provide support, and relay essential service communications.</br>3.2 We may also use the data to optimize user experience and adapt our content offerings to user interests.",
    },
    {
      title: "Data Sharing and Disclosure",
      content:
        "4.1 NATP does not engage in selling or leasing customer information to external parties.</br>4.2 Selected third-party providers may receive data for operational support (e.g., payment processors, IT support), subject to strict confidentiality agreements and data protection compliance.</br>4.3 Disclosure of information may be required to meet legal duties or respond to legitimate requests from regulatory or governmental authorities.",
    },
    {
      title: "Data Security",
      content:
        "5.1 We apply comprehensive security practices to prevent unauthorized access, misuse, or destruction of your data.</br>5.2 Our infrastructure is routinely assessed for vulnerabilities and protected through encryption and secure protocols.",
    },
    {
      title: "Your Rights",
      content:
        "6.1 You may request access to, correction of, or deletion of your personal information by contacting info@natp-trademark.com.</br>6.2 You may also exercise your right to object to or limit data processing in accordance with applicable privacy regulations in the United States.",
    },
    {
      title: "Cookies and Tracking Technologies",
      content:
        "7.1 NATP utilizes cookies and similar tools to ensure site efficiency, analyze visitor behavior, and enhance user experience.</br>7.2 You may modify cookie settings through your browser; however, doing so may impact certain website functionalities.",
    },
    {
      title: "Data Retention",
      content:
        "8.1 We retain personal data only as long as necessary to fulfill the stated purposes or as required by applicable laws.</br>8.2 Once the data retention period expires, data is securely erased or anonymized.",
    },
    {
      title: "Changes to This Policy",
      content:
        "9.1 We may update this policy from time to time. Modifications will be published on our website, and material changes will be communicated directly to users.</br>9.2 Continued use of our services after such updates implies acceptance of the revised Privacy Policy.",
    },
    {
      title: "Protection of Children's Data",
      content:
        "10.1 Our services are not intended for individuals under 13 years of age, and we do not knowingly collect data from children.",
    },
    {
      title: "Contact",
      content:
        "Questions, concerns, or requests related to this Privacy Policy should be directed to info@natp-trademark.com.",
    },
    {
      title: "Effective Date",
      content:
        "This Privacy Policy is effective as of January 1, 2025, and complies with applicable U.S. data protection laws.",
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
            Privacy Policy
          </h2>
          <p className="font-semibold text-lg text-[#333747]">
          NATP is committed to ensuring the protection of your personal data. This policy explains the methods by which personal information is collected, processed, and secured in connection with the use of our services.
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

      <Footer />
    </div>
  );
}

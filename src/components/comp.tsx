import { Navbar } from "@/components/Navbar";
import { useState } from "react";

export default function Erms() {
  const sections = [
    "INTRODUCTION",
    "DEFINITIONS",
    "SCOPE OF SERVICE",
    "PAYMENT TERMS",
    "CUSTOMER'S RIGHT OF WITHDRAWAL",
    "LIMITATION OF LIABILITY AND DISCLAIMERS",
    "ARTICLE SHOWCASING SERVICE",
    "CONTRACT DURATION AND TERMINATION",
    "REFUND POLICY",
    "GOVERNING LAW AND DISPUTE RESOLUTION",
    "DATA PROTECTION",
  ];

  const [activeSection, setActiveSection] = useState("INTRODUCTION");

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section.replace(/\s+/g, "-").toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6fc]">
      <Navbar />

      {/* Hero */}
      <div className="flex p-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Please read carefully before using our service.</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Contents Overview</h2>
              <ul className="space-y-2">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleClick(section)}
                      className={`w-full text-left p-2 rounded-md text-sm font-medium ${
                        activeSection === section
                          ? "bg-blue-700 text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Terms Content */}
          <section className="md:col-span-3 space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} id={section.replace(/\s+/g, "-").toLowerCase()}>
                <h2 className="text-2xl font-bold mb-4">{idx + 1}. {section}</h2>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
                  aliquam tincidunt, nunc nisl aliquet nunc, vitae aliquam nisl nunc vel nisi.
                  {/* Add your real content here */}
                </p>
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  );
}


import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
export default function Publication() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Application Submission",
      description: "Initiate the process by completing our online trademark application form.",
      icon: "/images/Step 1.svg",
    },
    {
      id: 2,
      title: "Step 2: Application Review",
      description: "We examine your submission to ensure completeness and readiness for publication.",
      icon: "/images/Step 2.svg",
    },
    {
      id: 3,
      title: "Step 3: Trademark Publication",
      description: "Upon approval, your trademark is officially published in our database.",
      icon: "images/Step 3.svg",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      <div className=" min-h-[200px]  mt-10">
        <div className=" max-w-6xl mx-auto px-4 flex justify-between gap-4">
          <h1 className="text-5xl font-semibold mb-4 text-[#333747]">
            Trademark Publication
          </h1>
          <p className="w-1/2 text-xl text-[#333747]">
          Publishing your trademark strengthens brand visibility, safeguards identity, and supports outreach to potential clients and partners.
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center p-6">
      <div className="text-center max-w-6xl mx-auto">
        <p className="text-[16px] text-[#0C0C0C]  mb-4 ">Simplified</p>
        <h1 className="text-3xl md:text-[40px] font-semibold mb-8 text-[#333747]">
        Trademark Publication Explained
        </h1>
        <p className="text-[#333747] text-lg mb-12  max-w-2xl mx-auto">
        Our publication process follows a clear and efficient structure. From submission to final release, we provide guidance at each stage.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <img src={step.icon} alt={step.title} className="h-[120px] mb-8" />
              <h2 className="text-3xl font-semibold text-[#333747] mb-6 text-center">
                {step.title}
              </h2>
              <p className="text-[#0C0C0C] text-[16px] font-semibold text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <Button asChild className="bg-[#00A3D1] mt-5 text-white shadow-md py-6 px-8">
              <Link to="/services/publication" className="inline-block">Apply Now</Link>
            </Button>
      </div>
    </div>

    <div className="py-10 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Heading */}
        <div>
          <h2 className="text-[34px] font-semibold text-[#333747] leading-snug">
          Up-to-Date Trademark Data to Keep You Informed and Competitive
          </h2>
        </div>

        {/* Right side: Paragraph */}
        <div>
          <p className="text-[#333747] text-xl leading-relaxed mb-10">
          We maintain up-to-date trademark records through daily updates, ensuring accurate, relevant information and sustained brand visibility in a dynamic market environment.
          </p>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
}

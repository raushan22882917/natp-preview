
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
export default function Publication() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Submit Your Trademark Application",
      description: "Begin by filling out our easy online application form",
      icon: "https://wtpregister.com/images/tpm/Submit.png",
    },
    {
      id: 2,
      title: "Step 2: Review and Approval Process",
      description: "Our team will review your application for completeness",
      icon: "https://wtpregister.com/images/tpm/Review.png",
    },
    {
      id: 3,
      title: "Step 3: Publication of Your Trademark",
      description: "Once approved, your trademark will be published in our database",
      icon: "https://wtpregister.com/images/tpm/Handshake.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      <div className=" min-h-[200px]  mt-10">
        <div className=" max-w-4xl mx-auto px-4 flex justify-between gap-4">
          <h1 className="text-3xl md:text-[40px]  text-gray-700   mb-4">
            Trademark Publication
          </h1>
          <p className="w-1/2">
            Trademark publication is essential for advancing your brand's visibility in a competitive market. By showcasing your trademark, you connect with your direct target audience and attract potential customers and partners.
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center p-6">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-sm text-gray-600 mb-2 ">Simplified</p>
        <h1 className="text-3xl md:text-3xl   mb-4 text-gray-700">
          Understanding the Trademark Publication Process
        </h1>
        <p className="text-gray-800 text-sm mb-10  max-w-2xl mx-auto">
          Our trademark publication process is designed to be straightforward and efficient.
          From application submission to final publication, we guide you every step of the way.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <img src={step.icon} alt={step.title} className="h-20 mb-4" />
              <h2 className="text-xl  text-gray-800 mb-2 text-center">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <Button asChild className="bg-[#00A3E0] mt-5 text-white hover:bg-[#0091c7]">
              <Link to="/services/publication" className="inline-block">Learn More</Link>
            </Button>
      </div>
    </div>

    <div className="py-10 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Heading */}
        <div>
          <h2 className="text-[24px]   text-gray-700 leading-snug">
            Stay Ahead with Our Daily Updates<br /> on Trademark Database
          </h2>
        </div>

        {/* Right side: Paragraph */}
        <div>
          <p className="text-gray-800 text-sm  leading-relaxed">
            Our trademark database is updated daily to ensure you have the latest
            information at your fingertips. This commitment to accuracy helps
            brands maintain visibility and relevance in a competitive marketplace.
            Trust us to keep you informed and ahead of the curve.
          </p>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
}

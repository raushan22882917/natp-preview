import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    try {
      setIsSubmitting(true);

      const { error } = await supabase.from("contacts").insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        agreed_to_terms: formData.agreedToTerms,
      });

      if (error) throw error;

      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-[#333747] mb-16">
          <h3 className="text-5xl font-semibold text-center mb-12">
            Get in Touch with Our Team
          </h3>
          <div className="flex flex-col md:flex-row gap-12 w-full">
            <div className="w-full md:w-1/2 space-y-4 text-[22px] leading-7">
              <h4 className="font-bold">Disclaimer</h4>
              <p className="font-semibold text-[18px]">
                This website may include links to third-party external websites.
                As we do not control the content of these sites, we assume no
                responsibility for the accuracy, completeness, or legality of
                the information provided therein. Responsibility for external
                content lies solely with the respective site operators. At the
                time of linking, no legal infringements were identified. If
                unlawful content becomes known to us, the respective link will
                be removed without delay.
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-[22px] leading-7">
              <h4 className="font-bold">Copyright Notice</h4>
              <p className="font-semibold text-[18px]">
                All texts, images, and other content presented on this website
                are protected under United States copyright law. Any
                reproduction, modification, distribution, or commercial use
                beyond the scope permitted by applicable law requires prior
                written authorization from the respective rights holder.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Section */}
            <div className="md:pr-16">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#333747]">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-6">
                Assistance is available for all inquiries.
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#207ea0] w-6 h-6" />
                <p className="text-[#333747]">info@natp-trademark.com</p>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-1 text-[#212529]">
                    Name
                  </Label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#207ea0] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#207ea0]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-1 text-[#212529]">
                    Email address
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#207ea0] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#207ea0]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="block mb-1 text-[#212529]">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#207ea0] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#207ea0] resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                                <Label htmlFor="terms" className="text-sm text-blue-600 underline">
                I agree to the <a href="/terms" className="underline">terms</a>
              </Label>

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#207ea0] text-white px-6 py-3 rounded shadow-sm hover:bg-[#1a6b89] transition-colors duration-200">
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <div className="pt-10 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212529] mb-6">
            Latest Information on Trademark Publications
          </h2>
          <p className="text-gray-700 mb-8 font-semibold text-lg">
            Subscribe to receive updates on new trademark publications and
            relevant marketing insights.
          </p>

          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-[#207ea0] px-4 py-3 w-full sm:w-[300px] rounded h-[48px] focus:outline-none text-[#212529]"
            />
            <button
              type="submit"
              className="bg-[#207ea0] text-white px-6 py-3 rounded shadow-sm hover:bg-[#1a6b89] transition-colors duration-200">
              Sign Up
            </button>
          </form>

          <p className="text-[10px] text-gray-500 mt-4">
            By selecting "Sign Up", you confirm your agreement to our
            <a href="#" className="underline ml-1">
              Terms and Conditions.
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

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
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start ">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <h3 className="text-5xl font-semibold text-[#333747]">
              Reach Out Today
            </h3>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 space-y-4 text-[#333747] text-[22px] leading-7 ">
            <div className="pb-5">
              <h4 className="font-bold">Disclaimer</h4>
              <p className="font-semibold text-[18px]">
                Our website may contain links to external third-party sites.
                Because we have no control over the content of these external
                sites, we cannot guarantee the accuracy or completeness of any
                information they provide. Responsibility for the content of such
                third-party sites rests solely with the respective site owners
                or providers. At the time we created these links, we found no
                indication of any legal violations. Should we become aware of
                any unlawful content on these linked sites, we will promptly
                remove the corresponding link.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Copyrights</h4>
              <p className="font-semibold text-[18px]">
                The text, images, and any other works made available on these
                webpages are protected by Polish copyright laws. Any
                duplication, processing, distribution, or other form of
                commercialization of such material beyond what is permitted
                under applicable copyright law requires prior written consent
                from the respective author or creator.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
            <div className="!pr-[11rem]">
              <h2 className="text-4xl font-semibold mb-4 text-[#333747]">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-6">
                We’re here to assist you with any inquiries.
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#0098cb] w-6 h-6" />
                <p className="text-[#333747]">info@natp-trademark.com</p>
              </div>
            </div>

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
                    className="w-full border border-[#2C5CA4] p-2 focus:outline-none"
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
                    className="w-full border border-[#2C5CA4] p-2 focus:outline-none"
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
                    className="w-full border border-[#2C5CA4] p-2 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="terms" className="text-sm text-[#212529]">
                    I agree to the{" "}
                    <a href="/terms" className="underline">
                      terms
                    </a>
                  </Label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0098cb] text-white px-6 py-2 shadow-sm">
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="pt-4 pb-16  text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212529] mb-6">
            Stay Updated on Trademarks
          </h2>
          <p className="text-gray-700 mb-8 font-semibold text-lg">
            Subscribe to our newsletter for the latest trademark publications
            and valuable marketing insights.
          </p>

          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-cyan-600 px-4 py-3 w-full sm:w-[300px] h-[40px] focus:outline-none text-[#212529]"
            />
            <button
              type="submit"
              className="bg-[#0098cb] text-white px-6 py-2 shadow-sm">
              Sign Up
            </button>
          </form>

          <p className="text-[10px] text-gray-500 mt-4">
            By clicking Sign Up, you agree to our{" "}
            <a href="#" className="underline">
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { handleApplicationSubmit } from "@/lib/form-handlers";
import { Footer } from "@/components/Footer";

export default function Apply() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    trademark: "",
    application_number: "",
    application_date: "",
    class: "",
    us_class: "",
    zip: "",
    city: "",
    country: "",
    role: "",
    message: "",
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await handleApplicationSubmit(formData)) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        trademark: "",
        application_number: "",
        application_date: "",
        class: "",
        us_class: "",
        zip: "",
        city: "",
        country: "",
        role: "",
        message: "",
        agree: false,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className=" min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-semibold  mb-6 text-[#333747]">
          Application To Publish Your Trademark
          </h1>
          <p className="text-[20px] text-[#333747]">
          Submit your trademark to our exclusive database and enhance brand visibility today.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-12">

          <h2 className="text-5xl font-semibold mb-6 text-[#333747]">
          Strengthen Brand Visibility Through Trademark Publication
          </h2>
          <p className="text-[#333747] text-lg mb-10 font-semibold">
          The publication of a trademark is a key measure for establishing brand recognition and building credibility. By making your trademark publicly accessible, you position your brand for increased distinction within a competitive market environment.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <img
                  src="/images/1.svg"
                  alt=""
                />
              </div>
              <span className="font-semibold text-[#333747]">
                Enhance recognition and strengthen your brand’s position in the market.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <img
                  src="/images/1.svg"
                  alt=""
                />
              </div>
              <span className="font-semibold text-[#333747]">
              Enhance recognition and strengthen your brand’s position in the market.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <img
                  src="/images/1.svg"
                  alt=""
                />
              </div>
              <span className="font-semibold text-[#333747]">
              Appeal to prospective clients by presenting a clearly defined and protected trademark.
              </span>
            </li>
          </ul>
        </div>

        <div className=" p-8 rounded-lg shadow-sm">
          <h3 className="text-4xl font-semibold mb-6 text-center text-[#333747]">
            Trademark Inquiry
          </h3>
          <p className="text-[#333747] mb-8 text-center text-xl">
          Please fill out the form to initiate your trademark publication request.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#333747]">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.first_name}
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#333747]">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#333747]">
                  Email
                </Label>
                <Input
                  id="email"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#333747]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#333747]">
                Owner
              </Label>
              <Input
                id="company"
                className="h-[48px] text-[#333747] border border-[#207ea0]"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trademark" className="text-[#333747]">
                Mark
              </Label>
              <Input
                id="trademark"
                className="h-[48px] text-[#333747] border border-[#207ea0]"
                value={formData.trademark}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    trademark: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="application-number" className="text-[#333747]">
                  Application Number
                </Label>
                <Input
                  id="application-number"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  value={formData.application_number}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_number: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="application-date" className="text-[#333747]">
                  Application Date
                </Label>
                <Input
                  id="application-date"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  type="date"
                  value={formData.application_date}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_date: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="class" className="text-[#333747]">
                National Class
              </Label>
              <Input
                id="class"
                className="h-[48px] text-[#333747] border border-[#207ea0]"
                value={formData.class}
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="us_class" className="text-[#333747]">
                US Class
              </Label>
              <Input
                id="us_class"
                className="h-[48px] text-[#333747] border border-[#207ea0]"
                placeholder=""
                value={formData.us_class}
                onChange={(e) =>
                  setFormData({ ...formData, us_class: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-[#333747]">
                  ZIP
                </Label>
                <Input
                  id="zip"
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-[#333747]">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  className="h-[48px] text-[#333747] border border-[#207ea0]"
                  placeholder=""
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-[#333747]">
                Country
              </Label>
              <Input
                id="country"
                value={formData.country}
                className="h-[48px] text-[#333747] border border-[#207ea0]"
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#333747]">Your Role in Business</Label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {[
                  "Business Owner",
                  "Legal Advisor",
                  "Other Roles",
                  "Trademark Agent",
                  "Brand Manager",
                  "Specify",
                ].map((role) => (
                  <label
                    key={role}
                    className="flex items-center space-x-2 text-[#333747]">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      className="text-[#333747] "
                      checked={formData.role === role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    />
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#333747]">
                Message
              </Label>
              <Textarea
                id="message"
                className="h-[180px] text-[#333747] border border-[#207ea0]"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({ ...formData, agree: e.target.checked })
                }
              />
              <Label htmlFor="agree" className="font-normal text-lg text-[#333747]">I agree to the terms.</Label>
            </div>
            <div className="flex justify-center items-center">
              <Button type="submit" className=" bg-[#207ea0] text-white hover:bg-[#207ea0] px-7 py-6 shadow-xl">
                Submit
              </Button>
            </div>
          </form>
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#333747] mb-14 leading-snug text-center">
            Step-by-Step Instructions for Effective Trademark Publication
            </h2>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/Step 1.svg"
                  alt="Professionalism Icon"
                  className="w-[120px] h-[120px] mb-6"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-6">
                Step 1: Application Submission
                </h4>
                <p className="text-[#333747] font-semibold text-[15px]">
                Initiate the process by completing our online trademark application form.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/Step 2.svg"
                  alt="Client-Centric Icon"
                  className="w-[120px] h-[120px] mb-6"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-6">
                Step 2: Application Review
                </h4>
                <p className="text-[#333747] font-semibold text-[15px]">
                We examine your submission to ensure completeness and readiness for publication.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/Step 3.svg"
                  alt="Improvement Icon"
                  className="w-[120px] h-[120px] mb-6"
                />
                <h4 className="text-3xl font-semibold text-[#333747] mb-6">
                Step 3: Trademark Publication
                </h4>
                <p className="text-[#333747] font-semibold text-[15px]">
                Upon approval, your trademark is officially published in our database.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
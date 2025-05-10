
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const handleContactSubmit = async (formData: {
  name: string;
  email: string;
  message: string;
  agreed_to_terms: boolean;
}) => {
  try {
    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) throw error;
    toast.success("Message sent successfully!");
    return true;
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
    return false;
  }
};

export const handleNewsletterSubmit = async (email: string) => {
  try {
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }]);

    if (error) throw error;
    toast.success("Successfully subscribed to newsletter!");
    return true;
  } catch (error) {
    toast.error("Failed to subscribe. Please try again.");
    return false;
  }
};

export const handleApplicationSubmit = async (formData: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  trademark: string;
  application_number?: string;
  application_date?: string;
  class?: string;
  us_class?: string;
  zip?: string;
  city?: string;
  country?: string;
  role?: string;
  message?: string;
  agree?: boolean;
}) => {
  try {
    // Create a new object with only the fields that exist in the database
    const applicationData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      trademark: formData.trademark,
      application_number: formData.application_number || null,
      application_date: formData.application_date || null,
      role: formData.role || null,
      message: formData.message || null
    };

    const { error } = await supabase
      .from('applications')
      .insert([applicationData]);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    toast.success("Application submitted successfully!");
    return true;
  } catch (error) {
    console.error('Error submitting application:', error);
    toast.error("Failed to submit application. Please try again.");
    return false;
  }
};

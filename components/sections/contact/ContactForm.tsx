"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";

const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales & Pricing" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunities" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              subject: "",
              message: "",
            });
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Full Name *"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            label="Email Address *"
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Company (Optional)"
            id="company"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
          <Select
            label="Subject *"
            id="subject"
            name="subject"
            options={subjectOptions}
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
          />
        </div>

        <Textarea
          label="Message *"
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </div>
    </motion.form>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ContactForm, ContactInfo } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding-sm bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form - takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info - takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

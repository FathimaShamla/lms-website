"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PricingCards, PricingFAQ } from "@/components/sections/pricing";

export default function PricingPage() {
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
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Choose the perfect plan for your organization. Start with a 14-day
              free trial, no credit card required.
            </p>
          </motion.div>
        </Container>
      </section>

      <PricingCards />
      <PricingFAQ />
    </>
  );
}

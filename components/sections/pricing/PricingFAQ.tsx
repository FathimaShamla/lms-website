"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50">
      <Container size="small">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our pricing and plans.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-4"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

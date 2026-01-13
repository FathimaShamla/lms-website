"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by teams{" "}
            <span className="gradient-text">around the world</span>
          </h2>
          <p className="text-lg text-gray-600">
            See what our customers have to say about their experience with
            LearnHub.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

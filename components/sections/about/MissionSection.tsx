"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Heart, Zap, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_VALUES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Users,
  Heart,
  Zap,
};

export function MissionSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering organizations to{" "}
              <span className="gradient-text">unlock human potential</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that learning is the key to progress. Our mission is to
              make high-quality education accessible to everyone, everywhere. We
              build tools that help organizations create transformative learning
              experiences.
            </p>
            <p className="text-lg text-gray-600">
              Founded by educators and technologists who experienced firsthand
              the challenges of traditional learning management, we set out to
              create something better &ndash; a platform that&apos;s powerful yet
              intuitive, comprehensive yet accessible.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {COMPANY_VALUES.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

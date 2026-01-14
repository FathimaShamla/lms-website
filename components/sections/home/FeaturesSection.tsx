"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  Award,
  TrendingUp,
  Building2,
  Shield,
  GraduationCap,
  Eye,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FEATURES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  ClipboardCheck,
  Award,
  TrendingUp,
  Building2,
  Shield,
  GraduationCap,
  Eye,
};

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white">
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
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{" "}
            <span className="gradient-text">deliver exceptional learning</span>
          </h2>
          <p className="text-lg text-gray-600">
            Powerful tools to create, manage, and scale your learning programs.
            Built for modern teams who demand the best.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

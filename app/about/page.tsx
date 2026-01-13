"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MissionSection, TeamSection } from "@/components/sections/about";

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We&apos;re on a mission to{" "}
              <span className="gradient-text">democratize learning</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              LearnHub was founded with a simple belief: everyone deserves
              access to great education. We build the tools that make it
              possible.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story / Stats Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "2019", label: "Founded" },
              { value: "50+", label: "Team Members" },
              { value: "30+", label: "Countries" },
              { value: "$20M", label: "Raised" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <MissionSection />
      <TeamSection />

      {/* Join Us CTA */}
      <section className="section-padding-sm bg-white">
        <Container size="small">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to join our team?
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
              We&apos;re always looking for talented people who share our
              passion for education and technology.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3.5 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

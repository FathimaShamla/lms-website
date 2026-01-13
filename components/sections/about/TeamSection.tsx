"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TEAM_MEMBERS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function TeamSection() {
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
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the people{" "}
            <span className="gradient-text">behind LearnHub</span>
          </h2>
          <p className="text-lg text-gray-600">
            A passionate team of educators, engineers, and designers dedicated
            to transforming how the world learns.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-gray-700 hover:bg-teal-500 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-gray-700 hover:bg-teal-500 hover:text-white transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

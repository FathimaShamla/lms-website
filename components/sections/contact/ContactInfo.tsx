"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE_CONFIG.address,
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM PST",
    href: null,
  },
];

export function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <motion.div
              key={detail.label}
              variants={staggerItem}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <detail.icon className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-gray-900 hover:text-teal-600 transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-gray-900">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <motion.div
        variants={staggerItem}
        className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-xl font-bold mb-4">Need immediate help?</h3>
        <p className="text-teal-100 mb-6">
          Check out our resources for quick answers to common questions.
        </p>
        <div className="space-y-3">
          <a
            href="#"
            className="block py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            Help Center &rarr;
          </a>
          <a
            href="#"
            className="block py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            Documentation &rarr;
          </a>
          <a
            href="#"
            className="block py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            Community Forum &rarr;
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

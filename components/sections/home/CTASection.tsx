"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
];

export function CTASection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to transform your{" "}
              <span className="text-teal-400">learning experience?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Join thousands of organizations already using LearnHub to create
              engaging learning experiences. Get started today with our free
              trial.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

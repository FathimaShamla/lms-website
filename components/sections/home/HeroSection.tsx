"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { heroTextContainer, heroTextItem, float } from "@/lib/animations";

const floatingBadges = [
  { icon: Users, label: "50K+ Users", delay: 0 },
  { icon: BookOpen, label: "10K+ Courses", delay: 0.2 },
  { icon: Award, label: "99% Satisfaction", delay: 0.4 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroTextItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Trusted by 500+ organizations worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={heroTextItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {SITE_CONFIG.tagline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="gradient-text">
                {SITE_CONFIG.tagline.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              variants={heroTextItem}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              {SITE_CONFIG.description}
            </motion.p>

            <motion.div
              variants={heroTextItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={heroTextItem}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                {["TechCorp", "EduGlobal", "LearnPro", "SkillUp"].map(
                  (company) => (
                    <span
                      key={company}
                      className="text-xl font-bold text-gray-400"
                    >
                      {company}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main illustration placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl shadow-2xl shadow-teal-500/20 p-8">
                <div className="h-full w-full bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold">LearnHub</p>
                    <p className="text-white/80">Learning Platform</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  variants={float}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: badge.delay }}
                  className={`absolute bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 ${
                    index === 0
                      ? "top-4 -left-4"
                      : index === 1
                      ? "top-1/2 -right-8"
                      : "bottom-8 -left-8"
                  }`}
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 pr-2">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

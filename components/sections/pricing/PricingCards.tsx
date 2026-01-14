"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PRICING_PLANS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function PricingCards() {
  return (
    <section className="section-padding-sm bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-2xl shadow-teal-500/30 scale-105 z-10"
                  : "bg-white border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl"
              } transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-lg ${
                    plan.highlighted ? "text-teal-100" : "text-gray-500"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className={`mb-6 ${
                  plan.highlighted ? "text-teal-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-white text-teal-600 hover:bg-teal-50"
                    : ""
                }`}
                variant={plan.highlighted ? "secondary" : "primary"}
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <div className="space-y-4">
                <p
                  className={`text-sm font-semibold ${
                    plan.highlighted ? "text-teal-100" : "text-gray-500"
                  }`}
                >
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-teal-200" : "text-teal-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation) => (
                    <li
                      key={limitation}
                      className="flex items-start gap-3 opacity-60"
                    >
                      <X
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-teal-200" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-teal-100" : "text-gray-500"
                        }`}
                      >
                        {limitation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { GraduationCap, Phone, Instagram, Facebook, Linkedin, Mail, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  left: [
    { label: "Products", href: "/pricing" },
    { label: "Partners", href: "#" },
    { label: "Blogs", href: "#" },
  ],
  right: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialIcons = [
  { name: "Phone", icon: Phone, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Behance", icon: Sparkles, href: "#" },
  { name: "Mail", icon: Mail, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Brand Section - Left */}
            <div className="flex flex-col items-center lg:items-start">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                  {SITE_CONFIG.brandName}
                </span>
              </Link>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              </p>
            </div>

            {/* Center Section - Social Icons */}
            <div className="flex flex-col items-center">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="flex gap-12 md:gap-16">
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                {footerLinks.left.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2">
                {footerLinks.right.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
}

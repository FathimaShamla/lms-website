export const SITE_CONFIG = {
  name: "Nexus LMS",
  brandName: "Nexus LMS",
  tagline: "Learn Without Limits",
  description:
    "The complete learning management system for modern teams. Create, manage, and deliver engaging online courses with ease.",
  url: "https://nexuslms.com",
  email: "hello@nexuslms.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco, CA 94102",
};

export const SIGNUP_URL = "https://joseph-81.th-workspace.techwarelab.com/auth";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FEATURES = [
  {
    icon: "BookOpen",
    title: "Course Management",
    description:
      "Create, organize, and deliver engaging courses with our intuitive course builder. Support for multiple lesson types and rich media content.",
  },
  {
    icon: "ClipboardCheck",
    title: "Quiz System",
    description:
      "Build comprehensive assessments with multiple question types, time limits, and instant feedback. Track learner progress with detailed analytics.",
  },
  {
    icon: "Award",
    title: "Certificates",
    description:
      "Automatically issue beautiful certificates upon course completion. Customize templates and verify credentials with unique certificate IDs.",
  },
  {
    icon: "TrendingUp",
    title: "Progress Tracking",
    description:
      "Monitor learner progress in real-time with detailed dashboards. Track lesson completion, quiz scores, and overall course progress.",
  },
  {
    icon: "Building2",
    title: "Multi-tenancy",
    description:
      "Manage multiple organizations and academies from a single platform. Perfect for enterprises, franchises, and educational networks.",
  },
  {
    icon: "Shield",
    title: "Role-based Access",
    description:
      "Four-level permission hierarchy with granular access controls. Platform admins, super admins, academic admins, and instructors.",
  },
  {
    icon: "GraduationCap",
    title: "Academy Management",
    description:
      "Create and manage multiple academies per organization. Custom subdomains, branding, and independent student management.",
  },
  {
    icon: "Eye",
    title: "Accessibility",
    description:
      "Built-in accessibility features including visual, motor, auditory, and cognitive settings. Inclusive learning for everyone.",
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for small teams getting started with online learning",
    features: [
      "1 Academy",
      "10 Courses",
      "100 Users",
      "50 Lessons",
      "20 Quizzes",
      "100 Certificates/month",
      "2 Certificate Templates",
      "Email Notifications",
      "Community Support",
    ],
    limitations: [
      "No Custom Branding",
      "No API Access",
      "No Analytics Dashboard",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 79,
    period: "month",
    description: "For growing organizations scaling their learning programs",
    features: [
      "5 Academies",
      "50 Courses",
      "500 Users",
      "200 Lessons",
      "100 Quizzes",
      "500 Certificates/month",
      "10 Certificate Templates",
      "Custom Branding",
      "Advanced Analytics",
      "Priority Support",
      "Email Notifications",
    ],
    limitations: ["No API Access", "No White Label"],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    period: "month",
    description: "For large-scale deployments with advanced requirements",
    features: [
      "30 Academies",
      "Unlimited Courses",
      "Unlimited Users",
      "Unlimited Lessons",
      "Unlimited Quizzes",
      "Unlimited Certificates",
      "50 Certificate Templates",
      "Custom Branding",
      "White Label",
      "API Access",
      "Advanced Analytics",
      "Dedicated Support",
      "SLA Guarantee",
      "Custom Integrations",
    ],
    limitations: [],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const STATS = [
  { value: 50000, suffix: "+", label: "Active Learners" },
  { value: 500, suffix: "+", label: "Academies" },
  { value: 10000, suffix: "+", label: "Courses Created" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Nexus LMS transformed how we deliver training to our global workforce. The multi-tenancy feature is a game-changer for our franchise network.",
    author: "Sarah Chen",
    role: "Chief Learning Officer",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    quote:
      "The quiz system and certificate generation have streamlined our certification program. We've reduced administrative time by 70%.",
    author: "Michael Rodriguez",
    role: "Director of Education",
    company: "Professional Institute",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    quote:
      "Setting up multiple academies for our different departments was incredibly easy. The role-based access keeps everything organized and secure.",
    author: "Emily Thompson",
    role: "HR Director",
    company: "Innovate Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO & Co-founder",
    bio: "Former educator with 15+ years in EdTech. Passionate about making learning accessible to everyone.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "CTO & Co-founder",
    bio: "Full-stack engineer with expertise in scalable learning platforms. Previously at Google and Coursera.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "David Park",
    role: "Head of Product",
    bio: "Product leader focused on user experience. Believes great software should be invisible.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Rachel Adams",
    role: "Head of Customer Success",
    bio: "Dedicated to helping customers achieve their learning goals. 10+ years in customer success.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start with any plan free for 14 days. No credit card required. You'll have full access to all features in your chosen plan. At the end of the trial, simply enter your payment details to continue.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual Enterprise plans.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Save 20% when you choose annual billing. This applies to all plans and is automatically calculated at checkout.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 30 days after cancellation. You can export all your content, user data, and certificates during this period. After 30 days, data is permanently deleted.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Absolutely! For organizations with specific requirements, we offer custom deployments, dedicated infrastructure, and tailored feature development. Contact our sales team to discuss your needs.",
  },
];

export const COMPANY_VALUES = [
  {
    icon: "Lightbulb",
    title: "Innovation",
    description:
      "We continuously push boundaries to create better learning experiences through technology.",
  },
  {
    icon: "Users",
    title: "Accessibility",
    description:
      "Education should be accessible to everyone, regardless of ability or background.",
  },
  {
    icon: "Heart",
    title: "Customer Focus",
    description:
      "Our customers' success is our success. We're committed to their learning outcomes.",
  },
  {
    icon: "Zap",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we build and deliver.",
  },
];

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "GitHub", href: "#", icon: "Github" },
  { name: "YouTube", href: "#", icon: "Youtube" },
];

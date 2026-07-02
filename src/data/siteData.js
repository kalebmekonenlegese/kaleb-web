import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBriefcase,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckBadge,
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineHomeModern,
  HiOutlineLifebuoy,
  HiOutlineMagnifyingGlass,
  HiOutlineMegaphone,
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

export const navigationItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#selected-work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Web Design for Growing Businesses",
  headline:
    "I build modern websites that help businesses attract more customers and grow online.",
  description:
    "I design and develop fast, responsive websites for hotels, restaurants, real estate agencies, and small businesses. Every website is built to create trust, improve user experience, and support your business goals.",
  primaryCta: { label: "View My Work", href: "#selected-work" },
  secondaryCta: { label: "Hire Me", href: "#contact" },
  showcaseTitle: "Hatsey Kaleb Hotel",
  showcaseCopy:
    "A featured hotel website preview that demonstrates how a clearer layout, stronger visuals, and mobile-first structure can improve trust before a guest ever makes contact.",
  showcaseNote:
    "Final public screenshots will be added when the polished public version is ready.",
  badges: ["Responsive", "Fast Loading", "Modern Design", "Project Preview"],
};

export const trustIndicators = [
  "Mobile-First",
  "Fast Performance",
  "SEO Ready",
  "Clear Communication",
  "Post-Launch Support",
];

export const socialProof = [
  { value: "3+", label: "Projects Completed" },
  { value: "1–3 Weeks", label: "Typical Small Business Timeline" },
  { value: "24–48 Hours", label: "Response Time" },
  { value: "Post-Launch", label: "Guidance & Support" },
];

export const selectedWorkContent = {
  eyebrow: "Selected Work",
  title: "Selected Work",
  description:
    "A selection of projects that demonstrate how I design and build modern websites that help businesses establish a professional online presence and connect with their customers.",
};

export const featuredProject = {
  title: "Hatsey Kaleb Hotel Website",
  projectType: "Personal Project",
  intro:
    "A hotel website concept built to present the business more professionally online, highlight key services clearly, and make guest inquiries easier.",
  challenge:
    "The hotel needed a more polished online presence that could communicate rooms, amenities, and business information clearly while building trust quickly for first-time visitors.",
  solution:
    "I designed a modern, mobile-first website structure with stronger hierarchy, clearer calls to action, and focused content sections that make the business easier to understand and contact.",
  keyFeatures: [
    "A clean homepage layout that introduces the hotel clearly",
    "Dedicated sections for rooms, amenities, and essential business details",
    "Mobile-friendly browsing for guests comparing options on their phones",
    "A structure that can expand as more content and booking features are added",
  ],
  technologies: ["HTML", "CSS", "JavaScript"],
  preview: {
    tone: "hotel",
    label: "Project Preview",
    heading: "A polished hotel website experience designed to build trust before guests make contact.",
    chips: ["Rooms", "Amenities", "Contact"],
    imageSrc: "",
    imageAlt: "Hatsey Kaleb Hotel website homepage preview",
  },
  demo: {
    label: "Live Demo (Request Access)",
    href:
      "mailto:kalebmekonen.kb@gmail.com?subject=Hatsey%20Kaleb%20Hotel%20Live%20Demo%20Request",
  },
  github: {
    label: "GitHub (Request Access)",
    href:
      "mailto:kalebmekonen.kb@gmail.com?subject=Hatsey%20Kaleb%20Hotel%20GitHub%20Request",
  },
  note:
    "Public demo and repository access are available on request while the project is being finalized.",
};

export const selectedWork = [
  {
    title: "Walya Entertainment Branch Management System",
    type: "Concept Project",
    category: "Operations Platform",
    description:
      "A concept platform designed to make branch coordination clearer, reduce operational friction, and support better day-to-day visibility across locations.",
    technologies: ["React", "Tailwind CSS", "UI System Design"],
    preview: {
      tone: "operations",
      label: "Project Preview",
      heading: "A cleaner dashboard concept for multi-branch coordination.",
      chips: ["Branch Overview", "Operations", "Reporting"],
      imageSrc: "",
      imageAlt: "Walya Entertainment branch management platform preview",
    },
    demo: {
      label: "Live Demo (Request Access)",
      href:
        "mailto:kalebmekonen.kb@gmail.com?subject=Walya%20Entertainment%20Live%20Demo%20Request",
    },
    github: {
      label: "GitHub (Request Access)",
      href:
        "mailto:kalebmekonen.kb@gmail.com?subject=Walya%20Entertainment%20GitHub%20Request",
    },
  },
  {
    title: "DeliWay Delivery Platform",
    type: "Concept Project",
    category: "Delivery Platform",
    description:
      "A concept focused on helping local businesses, customers, and delivery teams move through ordering and delivery workflows more clearly.",
    technologies: ["React", "Responsive UI", "Product Design"],
    preview: {
      tone: "delivery",
      label: "Project Preview",
      heading: "A delivery experience concept built for clarity and faster action.",
      chips: ["Ordering", "Tracking", "Customer Flow"],
      imageSrc: "",
      imageAlt: "DeliWay delivery platform preview",
    },
    demo: {
      label: "Live Demo (Request Access)",
      href:
        "mailto:kalebmekonen.kb@gmail.com?subject=DeliWay%20Live%20Demo%20Request",
    },
    github: {
      label: "GitHub (Request Access)",
      href:
        "mailto:kalebmekonen.kb@gmail.com?subject=DeliWay%20GitHub%20Request",
    },
  },
];

export const selectedWorkCta = {
  eyebrow: "Have a project in mind?",
  description:
    "Let's build a website that helps your business stand out online.",
  button: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
};

export const services = [
  {
    title: "Business Websites",
    icon: HiOutlineGlobeAlt,
    description:
      "Professional websites that help businesses look credible, make a strong first impression, and generate more customer inquiries.",
    benefits: [
      "Build trust with a modern online presence",
      "Make your business easier to understand at a glance",
      "Encourage more inquiries from potential customers",
      "Create a stronger brand image across devices",
    ],
    cta: "Request a Quote",
  },
  {
    title: "Hotel Websites",
    icon: HiOutlineBuildingOffice2,
    description:
      "Showcase rooms, amenities, booking information, and contact details with a polished, mobile-friendly guest experience.",
    benefits: [
      "Present rooms and services more professionally",
      "Help guests find important details quickly",
      "Improve trust before a guest makes contact",
      "Support more direct inquiries and future booking growth",
    ],
    cta: "Learn More",
  },
  {
    title: "Restaurant Websites",
    icon: HiOutlineSparkles,
    description:
      "Present menus, location, gallery, reservations, and business information in an engaging, easy-to-browse format.",
    benefits: [
      "Make menus and opening details easier to find",
      "Show your brand and atmosphere more clearly",
      "Support more reservations and customer visits",
      "Improve mobile browsing for customers on the go",
    ],
    cta: "Learn More",
  },
  {
    title: "Real Estate Websites",
    icon: HiOutlineHomeModern,
    description:
      "Display property listings, image galleries, contact forms, and lead-generation features with a more trustworthy presentation.",
    benefits: [
      "Present properties in a cleaner, more premium way",
      "Make listings easier to explore on desktop and mobile",
      "Capture more qualified inquiries from interested buyers",
      "Strengthen the agency's online credibility",
    ],
    cta: "Request a Quote",
  },
  {
    title: "Landing Pages",
    icon: HiOutlineMegaphone,
    description:
      "High-converting landing pages designed for campaigns, products, events, or new business launches with one clear goal.",
    benefits: [
      "Focus attention on one offer or campaign",
      "Reduce distraction and improve message clarity",
      "Support more leads, sign-ups, or inquiries",
      "Launch faster with a focused page structure",
    ],
    cta: "Learn More",
  },
  {
    title: "Website Redesign",
    icon: HiOutlineArrowPathRoundedSquare,
    description:
      "Modernize outdated websites with improved design, performance, accessibility, and a better overall customer experience.",
    benefits: [
      "Refresh an outdated look that hurts trust",
      "Improve speed, clarity, and usability",
      "Make your site feel more current and professional",
      "Create a stronger experience across devices",
    ],
    cta: "Request a Quote",
  },
  {
    title: "AI Chatbot Integration",
    icon: HiOutlineChatBubbleLeftRight,
    description:
      "An optional AI assistant that can answer common questions, capture leads, and help visitors get support even outside business hours.",
    benefits: [
      "Provide faster answers to common customer questions",
      "Capture leads while you are offline",
      "Reduce repetitive manual responses",
      "Add a modern support experience to your site",
    ],
    cta: "Learn More",
    optional: true,
  },
];

export const consultationCta = {
  eyebrow: "Need a website for your business?",
  description:
    "Let's discuss your project and find the best solution for your business goals.",
  button: {
    label: "Get a Free Consultation",
    href: "#contact",
  },
};

export const whyChooseItems = [
  {
    title: "Business-Focused Solutions",
    icon: HiOutlineBriefcase,
    description:
      "Your website is designed to support your business goals, not just look attractive on a screen.",
  },
  {
    title: "Modern & Responsive Design",
    icon: HiOutlineDevicePhoneMobile,
    description:
      "Your website will work smoothly on desktop, tablet, and mobile so customers can take action from any device.",
  },
  {
    title: "Performance & SEO",
    icon: HiOutlineRocketLaunch,
    description:
      "Fast, search-friendly pages help visitors stay engaged and make it easier for people to discover your business online.",
  },
  {
    title: "Clear Communication",
    icon: HiOutlineChatBubbleLeftRight,
    description:
      "You stay informed throughout the project with clear updates, realistic timelines, and straightforward next steps.",
  },
  {
    title: "Scalable & Maintainable",
    icon: HiOutlineWrenchScrewdriver,
    description:
      "Your website is built in a clean, organized way so updates and future improvements are easier to manage.",
  },
  {
    title: "Reliable Support",
    icon: HiOutlineLifebuoy,
    description:
      "You receive post-launch guidance and support so your website continues to serve your business well after it goes live.",
  },
];

export const whyChooseCta = {
  eyebrow: "Ready to bring your business online?",
  description:
    "Let's build a website that reflects your brand and supports your business goals.",
  button: {
    label: "Start Your Project",
    href: "#contact",
  },
};

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: HiOutlineMagnifyingGlass,
    description:
      "We discuss your business, goals, target audience, and project requirements to ensure we're aligned from the start.",
  },
  {
    number: "02",
    title: "Planning",
    icon: HiOutlineClipboardDocumentList,
    description:
      "I create a clear project roadmap, define priorities, and establish a realistic timeline.",
  },
  {
    number: "03",
    title: "Design",
    icon: HiOutlineSparkles,
    description:
      "I design a modern, user-friendly interface that reflects your brand and creates a great customer experience.",
  },
  {
    number: "04",
    title: "Development",
    icon: HiOutlineGlobeAlt,
    description:
      "I build a fast, responsive, secure, and accessible website using modern best practices.",
  },
  {
    number: "05",
    title: "Testing",
    icon: HiOutlineCheckBadge,
    description:
      "I thoroughly test the website across devices and browsers to ensure quality before launch.",
  },
  {
    number: "06",
    title: "Launch & Support",
    icon: HiOutlineRocketLaunch,
    description:
      "Once approved, I launch your website and provide post-launch support, guidance, and assistance when needed.",
  },
];

export const processCta = {
  eyebrow: "Ready to start your project?",
  description:
    "Let's discuss your goals and create a website that helps your business grow.",
  button: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
};

export const aboutContent = {
  introduction:
    "I'm Kaleb Mekonen, a web designer and developer focused on helping hotels, restaurants, real estate agencies, and growing businesses build modern websites that create trust, communicate clearly, and make it easier for customers to take action. I approach every project with careful planning, clear communication, and a strong focus on building reliable, user-friendly experiences that support real business goals.",
  mission:
    "My mission is to help businesses build a professional online presence through modern, fast, and user-focused websites that create trust and support long-term growth.",
  philosophy:
    "I believe a website should do more than look good. It should build trust, communicate your brand clearly, and make it easier for customers to choose your business.",
};

export const aboutValues = [
  {
    title: "Quality",
    icon: HiOutlineCheckBadge,
    description:
      "Reliable, polished websites built with attention to detail.",
  },
  {
    title: "Clear Communication",
    icon: HiOutlineChatBubbleLeftRight,
    description:
      "Transparent updates and straightforward collaboration throughout every project.",
  },
  {
    title: "Continuous Improvement",
    icon: HiOutlineRocketLaunch,
    description:
      "Constantly improving my skills and adopting modern best practices.",
  },
  {
    title: "Long-Term Partnership",
    icon: HiOutlineLifebuoy,
    description:
      "Providing dependable support beyond project delivery.",
  },
];

export const aboutSkills = [
  "Frontend Development",
  "UI/UX Design",
  "Responsive Design",
  "Performance & SEO",
  "AI-Assisted Development",
  "Deployment",
];

export const aboutCta = {
  eyebrow: "Ready to bring your business online?",
  description:
    "Let's discuss your project and build a website that supports your business.",
  button: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
};

export const trustProofContent = {
  introduction:
    "I aim to earn trust through professionalism, clear communication, and careful attention to the quality of every website I build. Even before formal testimonials are available, the work should feel organized, thoughtful, and reliable.",
};

export const trustProofCards = [
  {
    title: "Quality-First Development",
    icon: HiOutlineCheckBadge,
    description:
      "Every website is built with attention to performance, usability, and maintainability.",
  },
  {
    title: "Mobile-First Experience",
    icon: HiOutlineDevicePhoneMobile,
    description:
      "Websites are designed to provide a seamless experience across all devices.",
  },
  {
    title: "Performance & SEO",
    icon: HiOutlineRocketLaunch,
    description:
      "Fast-loading, accessible websites built with modern best practices.",
  },
  {
    title: "Transparent Communication",
    icon: HiOutlineChatBubbleLeftRight,
    description:
      "Clear project updates, realistic timelines, and open collaboration from start to finish.",
  },
];

export const trustExpectations = [
  {
    title: "Quality in Every Detail",
    description:
      "Each project is built with care so the final website feels polished, reliable, and ready to represent your business professionally.",
  },
  {
    title: "Clear Communication",
    description:
      "You can expect straightforward updates, realistic timelines, and a clear understanding of what is happening at each stage.",
  },
  {
    title: "Transparent Process",
    description:
      "From the first conversation to launch, the work stays organized so you always know the next step and what to expect.",
  },
  {
    title: "Support After Launch",
    description:
      "I continue to provide guidance after the website goes live so you are not left without help when questions come up.",
  },
];

export const trustProofCta = {
  eyebrow: "Ready to work together?",
  description:
    "Let's build a website that represents your business professionally and helps you connect with more customers.",
  button: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
};

export const contactContent = {
  eyebrow: "Let's Build Your Next Website",
  title: "Let's Build Your Next Website",
  description:
    "Whether you're launching a new business, redesigning your current website, or exploring new ideas, I'd be happy to discuss your project and help you find the right solution.",
  introduction:
    "If you already have an idea in mind, feel free to share it below. I keep the process straightforward, reply clearly, and focus on helping you decide on the right next step for your business.",
  responseTime: "I typically respond within 24–48 hours.",
  reassurance:
    "No obligation. We'll simply discuss your project and see if we're a good fit.",
};

export const contactMethods = [
  {
    label: "Email",
    value: "kalebmekonen.kb@gmail.com",
    href: "mailto:kalebmekonen.kb@gmail.com",
    icon: HiOutlineEnvelope,
  },
  {
    label: "WhatsApp",
    value: "+251 948 537 230",
    href: "https://wa.me/251948537230",
    icon: HiOutlinePhone,
  },
  {
    label: "GitHub",
    value: "github.com/kalebmekonenlegese",
    href: "https://github.com/kalebmekonenlegese",
    icon: HiOutlineArrowTopRightOnSquare,
  },
  {
    label: "Country",
    value: "Ethiopia",
    icon: HiOutlineMapPin,
  },
];

export const contactFormOptions = {
  industries: [
    "Hotel",
    "Restaurant",
    "Real Estate",
    "Small Business",
    "Startup",
    "Other",
  ],
  projectTypes: [
    "New Website",
    "Website Redesign",
    "Landing Page",
    "AI Chatbot",
    "Other",
  ],
};

export const contactCta = {
  eyebrow: "Ready to grow your business online?",
  description:
    "Let's create a website that helps your business stand out and attract more customers.",
  button: {
    label: "Send Your Project Inquiry",
    href: "#contact-form",
  },
};

export const footerContent = {
  summary:
    "Modern websites for hotels, restaurants, real estate agencies, and growing businesses that want a stronger online presence.",
  ctaTitle: "Ready to talk about your project?",
  ctaDescription: "Let's discuss your goals and the right next step for your business.",
  ctaButton: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
};

export const faqContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Frequently Asked Questions",
  description: "Answers to common questions about my web design and development services.",
};

export const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of the project, but most small business websites take around 1 to 3 weeks. Before starting, I provide a clear timeline so you know what to expect.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. I can redesign outdated websites to improve their appearance, usability, responsiveness, and overall performance while keeping your business goals in focus.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website is designed with a mobile-first approach so it works smoothly across phones, tablets, and desktop devices.",
  },
  {
    question: "Can you help after the website is launched?",
    answer:
      "Yes. I provide post-launch support and guidance so you are not left figuring things out on your own after the site goes live.",
  },
  {
    question: "Can you add new features later?",
    answer:
      "Yes. Websites are built to be maintainable and expandable, which makes it easier to add new pages, features, or improvements as your business grows.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. Each project is designed around your business goals, brand, and customer needs instead of relying on a one-size-fits-all approach when a custom solution is the better fit.",
  },
  {
    question: "What information do you need before starting?",
    answer:
      "A good starting point is your business goals, target audience, preferred style, required features, and any existing branding or content you already have. If some of that is not ready yet, we can still discuss the project and clarify the next steps together.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by using the contact form or WhatsApp to share your project idea. I will review your message and respond within 24 to 48 hours.",
  },
];

export const faqCta = {
  eyebrow: "Still have a question?",
  description: "I'd be happy to discuss your project.",
  button: {
    label: "Contact Me",
    href: "#contact",
  },
};

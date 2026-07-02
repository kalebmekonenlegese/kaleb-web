import {
  aboutContent,
  aboutSkills,
  aboutValues,
  contactCta,
  contactContent,
  contactFormOptions,
  contactMethods,
  footerContent,
  faqContent,
  faqCta,
  faqItems,
  featuredProject,
  heroContent,
  navigationItems,
  processSteps,
  selectedWorkContent,
  selectedWork,
  selectedWorkCta,
  services,
  socialProof,
  trustProofCards,
  trustProofContent,
  trustExpectations,
  trustIndicators,
  whyChooseItems,
} from "./data/siteData";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/Footer";
import { FAQSection } from "./components/sections/FAQSection";
import { Header } from "./components/Header";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { FeaturedWorkSection } from "./components/sections/FeaturedWorkSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TrustSocialProofSection } from "./components/sections/TrustSocialProofSection";
import { WhyChooseMeSection } from "./components/sections/WhyChooseMeSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoStructuredData faqItems={faqItems} contactMethods={contactMethods} />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header items={navigationItems} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          content={heroContent}
          trustIndicators={trustIndicators}
          socialProof={socialProof}
        />
        <FeaturedWorkSection
          content={selectedWorkContent}
          featuredProject={featuredProject}
          selectedWork={selectedWork}
          cta={selectedWorkCta}
        />
        <ServicesSection services={services} />
        <WhyChooseMeSection items={whyChooseItems} />
        <ProcessSection steps={processSteps} />
        <AboutSection
          content={aboutContent}
          values={aboutValues}
          skills={aboutSkills}
        />
        <TrustSocialProofSection
          content={trustProofContent}
          cards={trustProofCards}
          expectations={trustExpectations}
        />
        <FAQSection content={faqContent} items={faqItems} cta={faqCta} />
        <ContactSection
          content={contactContent}
          methods={contactMethods}
          formOptions={contactFormOptions}
          cta={contactCta}
        />
      </main>
      <Footer items={navigationItems} contactMethods={contactMethods} content={footerContent} />
    </div>
  );
}

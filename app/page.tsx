import About from "./components/About";
import CommunitySection from "./components/Community";
import ContactSection from "./components/Contact";
import ContentSection from "./components/ContentSection";
import FeaturesSection from "./components/Features";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-black flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContentSection />
      <CommunitySection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}

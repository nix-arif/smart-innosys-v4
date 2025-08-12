import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import KnowledgeHub from "@/components/KnowledgeHub";
import OurServices from "@/components/Ourservices";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <KnowledgeHub />
      <AboutUs />
      <Feedback />
      <Contact />
    </div>
  );
}

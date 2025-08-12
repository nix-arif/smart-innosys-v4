import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import KnowledgeHub from "@/components/KnowledgeHub";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/Ourservices";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <KnowledgeHub />
      <AboutUs />
      <Feedback />
      <Contact />
    </div>
  );
}

"use client";

import Link from "next/link";

const services = [
  {
    title: "Minimally Invasive Laser Care",
    description:
      "Explore our advanced laser treatments designed for precision, faster recovery, and minimal discomfort.",
    href: "/services/laser-care",
  },
  {
    title: "Surgical Instruments",
    description:
      "Browse our top-quality surgical instruments for various medical procedures, ensuring precision and reliability.",
    href: "/services/surgical-instruments",
  },
  {
    title: "Sterilization Container",
    description:
      "Our sterilization containers ensure safe and effective sterilization of medical tools, preserving hygiene standards.",
    href: "/services/sterilization-containers",
  },
  {
    title: "Surgical Drapes",
    description:
      "High-quality surgical drapes for enhanced infection control and effective patient protection during surgeries.",
    href: "/services/surgical-drapes",
  },
  {
    title: "OT Attire",
    description:
      "Comfortable and sterile OT attire for healthcare professionals, ensuring safety and hygiene in the operating theater.",
    href: "/services/ot-attire",
  },
  {
    title: "Clinic Comfort Series",
    description:
      "Our Clinic Comfort Series includes furniture and equipment designed for patient comfort and clinic efficiency.",
    href: "/services/clinic-comfort-series",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-[#045494] mb-12 text-center">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {services.map(({ title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-[#045494] mb-4">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

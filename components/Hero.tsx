"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  // Replace with your WhatsApp phone number (without '+' symbol and country code)
  const phoneNumber = "+60196125883"; // Example number
  const message =
    "Hello, I am interested in learning more about your medical supplies!";

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="bg-[radial-gradient(circle_at_30%_30%,_#ffffff,_#eaf3f6,_#dce4e4,_#cce4ee)] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#045494] leading-tight">
            Reliable Medical Supplies <br /> Delivered with Care
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We provide hospitals, clinics, and pharmacies with high-quality
            medical products, fast logistics, and trusted service. Your patients
            deserve the best — so do you.
          </p>

          <div className="mt-8 flex gap-4">
            {/* WhatsApp Link */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#045494] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0573c1] transition"
            >
              Get in Touch
            </a>

            <Link
              href="/learn-more"
              className="bg-[#FA9200] border border-[#045494] text-[#045494] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#045494]/10 hover:font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image with bottom fade */}
        <div className="flex justify-center relative max-w-md w-full">
          <Image
            src="/images/hero.png" // your image here
            alt="Medical supplies"
            width={500}
            height={500}
            priority
            className="w-full h-auto relative"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

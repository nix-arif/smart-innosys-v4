"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 bg-white">
      {/* Text content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-[#045494] mb-8">About Us</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#045494] mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To empower healthcare providers with smart, effective, and
            patient-friendly solutions through advanced medical technologies,
            with a strong focus on innovation, reliability, and service
            excellence.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#045494] mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading healthcare technology partner in Malaysia and
            beyond, transforming lives through innovation, trusted
            collaboration, and cutting-edge laser treatments.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/img111.jpg" // Replace with your image path
          alt="About us medical technology"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default AboutUs;

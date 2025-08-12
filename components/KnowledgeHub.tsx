"use client";

import Link from "next/link";

const cards = [
  {
    title: "Health Insight",
    description:
      "Learn more about health conditions through easy-to-understand, expert-backed articles.",
    href: "/knowledge/health-insight",
  },
  {
    title: "Treatment Explainer",
    description:
      "Discover how our treatments work and why they are effective for your health needs.",
    href: "/knowledge/treatment-explainer",
  },
  {
    title: "Myth Vs Fact",
    description:
      "We debunk common health myths so you can make better, fact-based decisions.",
    href: "/knowledge/myth-vs-fact",
  },
];

const KnowledgeHub = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-[#045494] mb-12 text-center">
        Knowledge Hub
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {cards.map(({ title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="block rounded-lg border border-[#045494] p-8 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#eaf3f6]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#045494]">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;

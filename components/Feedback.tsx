"use client";

const feedbacks = [
  {
    text: "Perkhidmatan helpline sangat membantu dan responsif. Saya beri 5 bintang",
    name: "Siti",
  },
  {
    text: "Clear and helpful product explanation by the staff. I feel more confident to proceed!",
    name: "Maznizam",
  },
  {
    text: "Alhamdulillah, selepas menjalani prosedur EVLT, keadaan kaki saya jauh lebih baik berbanding sebelum rawatan.",
    name: "Haslinda",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L3.64 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.957z" />
  </svg>
);

const Feedback = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-[#045494] mb-12 text-center">
        Customer Feedback
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {feedbacks.map(({ text, name }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{text}"</p>
            <p className="text-[#045494] font-semibold text-right">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;

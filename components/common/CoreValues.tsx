import { useState } from "react";

const CoreValues = () => {
  // State to track which index is active
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Client Commitment",
      text: "We prioritize our clients’ needs, providing tailored security solutions, responsive support, and consistent communication to ensure your peace of mind and satisfaction at every stage.",
    },
    {
      title: "Integrity",
      text: "Our operations are guided by honesty, transparency, and accountability, ensuring every service we deliver meets the highest ethical and professional standards.",
    },
    {
      title: "Professionalism",
      text: "Our trained personnel and advanced systems uphold discipline, precision, and excellence in every service, reflecting the quality and reliability our clients expect.",
    },
    {
      title: "Vigilance",
      text: "We remain alert and proactive at all times, monitoring risks closely and responding swiftly to protect people, property, and assets effectively.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-3 sm:px-5 mt-4 sm:mt-6 gap-3 sm:gap-5">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2
            className="text-sec font-semibold text-lg sm:text-xl text-center"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {value.title}
          </h2>

          {/* Show content only if this index is active */}
          {activeIndex === index && (
            <div className="title-text text-sm sm:text-base mt-2 text-gray-700">
              <p>{value.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoreValues;

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does this posture connector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine. It helps you maintain proper posture throughout the day by preventing slouching and encouraging neutral alignment.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, it is designed to be adjustable and comfortable, making it suitable for both adults and teenagers of various body types.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "With consistent use, a posture corrector can improve posture, reduce back strain, and help relieve mild to moderate back pain.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some advanced models include vibration alerts that remind you when you start slouching.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "Simply subscribe with your email, and we will notify you instantly when it becomes available.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 space-y-6">
      {/* Title */}
      <h1 className="text-4xl text-center text-[#03373D] font-bold">
        Frequently Asked Question (FAQ)
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* FAQ Accordion */}
      <div className="space-y-3 mt-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center gap-3">
      {/* Main Button */}
      <button className="bg-lime-300 px-6 py-3 rounded-full text-black font-semibold">
        See More FAQ’s
      </button>

      {/* Icon Button */}
      <button className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
        <ArrowUpRight className="text-lime-300 w-5 h-5" />
      </button>
    
        
        

    </div>
    </div>
  );
};

export default Question;

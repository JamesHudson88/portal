import React, { useState } from "react";

const faqs = [
  {
    question: "What is Mobbin?",
    answer:
      "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more. Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."
  },
  { question: "How often do you update the library?", answer: "We update our library regularly to ensure fresh content." },
  { question: "Can I get a free trial?", answer: "Yes, we offer a free trial for new users." },
  { question: "Do you have a monthly plan?", answer: "Yes, we offer flexible monthly subscription options." },
  { question: "Do you have discounts for students and educators?", answer: "Yes, we offer special discounts for students and educators." },
  { question: "What forms of payment do you accept?", answer: "We accept major credit cards and PayPal." },
  { question: "Can I cancel my subscription?", answer: "Yes, you can cancel anytime from your account settings." },
  { question: "How do I switch from a Pro plan to a Team plan?", answer: "You can upgrade from the billing section in your account." },
  { question: "What is the difference between Enterprise plan and Team plan?", answer: "Enterprise plans include advanced features, higher limits, and priority support." },
  { question: "What is your refund policy?", answer: "We have a 14-day refund policy for eligible cases." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Ask Questions
      </h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

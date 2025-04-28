"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/footer";
import NavigationMenuSlider from "@/components/aboutmenu";
import Navbar from "@/components/header";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-blue-600">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-base text-gray-600 leading-relaxed pr-12">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your visiting hours?",
      answer:
        "Our general visiting hours are from 10:00 AM to 8:00 PM daily. Certain departments such as ICU and Maternity have specific visiting policies. Please check with the respective department or call our front desk for more information.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our appointment desk at (123) 456-7890, using our online patient portal, or through our mobile app. For urgent care, you can walk in during operating hours.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing department at (123) 456-7891 to verify if we accept your specific insurance plan.",
    },
    {
      question: "How do I access my medical records?",
      answer:
        "You can access your medical records through our patient portal. First-time users need to register online or in person at our medical records department. You can also request physical copies by completing a release form available at our front desk or on our website.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Please bring your photo ID, insurance card, list of current medications, referral forms (if required), and any relevant medical history or test results from outside providers. Arriving 15 minutes before your scheduled appointment is recommended.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, our Emergency Department is open 24/7 to handle all medical emergencies. For life-threatening situations, please call 911 immediately.",
    },
    {
      question: "How can I pay my hospital bill?",
      answer:
        "You can pay your bill online through our patient portal, by mail, over the phone, or in person at our billing office. We offer payment plans for those who qualify. For questions about your bill, please contact our billing department at (123) 456-7891.",
    },
  ];

  return (
    <>
      <Navbar />
      <NavigationMenuSlider />
      <section className="bg-white py-12 px-6 mb-8 ">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to the most common questions about our hospital
              services and policies.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-base text-gray-600">
              Can&lsquo;t find what you&lsquo;re looking for?
            </p>
            <button
              type="button"
              className="mt-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQSection;

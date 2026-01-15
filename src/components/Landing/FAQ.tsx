import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "Do I need technical skills?", a: "Not at all! Our tools are beginner-friendly and designed to be simple." },
  { q: "Can I manage multiple social accounts?", a: "Yes. Connect and manage multiple accounts from one dashboard." },
  { q: "Is the free plan really free?", a: "Yes. Our free plan gives essential tools with no hidden charges." },
  { q: "Does it support WhatsApp & SMS?", a: "Yes, you can send personalized bulk campaigns directly." }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-medium">{faq.q}</span>
                {open === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
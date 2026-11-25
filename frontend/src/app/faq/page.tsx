
const faqs = [
  {
    question: "How do I book a pet care service?",
    answer: "Browse our services, choose the service you need, select your pet and an available appointment slot, then confirm your booking.",
  },
  {
    question: "Can I register multiple pets?",
    answer: "Yes. Your account can contain multiple pet profiles, each with its own details and medical history.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer: "You can request cancellation or rescheduling according to the booking rules and service availability.",
  },
  {
    question: "How can I pay for a service?",
    answer: "Payments will be supported through the platform's secure payment checkout. Payment availability depends on the service.",
  },
  {
    question: "Can I view my pet's medical records?",
    answer: "Pet owners can view their pet's available visit records and medical history through their account.",
  },
  {
    question: "Does PawCare Hub provide emergency veterinary treatment?",
    answer: "PawCare Hub is a service booking platform, not an emergency response service. For urgent medical problems, contact a veterinarian or local emergency animal clinic directly.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex items-center justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/services" className="font-bold">Services</a>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#F26419]">
            Help Center
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-[#6B5148]">
            Find answers to common questions about PawCare Hub.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {faqs.map((faq, index) => (
            <details key={index} className="group rounded-2xl bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-bold">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-2xl text-[#F26419] group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-[#6B5148]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[#240702] px-6 py-8 text-center text-white">
        <p className="font-bold">PawCareHub.</p>
        <p className="mt-2 text-sm text-white/60">
          Caring for pets, connecting people.
        </p>
      </footer>
    </main>
  );
}

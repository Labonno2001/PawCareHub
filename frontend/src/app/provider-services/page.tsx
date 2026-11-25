"use client";

import { useState } from "react";

const initialServices = [
  { id: 1, name: "Pet Grooming", price: 1200, duration: "60 minutes", active: true },
  { id: 2, name: "Pet Bath & Spa", price: 800, duration: "40 minutes", active: true },
  { id: 3, name: "Pet Boarding", price: 1500, duration: "24 hours", active: false },
];

export default function ProviderServicesPage() {
  const [services, setServices] = useState(initialServices);

  function toggleService(id: number) {
    setServices((current) =>
      current.map((service) =>
        service.id === id
          ? { ...service, active: !service.active }
          : service
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/provider-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Manage Services 🛠️</h1>
        <p className="mt-3 text-[#6B5148]">
          Review your services and control their availability.
        </p>

        <div className="mt-8 space-y-5">
          {services.map((service) => (
            <article key={service.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-black">{service.name}</h2>
                <span className={`rounded-full px-4 py-2 text-sm font-bold ${
                  service.active ? "bg-[#C8E283]" : "bg-[#FAD4E8]"
                }`}>
                  {service.active ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[#6B5148]">
                <p><strong>Price:</strong> ৳{service.price}</p>
                <p><strong>Duration:</strong> {service.duration}</p>
              </div>

              <button
                onClick={() => toggleService(service.id)}
                className="mt-6 rounded-full bg-[#240702] px-5 py-3 font-bold text-white"
              >
                {service.active ? "Deactivate Service" : "Activate Service"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
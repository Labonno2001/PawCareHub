"use client";

import { useState } from "react";

const initialSlots = [
  { id: 1, day: "Monday", time: "09:00 AM - 10:00 AM", available: true },
  { id: 2, day: "Monday", time: "10:00 AM - 11:00 AM", available: false },
  { id: 3, day: "Tuesday", time: "01:00 PM - 02:00 PM", available: true },
  { id: 4, day: "Wednesday", time: "03:00 PM - 04:00 PM", available: true },
];

export default function ProviderAvailabilityPage() {
  const [slots, setSlots] = useState(initialSlots);

  function toggleSlot(id: number) {
    setSlots((current) =>
      current.map((slot) =>
        slot.id === id ? { ...slot, available: !slot.available } : slot
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

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Service Availability 🕒</h1>
        <p className="mt-3 text-[#6B5148]">
          Manage the time slots available for customer bookings.
        </p>

        <div className="mt-8 space-y-4">
          {slots.map((slot) => (
            <article
              key={slot.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm"
            >
              <div>
                <h2 className="text-xl font-black">{slot.day}</h2>
                <p className="mt-1 text-[#6B5148]">{slot.time}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`rounded-full px-4 py-2 text-sm font-bold ${
                  slot.available ? "bg-[#C8E283]" : "bg-[#FAD4E8]"
                }`}>
                  {slot.available ? "Available" : "Unavailable"}
                </span>

                <button
                  onClick={() => toggleSlot(slot.id)}
                  className="rounded-full bg-[#240702] px-5 py-2 text-sm font-bold text-white"
                >
                  Toggle
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
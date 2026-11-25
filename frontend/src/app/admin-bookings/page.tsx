"use client";

import { useState } from "react";

const initialBookings = [
  {
    id: 1,
    pet: "Max",
    owner: "John Smith",
    service: "Veterinary Checkup",
    provider: "Dr. Sarah Ahmed",
    date: "November 26, 2026",
    status: "Confirmed",
  },
  {
    id: 2,
    pet: "Luna",
    owner: "Emily Brown",
    service: "Pet Grooming",
    provider: "PawCare Grooming",
    date: "November 27, 2026",
    status: "Pending",
  },
  {
    id: 3,
    pet: "Coco",
    owner: "Michael Lee",
    service: "Pet Boarding",
    provider: "Happy Paws Center",
    date: "November 28, 2026",
    status: "Cancelled",
  },
];

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState(initialBookings);

  function updateStatus(id: number, status: string) {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/admin-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Booking Management 📋</h1>
        <p className="mt-3 text-[#6B5148]">
          Monitor bookings and review their current status.
        </p>

        <div className="mt-8 space-y-5">
          {bookings.map((booking) => (
            <article key={booking.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-black">{booking.pet}</h2>
                <span className="rounded-full bg-[#E6D7FF] px-4 py-2 text-sm font-bold">
                  {booking.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[#6B5148]">
                <p><strong>Owner:</strong> {booking.owner}</p>
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Provider:</strong> {booking.provider}</p>
                <p><strong>Date:</strong> {booking.date}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {booking.status !== "Confirmed" && (
                  <button
                    onClick={() => updateStatus(booking.id, "Confirmed")}
                    className="rounded-full bg-[#C8E283] px-5 py-2 font-bold"
                  >
                    Confirm
                  </button>
                )}

                {booking.status !== "Cancelled" && (
                  <button
                    onClick={() => updateStatus(booking.id, "Cancelled")}
                    className="rounded-full bg-[#FAD4E8] px-5 py-2 font-bold"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
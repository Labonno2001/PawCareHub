
"use client";

import { useState } from "react";

const initialAppointments = [
  { id: 1, pet: "Max", owner: "Sarah Ahmed", service: "General Checkup", date: "2026-12-02", time: "10:00 AM", status: "Pending" },
  { id: 2, pet: "Luna", owner: "Rahim Hasan", service: "Vaccination", date: "2026-12-03", time: "11:30 AM", status: "Confirmed" },
  { id: 3, pet: "Bella", owner: "Nadia Islam", service: "Health Consultation", date: "2026-12-04", time: "02:00 PM", status: "Confirmed" },
];

export default function VetAppointmentsPage() {
  const [appointments, setAppointments] = useState(initialAppointments);

  function updateStatus(id: number, status: string) {
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">PawCare<span className="text-[#F26419]">Hub.</span></a>
        <a href="/vet-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Patient Appointments 🩺</h1>
        <p className="mt-3 text-[#6B5148]">Review and manage appointment requests.</p>

        <div className="mt-9 space-y-5">
          {appointments.map((appointment) => (
            <article key={appointment.id} className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#F26419]">Appointment #{appointment.id}</p>
                  <h2 className="mt-2 text-2xl font-black">{appointment.pet}</h2>
                  <p className="mt-2 text-[#6B5148]">Owner: {appointment.owner}</p>
                  <p className="text-[#6B5148]">Service: {appointment.service}</p>
                  <p className="mt-2 font-semibold">{appointment.date} · {appointment.time}</p>
                </div>

                <span className={`h-fit rounded-full px-4 py-2 text-sm font-bold ${
                  appointment.status === "Confirmed" ? "bg-[#C8E283]" :
                  appointment.status === "Completed" ? "bg-[#E6D7FF]" :
                  appointment.status === "Declined" ? "bg-[#FAD4E8]" : "bg-[#FFBE6B]"
                }`}>
                  {appointment.status}
                </span>
              </div>

              {appointment.status === "Pending" && (
                <div className="mt-6 flex gap-3">
                  <button onClick={() => updateStatus(appointment.id, "Confirmed")}
                    className="rounded-full bg-[#C8E283] px-5 py-2 font-bold">
                    Confirm
                  </button>
                  <button onClick={() => updateStatus(appointment.id, "Declined")}
                    className="rounded-full bg-[#FAD4E8] px-5 py-2 font-bold">
                    Decline
                  </button>
                </div>
              )}

              {appointment.status === "Confirmed" && (
                <button onClick={() => updateStatus(appointment.id, "Completed")}
                  className="mt-6 rounded-full bg-[#240702] px-5 py-2 font-bold text-white">
                  Mark Completed
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

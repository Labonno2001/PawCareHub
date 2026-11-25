"use client";

import { useState } from "react";

export default function VetProfilePage() {
  const [name, setName] = useState("Dr. Sarah Ahmed");
  const [specialty, setSpecialty] = useState("Veterinary Medicine");
  const [experience, setExperience] = useState("5");
  const [bio, setBio] = useState(
    "Dedicated veterinarian passionate about animal health and wellbeing."
  );

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/vet-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-black">My Professional Profile 🩺</h1>
        <p className="mt-3 text-[#6B5148]">
          Manage your veterinarian information.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Profile updated in this demo.");
          }}
          className="mt-8 space-y-5 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block font-bold">Full Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-[#E6D7FF] p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Specialty</label>
            <input
              value={specialty}
              onChange={(event) => setSpecialty(event.target.value)}
              className="w-full rounded-xl border border-[#E6D7FF] p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Years of Experience</label>
            <input
              type="number"
              min="0"
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className="w-full rounded-xl border border-[#E6D7FF] p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Professional Bio</label>
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={4}
              className="w-full rounded-xl border border-[#E6D7FF] p-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-[#F26419] px-7 py-3 font-bold text-white"
          >
            Save Profile
          </button>
        </form>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function MyPetsPage() {
  const [pets, setPets] = useState([
    { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: "3 years" },
    { id: 2, name: "Luna", type: "Cat", breed: "Persian", age: "2 years" },
  ]);

  const [name, setName] = useState("");
  const [type, setType] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  function addPet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !breed.trim() || !age.trim()) return;

    setPets((current) => [
      ...current,
      { id: Date.now(), name, type, breed, age },
    ]);

    setName("");
    setBreed("");
    setAge("");
  }

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/services" className="text-sm font-bold">Services</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">My Pets 🐾</h1>
        <p className="mt-3 text-[#6B5148]">
          Keep your pets' information organized in one place.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pets.map((pet) => (
            <article key={pet.id} className="rounded-3xl bg-[#E6D7FF] p-7 shadow-sm">
              <div className="text-5xl">{pet.type === "Dog" ? "🐶" : "🐱"}</div>
              <h2 className="mt-4 text-2xl font-black">{pet.name}</h2>
              <p className="mt-2">Type: {pet.type}</p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <button
                onClick={() => setPets((current) => current.filter((item) => item.id !== pet.id))}
                className="mt-5 rounded-full bg-[#240702] px-5 py-2 text-sm font-bold text-white"
              >
                Remove Pet
              </button>
            </article>
          ))}
        </div>

        <form onSubmit={addPet} className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Add a New Pet</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Pet name" className="rounded-xl border p-3" />

            <select value={type} onChange={(e) => setType(e.target.value)}
              className="rounded-xl border p-3">
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Other</option>
            </select>

            <input required value={breed} onChange={(e) => setBreed(e.target.value)}
              placeholder="Breed" className="rounded-xl border p-3" />

            <input required value={age} onChange={(e) => setAge(e.target.value)}
              placeholder="Age (e.g. 2 years)" className="rounded-xl border p-3" />
          </div>

          <button type="submit"
            className="mt-6 rounded-full bg-[#F26419] px-7 py-3 font-bold text-white">
            + Add Pet
          </button>
        </form>
      </section>
    </main>
  );
}

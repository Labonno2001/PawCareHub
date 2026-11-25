const patients = [
  {
    id: 1,
    name: "Max",
    owner: "John Smith",
    species: "Dog",
    breed: "Golden Retriever",
    lastVisit: "November 12, 2026",
  },
  {
    id: 2,
    name: "Luna",
    owner: "Emily Brown",
    species: "Cat",
    breed: "Persian",
    lastVisit: "November 18, 2026",
  },
  {
    id: 3,
    name: "Coco",
    owner: "Michael Lee",
    species: "Dog",
    breed: "Poodle",
    lastVisit: "November 20, 2026",
  },
];

export default function VetPatientsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/vet-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">My Patients 🐾</h1>
        <p className="mt-3 text-[#6B5148]">
          View pets assigned to your veterinary care.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {patients.map((patient) => (
            <article
              key={patient.id}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">{patient.name}</h2>
                <span className="rounded-full bg-[#E6D7FF] px-3 py-1 text-sm font-bold">
                  {patient.species}
                </span>
              </div>

              <div className="mt-5 space-y-2 text-[#6B5148]">
                <p><strong>Owner:</strong> {patient.owner}</p>
                <p><strong>Breed:</strong> {patient.breed}</p>
                <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
              </div>

              <a
                href="/patient-records"
                className="mt-6 inline-block rounded-full bg-[#240702] px-5 py-3 font-bold text-white"
              >
                View Patient Records
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
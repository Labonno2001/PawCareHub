
const records = [
  {
    id: 1,
    pet: "Max",
    owner: "Sarah Ahmed",
    date: "2026-11-20",
    diagnosis: "Routine health examination",
    treatment: "General wellness advice",
    notes: "Follow-up checkup recommended.",
  },
  {
    id: 2,
    pet: "Luna",
    owner: "Rahim Hasan",
    date: "2026-11-22",
    diagnosis: "Vaccination visit",
    treatment: "Vaccination administered",
    notes: "Next vaccination according to veterinary schedule.",
  },
];

export default function PatientRecordsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/vet-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Patient Records 📋</h1>
        <p className="mt-3 text-[#6B5148]">
          Review veterinary visit records and clinical notes.
        </p>

        <div className="mt-9 space-y-6">
          {records.map((record) => (
            <article key={record.id} className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black">{record.pet}</h2>
                  <p className="mt-1 text-[#6B5148]">Owner: {record.owner}</p>
                </div>
                <span className="h-fit rounded-full bg-[#E6D7FF] px-4 py-2 text-sm font-bold">
                  {record.date}
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#FBFBE8] p-5">
                  <p className="text-sm font-bold text-[#F26419]">Diagnosis</p>
                  <p className="mt-2 font-semibold">{record.diagnosis}</p>
                </div>
                <div className="rounded-2xl bg-[#C8E283] p-5">
                  <p className="text-sm font-bold">Treatment</p>
                  <p className="mt-2 font-semibold">{record.treatment}</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-[#FAD4E8] p-5">
                <p className="font-bold">Clinical Notes</p>
                <p className="mt-2 text-sm leading-6">{record.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

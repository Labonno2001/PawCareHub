
const appointments = [
  { pet: "Max", owner: "Sarah Ahmed", service: "General Checkup", time: "10:00 AM", status: "Confirmed" },
  { pet: "Luna", owner: "Rahim Hasan", service: "Vaccination", time: "11:30 AM", status: "Pending" },
  { pet: "Bella", owner: "Nadia Islam", service: "Health Consultation", time: "02:00 PM", status: "Confirmed" },
];

export default function VetDashboard() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white md:px-12">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/login" className="rounded-full border border-white/40 px-5 py-2">
          Logout
        </a>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-3xl bg-[#240702] p-6 text-white">
          <div className="text-5xl">🩺</div>
          <h2 className="mt-4 text-xl font-black">Veterinarian</h2>
          <p className="mt-1 text-sm text-white/60">Professional Dashboard</p>
          <nav className="mt-8 space-y-3">
            <a href="/vet-dashboard" className="block rounded-xl bg-[#F26419] p-3 font-bold">Dashboard</a>
            <a href="/vet-appointments" className="block rounded-xl p-3 hover:bg-white/10">📅 Appointments</a>
            <a href="/patient-records" className="block rounded-xl p-3 hover:bg-white/10">📋 Patient Records</a>
            <a href="/vet-availability" className="block rounded-xl p-3 hover:bg-white/10">🕒 Availability</a>
            <a href="/" className="block rounded-xl p-3 hover:bg-white/10">🏠 Home</a>
          </nav>
        </aside>

        <section>
          <p className="font-bold uppercase tracking-widest text-[#F26419]">Veterinarian Panel</p>
          <h1 className="mt-2 text-4xl font-black">Welcome, Doctor! 👋</h1>
          <p className="mt-3 text-[#6B5148]">Manage appointments and patient care activities.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["3", "Today's Appointments", "bg-[#E6D7FF]"],
              ["2", "Confirmed", "bg-[#C8E283]"],
              ["1", "Pending", "bg-[#FFBE6B]"],
            ].map(([value, label, color]) => (
              <div key={label} className={`${color} rounded-3xl p-6`}>
                <p className="text-4xl font-black">{value}</p>
                <p className="mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>

          <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">Today's Appointments</h2>
            <div className="mt-6 space-y-4">
              {appointments.map((appointment) => (
                <article key={appointment.pet} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#FBFBE8] p-5">
                  <div>
                    <h3 className="font-black">{appointment.pet}</h3>
                    <p className="text-sm text-[#6B5148]">Owner: {appointment.owner}</p>
                    <p className="text-sm text-[#6B5148]">{appointment.service}</p>
                    <p className="mt-1 text-sm font-bold">{appointment.time}</p>
                  </div>
                  <span className="rounded-full bg-[#C8E283] px-4 py-2 text-sm font-bold">
                    {appointment.status}
                  </span>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}


const bookings = [
  { id: "PCH-101", pet: "Max", service: "Pet Grooming", date: "Dec 02, 2026", time: "10:00 AM", status: "Confirmed" },
  { id: "PCH-102", pet: "Luna", service: "Pet Boarding", date: "Dec 03, 2026", time: "09:00 AM", status: "Pending" },
  { id: "PCH-103", pet: "Bella", service: "Pet Grooming", date: "Dec 04, 2026", time: "02:00 PM", status: "Confirmed" },
];

export default function ProviderDashboard() {
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
          <div className="text-5xl">🏡</div>
          <h2 className="mt-4 text-xl font-black">Service Provider</h2>
          <p className="mt-1 text-sm text-white/60">Provider Dashboard</p>
          <nav className="mt-8 space-y-3">
            <a href="/provider-dashboard" className="block rounded-xl bg-[#F26419] p-3 font-bold">Dashboard</a>
            <a href="/provider-bookings" className="block rounded-xl p-3 hover:bg-white/10">📅 Bookings</a>
            <a href="/provider-services" className="block rounded-xl p-3 hover:bg-white/10">🛠️ My Services</a>
            <a href="/provider-availability" className="block rounded-xl p-3 hover:bg-white/10">🕒 Availability</a>
            <a href="/" className="block rounded-xl p-3 hover:bg-white/10">🏠 Home</a>
          </nav>
        </aside>

        <section>
          <p className="font-bold uppercase tracking-widest text-[#F26419]">Provider Panel</p>
          <h1 className="mt-2 text-4xl font-black">Welcome, Provider! 👋</h1>
          <p className="mt-3 text-[#6B5148]">Manage your services, bookings, and availability.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["3", "Total Bookings", "bg-[#E6D7FF]"],
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
            <h2 className="text-2xl font-black">Recent Bookings</h2>
            <div className="mt-6 space-y-4">
              {bookings.map((booking) => (
                <article key={booking.id} className="rounded-2xl bg-[#FBFBE8] p-5">
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[#F26419]">{booking.id}</p>
                      <h3 className="mt-1 text-lg font-black">{booking.service}</h3>
                      <p className="text-sm text-[#6B5148]">Pet: {booking.pet}</p>
                      <p className="text-sm text-[#6B5148]">{booking.date} · {booking.time}</p>
                    </div>
                    <span className="h-fit rounded-full bg-[#C8E283] px-4 py-2 text-sm font-bold">
                      {booking.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

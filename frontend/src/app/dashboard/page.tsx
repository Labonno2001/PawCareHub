
const stats = [
  { label: "My Pets", value: "2", icon: "🐾", color: "bg-[#E6D7FF]", link: "/pets" },
  { label: "Total Bookings", value: "2", icon: "📅", color: "bg-[#C8E283]", link: "/bookings" },
  { label: "Upcoming Visits", value: "1", icon: "🩺", color: "bg-[#FFBE6B]", link: "/bookings" },
  { label: "Completed Visits", value: "0", icon: "❤️", color: "bg-[#FAD4E8]", link: "/bookings" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex items-center justify-between bg-[#240702] px-6 py-5 text-white md:px-12">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/login" className="rounded-full border border-white/40 px-5 py-2 text-sm">
          Logout
        </a>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-3xl bg-[#240702] p-6 text-white">
          <div className="text-5xl">👤</div>
          <h2 className="mt-4 text-xl font-black">Pet Owner</h2>
          <p className="mt-1 text-sm text-white/60">Welcome to PawCare Hub</p>

          <nav className="mt-8 space-y-3">
            <a href="/dashboard" className="block rounded-xl bg-[#F26419] p-3 font-bold">Dashboard</a>
            <a href="/pets" className="block rounded-xl p-3 hover:bg-white/10">🐾 My Pets</a>
            <a href="/bookings" className="block rounded-xl p-3 hover:bg-white/10">📅 My Bookings</a>
            <a href="/services" className="block rounded-xl p-3 hover:bg-white/10">🩺 Browse Services</a>
            <a href="/faq" className="block rounded-xl p-3 hover:bg-white/10">❓ Help & FAQ</a>
            <a href="/" className="block rounded-xl p-3 hover:bg-white/10">🏠 Home</a>
          </nav>
        </aside>

        <section>
          <div>
            <p className="font-bold uppercase tracking-widest text-[#F26419]">Owner Dashboard</p>
            <h1 className="mt-2 text-4xl font-black">Welcome Back! 👋</h1>
            <p className="mt-3 text-[#6B5148]">
              Here's an overview of your pet care activities.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <a key={stat.label} href={stat.link}
                className={`${stat.color} rounded-3xl p-6 shadow-sm transition hover:-translate-y-1`}>
                <div className="text-4xl">{stat.icon}</div>
                <p className="mt-5 text-3xl font-black">{stat.value}</p>
                <p className="mt-1 font-semibold">{stat.label}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black">Quick Actions</h2>
              <div className="mt-5 space-y-3">
                <a href="/services" className="block rounded-xl bg-[#F26419] p-4 font-bold text-white">
                  + Book a Service
                </a>
                <a href="/pets" className="block rounded-xl bg-[#E6D7FF] p-4 font-bold">
                  + Add a Pet
                </a>
                <a href="/bookings" className="block rounded-xl bg-[#C8E283] p-4 font-bold">
                  View My Bookings →
                </a>
              </div>
            </article>

            <article className="rounded-3xl bg-[#FAD4E8] p-7">
              <h2 className="text-xl font-black">Pet Care Reminder 💗</h2>
              <p className="mt-4 leading-7">
                Regular veterinary checkups, proper grooming, and timely care
                can help support your pet's wellbeing.
              </p>
              <a href="/services" className="mt-5 inline-block font-bold underline">
                Explore available services →
              </a>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

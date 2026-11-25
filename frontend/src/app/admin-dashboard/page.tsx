
const stats = [
  { label: "Total Users", value: "120", icon: "👥", color: "bg-[#E6D7FF]" },
  { label: "Total Bookings", value: "85", icon: "📅", color: "bg-[#C8E283]" },
  { label: "Active Services", value: "18", icon: "🩺", color: "bg-[#FFBE6B]" },
  { label: "Pending Approvals", value: "6", icon: "⏳", color: "bg-[#FAD4E8]" },
];

const activities = [
  { action: "New user registered", detail: "New pet owner account", time: "Recently" },
  { action: "New booking created", detail: "Veterinary Care", time: "Recently" },
  { action: "Provider approval requested", detail: "Service provider application", time: "Recently" },
];

export default function AdminDashboard() {
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
          <div className="text-5xl">⚙️</div>
          <h2 className="mt-4 text-xl font-black">Administrator</h2>
          <p className="mt-1 text-sm text-white/60">System Management</p>

          <nav className="mt-8 space-y-3">
            <a href="/admin-dashboard" className="block rounded-xl bg-[#F26419] p-3 font-bold">Dashboard</a>
            <a href="/admin-users" className="block rounded-xl p-3 hover:bg-white/10">👥 Manage Users</a>
            <a href="/admin-approvals" className="block rounded-xl p-3 hover:bg-white/10">✅ Approvals</a>
            <a href="/admin-bookings" className="block rounded-xl p-3 hover:bg-white/10">📅 Bookings</a>
            <a href="/admin-payments" className="block rounded-xl p-3 hover:bg-white/10">💳 Payments</a>
            <a href="/admin-reviews" className="block rounded-xl p-3 hover:bg-white/10">⭐ Reviews</a>
            <a href="/admin-analytics" className="block rounded-xl p-3 hover:bg-white/10">📊 Analytics</a>
            <a href="/" className="block rounded-xl p-3 hover:bg-white/10">🏠 Home</a>
          </nav>
        </aside>

        <section>
          <p className="font-bold uppercase tracking-widest text-[#F26419]">Administration</p>
          <h1 className="mt-2 text-4xl font-black">System Overview ⚙️</h1>
          <p className="mt-3 text-[#6B5148]">Monitor and manage the PawCare Hub platform.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className={`${stat.color} rounded-3xl p-6`}>
                <div className="text-4xl">{stat.icon}</div>
                <p className="mt-5 text-3xl font-black">{stat.value}</p>
                <p className="mt-1 font-semibold">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black">Management</h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Manage Users", "/admin-users"],
                  ["Review Approvals", "/admin-approvals"],
                  ["Manage Bookings", "/admin-bookings"],
                  ["View Payments", "/admin-payments"],
                  ["Manage Reviews", "/admin-reviews"],
                  ["View Analytics", "/admin-analytics"],
                ].map(([label, link]) => (
                  <a key={link} href={link}
                    className="block rounded-xl bg-[#FBFBE8] p-4 font-bold hover:bg-[#E6D7FF]">
                    {label} →
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black">Recent Activity</h2>
              <div className="mt-5 space-y-5">
                {activities.map((activity) => (
                  <div key={activity.action} className="border-b border-gray-100 pb-4">
                    <h3 className="font-bold">{activity.action}</h3>
                    <p className="mt-1 text-sm text-[#6B5148]">{activity.detail}</p>
                    <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

const monthlyBookings = [
  { month: "June", bookings: 35 },
  { month: "July", bookings: 48 },
  { month: "August", bookings: 42 },
  { month: "September", bookings: 65 },
  { month: "October", bookings: 78 },
  { month: "November", bookings: 90 },
];

const services = [
  { name: "Veterinary Care", percentage: 45 },
  { name: "Grooming", percentage: 30 },
  { name: "Boarding", percentage: 25 },
];

export default function AdminAnalyticsPage() {
  const maxBookings = Math.max(...monthlyBookings.map((item) => item.bookings));

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/admin-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Platform Analytics 📊</h1>
        <p className="mt-3 text-[#6B5148]">
          Overview of platform activity and service performance.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-[#C8E283] p-6">
            <p className="font-bold">Total Bookings</p>
            <p className="mt-2 text-3xl font-black">358</p>
          </div>

          <div className="rounded-3xl bg-[#E6D7FF] p-6">
            <p className="font-bold">Registered Users</p>
            <p className="mt-2 text-3xl font-black">124</p>
          </div>

          <div className="rounded-3xl bg-[#FAD4E8] p-6">
            <p className="font-bold">Total Revenue</p>
            <p className="mt-2 text-3xl font-black">৳85,400</p>
          </div>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Monthly Bookings</h2>

          <div className="mt-7 space-y-5">
            {monthlyBookings.map((item) => (
              <div key={item.month}>
                <div className="mb-2 flex justify-between font-bold">
                  <span>{item.month}</span>
                  <span>{item.bookings}</span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-[#F3EDE6]">
                  <div
                    className="h-full rounded-full bg-[#F26419]"
                    style={{
                      width: `${(item.bookings / maxBookings) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Bookings by Service</h2>

          <div className="mt-6 space-y-5">
            {services.map((service) => (
              <div key={service.name}>
                <div className="mb-2 flex justify-between font-bold">
                  <span>{service.name}</span>
                  <span>{service.percentage}%</span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-[#F3EDE6]">
                  <div
                    className="h-full rounded-full bg-[#310E68]"
                    style={{ width: `${service.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
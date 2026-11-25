
const bookings = [
  {
    id: "PCH-001",
    service: "Veterinary Care",
    pet: "Max",
    date: "2026-12-02",
    time: "10:00 AM",
    status: "Confirmed",
    color: "bg-[#C8E283]",
  },
  {
    id: "PCH-002",
    service: "Pet Grooming",
    pet: "Luna",
    date: "2026-12-05",
    time: "02:00 PM",
    status: "Pending",
    color: "bg-[#FFBE6B]",
  },
];

export default function BookingsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/services" className="font-bold">Services</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">My Bookings 📅</h1>
        <p className="mt-3 text-[#6B5148]">
          View and manage your pet care appointments.
        </p>

        <a href="/services"
          className="mt-7 inline-block rounded-full bg-[#F26419] px-6 py-3 font-bold text-white">
          + Book a Service
        </a>

        <div className="mt-10 space-y-5">
          {bookings.map((booking) => (
            <article key={booking.id} className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#F26419]">{booking.id}</p>
                  <h2 className="mt-2 text-2xl font-black">{booking.service}</h2>
                  <p className="mt-2 text-[#6B5148]">Pet: {booking.pet}</p>
                  <p className="mt-1 text-[#6B5148]">Date: {booking.date}</p>
                  <p className="mt-1 text-[#6B5148]">Time: {booking.time}</p>
                </div>

                <span className={`${booking.color} rounded-full px-4 py-2 text-sm font-bold`}>
                  {booking.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


const services = [
  {
    icon: "🩺",
    name: "Veterinary Care",
    description: "Health checkups, consultations, and professional veterinary care.",
    price: "Price set by provider",
    color: "bg-[#E6D7FF]",
  },
  {
    icon: "✂️",
    name: "Pet Grooming",
    description: "Bathing, brushing, nail trimming, and coat care.",
    price: "Price set by provider",
    color: "bg-[#FAD4E8]",
  },
  {
    icon: "🏡",
    name: "Pet Boarding",
    description: "Safe accommodation and attentive care while you're away.",
    price: "Price set by provider",
    color: "bg-[#C8E283]",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex items-center justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/login" className="rounded-full bg-[#F26419] px-5 py-2 font-bold">
          Login
        </a>
      </header>

      <section className="px-6 py-16 text-center">
        <p className="font-bold uppercase tracking-widest text-[#F26419]">
          Explore PawCare Hub
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Our Pet Care Services
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[#6B5148]">
          Discover services designed to keep your beloved pets healthy,
          comfortable, and happy.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 pb-20 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className={`${service.color} rounded-3xl p-8 shadow-sm`}
          >
            <div className="text-6xl">{service.icon}</div>
            <h2 className="mt-6 text-2xl font-black">{service.name}</h2>
            <p className="mt-4 min-h-16 leading-7 text-[#513B32]">
              {service.description}
            </p>
            <p className="mt-5 font-bold">{service.price}</p>
            <a
              href="/login"
              className="mt-7 inline-block rounded-full bg-[#240702] px-6 py-3 font-bold text-white hover:bg-[#310E68]"
            >
              Login to Book →
            </a>
          </article>
        ))}
      </section>

      <footer className="bg-[#240702] px-6 py-8 text-center text-white">
        <p className="font-bold">PawCareHub.</p>
        <p className="mt-2 text-sm text-white/60">
          Caring for pets, connecting people.
        </p>
      </footer>
    </main>
  );
}


const services = [
  {
    icon: "🩺",
    name: "Veterinary Care",
    description: "Professional health checkups and medical care for your pets.",
    color: "bg-[#E6D7FF]",
  },
  {
    icon: "✂️",
    name: "Grooming",
    description: "Keep your furry friends clean, comfortable, and happy.",
    color: "bg-[#FAD4E8]",
  },
  {
    icon: "🏡",
    name: "Pet Boarding",
    description: "A safe and caring place for your pets while you're away.",
    color: "bg-[#C8E283]",
  },
  {
    icon: "🐾",
    name: "Pet Wellness",
    description: "Routine care and guidance for a healthier pet life.",
    color: "bg-[#FFBE6B]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex items-center justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#home" className="hover:text-[#FFBE6B]">Home</a>
          <a href="#services" className="hover:text-[#FFBE6B]">Services</a>
          <a href="#about" className="hover:text-[#FFBE6B]">About</a>
          <a href="#contact" className="hover:text-[#FFBE6B]">Contact</a>
        </nav>

        <div className="flex gap-3">
          <a href="/login" className="rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white/10">
            Login
          </a>
          <a href="/register" className="rounded-full bg-[#F26419] px-5 py-2 text-sm font-bold text-white hover:bg-[#d94e0b]">
            Sign Up
          </a>
        </div>
      </header>

      <section id="home" className="grid items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
        <div>
          <span className="inline-block rounded-full bg-[#E6D7FF] px-4 py-2 text-sm font-bold text-[#310E68]">
            ❤️ Care that feels like family
          </span>

          <h1 className="mt-7 max-w-xl text-5xl font-black leading-tight md:text-6xl">
            Everything Your Pet Needs, <span className="text-[#F26419]">All in One Place.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6B5148]">
            Discover trusted veterinary care, grooming, and boarding services.
            Give your beloved companions the care they deserve.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/services" className="rounded-full bg-[#F26419] px-7 py-4 font-bold text-white shadow-lg hover:bg-[#d94e0b]">
              Explore Services →
            </a>
            <a href="#about" className="rounded-full border-2 border-[#240702] px-7 py-4 font-bold hover:bg-[#240702] hover:text-white">
              Learn More
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-black">Trusted</p>
              <p className="mt-1 text-sm text-[#6B5148]">Pet care platform</p>
            </div>
            <div>
              <p className="text-3xl font-black">All-in-one</p>
              <p className="mt-1 text-sm text-[#6B5148]">Booking experience</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2.5rem] bg-[#FFA364] p-8 md:p-12">
          <div className="absolute -right-4 -top-5 rounded-2xl bg-[#C8E283] p-4 text-3xl shadow-lg">
            🐾
          </div>
          <div className="rounded-[2rem] bg-[#FBFBE8] p-8 text-center shadow-xl md:p-12">
            <div className="text-8xl">🐶</div>
            <h2 className="mt-6 text-3xl font-black">Happy Pets, Happy Hearts</h2>
            <p className="mt-4 leading-7 text-[#6B5148]">
              One convenient place to discover and book the services your pet needs.
            </p>
            <div className="mt-7 rounded-2xl bg-[#FAD4E8] p-4 font-semibold">
              🐱 Because every pet deserves love.
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-[#F26419]">Our Services</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Care for Every Paw</h2>
          <p className="mt-4 text-[#6B5148]">
            Explore the services designed to keep your pets healthy and happy.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.name} className={`${service.color} rounded-3xl p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}>
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-6 text-xl font-extrabold">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#513B32]">{service.description}</p>
              <a href="/services" className="mt-6 inline-block font-bold text-[#240702]">
                Explore →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#310E68] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFBE6B]">About PawCare Hub</p>
          <h2 className="mt-4 text-4xl font-black">Your Pet's Care Journey Starts Here.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            PawCare Hub brings pet owners and pet care professionals together
            through a convenient platform for discovering services and managing bookings.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-[#240702] px-6 py-10 text-center text-white md:px-16">
        <p className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </p>
        <p className="mt-3 text-sm text-white/60">
          Caring for pets, connecting people.
        </p>
        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} PawCare Hub. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

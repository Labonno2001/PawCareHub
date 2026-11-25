
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex items-center justify-between bg-[#240702] px-6 py-5 text-white md:px-16">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/services" className="font-bold">Services</a>
      </header>

      <section className="px-6 py-20 text-center">
        <p className="font-bold uppercase tracking-widest text-[#F26419]">
          About Us
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-6xl">
          Bringing Pet Owners and Care Professionals Together.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6B5148]">
          PawCare Hub is a pet services booking and management platform
          designed to make finding and managing pet care services easier.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-3xl bg-[#E6D7FF] p-8">
          <div className="text-5xl">🎯</div>
          <h2 className="mt-5 text-2xl font-black">Our Mission</h2>
          <p className="mt-4 leading-7 text-[#513B32]">
            To connect pet owners with veterinary, grooming, and boarding
            services through a convenient and organized platform.
          </p>
        </article>

        <article className="rounded-3xl bg-[#C8E283] p-8">
          <div className="text-5xl">💚</div>
          <h2 className="mt-5 text-2xl font-black">Our Vision</h2>
          <p className="mt-4 leading-7 text-[#513B32]">
            To make pet care service discovery and booking more accessible,
            transparent, and manageable.
          </p>
        </article>
      </section>

      <section className="bg-[#310E68] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-black">One Platform. Multiple Pet Care Needs.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
          Discover services, manage pet profiles, arrange appointments,
          and keep track of your pet care activities.
        </p>
        <a href="/services"
          className="mt-8 inline-block rounded-full bg-[#F26419] px-7 py-3 font-bold text-white">
          Explore Services →
        </a>
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

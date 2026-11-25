
export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBFBE8] px-6 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <a href="/" className="text-2xl font-black text-[#240702]">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>

        <h1 className="mt-8 text-3xl font-black text-[#240702]">
          Create Your Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Join PawCare Hub and give your pet the care they deserve.
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold">Full Name</label>
            <input id="name" type="text" required placeholder="Your full name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold">Email Address</label>
            <input id="email" type="email" required placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]" />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-bold">Phone Number</label>
            <input id="phone" type="tel" required placeholder="Your phone number"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-bold">Password</label>
            <input id="password" type="password" required minLength={8}
              placeholder="At least 8 characters"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]" />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-bold">Confirm Password</label>
            <input id="confirmPassword" type="password" required minLength={8}
              placeholder="Enter your password again"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]" />
          </div>

          <button type="submit"
            className="w-full rounded-xl bg-[#F26419] py-3 font-bold text-white hover:bg-[#d94e0b]">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-bold text-[#F26419]">Login</a>
        </p>

        <a href="/" className="mt-5 block text-center text-sm text-gray-500">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

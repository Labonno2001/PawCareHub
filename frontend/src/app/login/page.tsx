
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBFBE8] px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <a href="/" className="text-2xl font-black text-[#240702]">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>

        <h1 className="mt-8 text-3xl font-black text-[#240702]">
          Welcome Back!
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign in to continue caring for your pet.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#F26419]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#F26419] py-3 font-bold text-white hover:bg-[#d94e0b]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="font-bold text-[#F26419]">
            Sign up
          </a>
        </p>

        <a href="/" className="mt-6 block text-center text-sm text-gray-500">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

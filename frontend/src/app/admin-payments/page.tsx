"use client";

const payments = [
  {
    id: "PAY-1001",
    customer: "John Smith",
    service: "Veterinary Checkup",
    amount: 1500,
    method: "Card",
    status: "Paid",
    date: "November 24, 2026",
  },
  {
    id: "PAY-1002",
    customer: "Emily Brown",
    service: "Pet Grooming",
    amount: 1200,
    method: "Mobile Banking",
    status: "Pending",
    date: "November 24, 2026",
  },
  {
    id: "PAY-1003",
    customer: "Michael Lee",
    service: "Pet Boarding",
    amount: 3000,
    method: "Card",
    status: "Failed",
    date: "November 23, 2026",
  },
];

export default function AdminPaymentsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/admin-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">Payment Management 💳</h1>
        <p className="mt-3 text-[#6B5148]">
          Review payment records and transaction statuses.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-[#C8E283] p-5">
            <p className="font-bold">Total Transactions</p>
            <p className="mt-2 text-3xl font-black">{payments.length}</p>
          </div>

          <div className="rounded-3xl bg-[#E6D7FF] p-5">
            <p className="font-bold">Successful Payments</p>
            <p className="mt-2 text-3xl font-black">
              {payments.filter((payment) => payment.status === "Paid").length}
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAD4E8] p-5">
            <p className="font-bold">Failed Payments</p>
            <p className="mt-2 text-3xl font-black">
              {payments.filter((payment) => payment.status === "Failed").length}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {payments.map((payment) => (
            <article key={payment.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-black">{payment.id}</h2>
                <span className={`rounded-full px-4 py-2 text-sm font-bold ${
                  payment.status === "Paid"
                    ? "bg-[#C8E283]"
                    : payment.status === "Failed"
                    ? "bg-[#FAD4E8]"
                    : "bg-[#FFBE6B]"
                }`}>
                  {payment.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[#6B5148]">
                <p><strong>Customer:</strong> {payment.customer}</p>
                <p><strong>Service:</strong> {payment.service}</p>
                <p><strong>Amount:</strong> ৳{payment.amount}</p>
                <p><strong>Method:</strong> {payment.method}</p>
                <p><strong>Date:</strong> {payment.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
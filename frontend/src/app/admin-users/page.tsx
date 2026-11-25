"use client";

import { useState } from "react";

const initialUsers = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Pet Owner", active: true },
  { id: 2, name: "Dr. Sarah Ahmed", email: "sarah@example.com", role: "Veterinarian", active: true },
  { id: 3, name: "Emily Brown", email: "emily@example.com", role: "Pet Owner", active: false },
  { id: 4, name: "Michael Lee", email: "michael@example.com", role: "Service Provider", active: true },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);

  function toggleUser(id: number) {
    setUsers((current) =>
      current.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBE8] text-[#240702]">
      <header className="flex justify-between bg-[#240702] px-6 py-5 text-white">
        <a href="/" className="text-2xl font-black">
          PawCare<span className="text-[#F26419]">Hub.</span>
        </a>
        <a href="/admin-dashboard" className="font-bold">Dashboard</a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">User Management 👥</h1>
        <p className="mt-3 text-[#6B5148]">
          Review user accounts and manage their access.
        </p>

        <div className="mt-8 space-y-4">
          {users.map((user) => (
            <article key={user.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black">{user.name}</h2>
                  <p className="mt-1 text-[#6B5148]">{user.email}</p>
                  <p className="mt-2 text-sm font-bold">{user.role}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-4 py-2 text-sm font-bold ${
                    user.active ? "bg-[#C8E283]" : "bg-[#FAD4E8]"
                  }`}>
                    {user.active ? "Active" : "Suspended"}
                  </span>

                  <button
                    onClick={() => toggleUser(user.id)}
                    className="rounded-full bg-[#240702] px-5 py-2 text-sm font-bold text-white"
                  >
                    {user.active ? "Suspend" : "Activate"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
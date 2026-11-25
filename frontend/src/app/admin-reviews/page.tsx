"use client";

import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    customer: "John Smith",
    service: "Veterinary Checkup",
    rating: 5,
    comment: "Excellent care. The veterinarian was very kind and professional.",
    visible: true,
  },
  {
    id: 2,
    customer: "Emily Brown",
    service: "Pet Grooming",
    rating: 4,
    comment: "Good grooming service. My cat looks wonderful.",
    visible: true,
  },
  {
    id: 3,
    customer: "Michael Lee",
    service: "Pet Boarding",
    rating: 2,
    comment: "The booking experience needs improvement.",
    visible: false,
  },
];

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);

  function toggleVisibility(id: number) {
    setReviews((current) =>
      current.map((review) =>
        review.id === id
          ? { ...review, visible: !review.visible }
          : review
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
        <h1 className="text-4xl font-black">Review Management ⭐</h1>
        <p className="mt-3 text-[#6B5148]">
          Review customer feedback and manage its visibility.
        </p>

        <div className="mt-8 space-y-5">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-black">{review.customer}</h2>
                <span className={`rounded-full px-4 py-2 text-sm font-bold ${
                  review.visible ? "bg-[#C8E283]" : "bg-[#FAD4E8]"
                }`}>
                  {review.visible ? "Visible" : "Hidden"}
                </span>
              </div>

              <p className="mt-3 font-bold">{review.service}</p>
              <p className="mt-2 text-[#F26419]">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="mt-3 text-[#6B5148]">{review.comment}</p>

              <button
                onClick={() => toggleVisibility(review.id)}
                className="mt-6 rounded-full bg-[#240702] px-5 py-3 font-bold text-white"
              >
                {review.visible ? "Hide Review" : "Show Review"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
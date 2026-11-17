
"use client";

import { useState } from "react";
import { places } from "@/data/places";
import PlaceCard from "@/components/PlaceCard";

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Heritage & History",
    "Culture & Local Life",
    "Nature & Coastal",
  ];

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      place.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-12 md:px-12">

      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#183B4E]">
          Explore Mangaluru
        </h1>

        <p className="mt-3 text-[#292C29]">
          Discover places, stories and hidden gems of Mangaluru.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-10">

        <input
          type="text"
          placeholder="Search places by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-[#D9BE91] bg-white px-4 py-3 text-[#292C29] outline-none focus:border-[#477D78]"
        />

        <div className="mt-5">
          <label className="block mb-2 font-medium text-[#183B4E]">
            Filter by Category
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-md border border-[#D9BE91] bg-white px-4 py-3 text-[#292C29] outline-none focus:border-[#477D78]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

      </section>

      <section>

        <p className="mb-6 text-[#477D78]">
          Showing {filteredPlaces.length} places
        </p>

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg font-medium text-[#183B4E]">
              No places found.
            </p>

            <p className="mt-2 text-[#477D78]">
              Try searching with a different name or category.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}

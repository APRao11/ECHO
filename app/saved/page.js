  
"use client";

import Link from "next/link";
import PlaceCard from "../../components/PlaceCard";
import { useSavedPlaces } from "../../context/SavedPlacesContext";

export default function SavedPage() {
  const { savedPlaces } = useSavedPlaces();

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-[#183B4E] mb-3">
          Saved Places
        </h1>

        <p className="text-[#477D78] mb-8">
          Your favourite places in Mangaluru, all in one place.
        </p>

        {savedPlaces.length === 0 ? (
          <div className="text-center py-16 border border-[#D9BE91] rounded-lg">
            <h2 className="text-xl font-semibold text-[#183B4E] mb-3">
              No saved places yet
            </h2>

            <p className="text-[#477D78] mb-6">
              Explore Mangaluru and save the places you would like to visit.
            </p>

            <Link
              href="/explore"
              className="inline-block bg-[#244C50] text-[#F7F3EA] px-5 py-2 rounded-md hover:bg-[#477D78]"
            >
              Explore Places
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
  
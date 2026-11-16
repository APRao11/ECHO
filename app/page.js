
import Link from "next/link";
import { places } from "@/data/places";
import PlaceCard from "@/components/PlaceCard";

export default function Home() {
  const featuredPlaces = places.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F3EA]">

      <section className="bg-[#183B4E] px-6 py-20 text-center text-[#F7F3EA]">

        <h1 className="text-4xl font-bold md:text-6xl">
          Discover Mangaluru
        </h1>

   <p className="mt-5 font-serif text-2xl md:text-3xl tracking-wide text-[#F8F5EE]">
  Every place has a story.
</p>

<p className="mx-auto mt-4 max-w-2xl font-sans text-base md:text-lg leading-8 tracking-wide text-[#F8F5EE]/90">
  Explore the history, culture and coastal beauty of Mangaluru.
  Discover places beyond the usual tourist checklist.
</p>

<Link
  href="/explore"
  className="mt-8 inline-block rounded-md bg-[#D9BE91] px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-[#292C29] transition-colors duration-300 hover:bg-[#A6533C] hover:text-white"
>
  Explore Places
</Link>

      </section>

      <section className="px-6 py-14 md:px-12">

        <h2 className="text-center text-3xl font-semibold text-[#183B4E]">
          Discover Local Stories
        </h2>

        <p className="mt-3 text-center text-[#292C29]">
          Start exploring some of Mangaluru's interesting places.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}

        </div>

        <div className="mt-10 text-center">
          <Link
            href="/explore"
            className="font-semibold text-[#A6533C] hover:underline"
          >
            View all places →
          </Link>
        </div>

      </section>


    </main>
  );
}

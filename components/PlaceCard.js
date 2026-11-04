
import Link from "next/link";

export default function PlaceCard({ place }) {
  return (
    <div className="bg-[#F8F5EE] rounded-xl overflow-hidden shadow-md">

      <div className="bg-[#153653] h-40 flex items-center justify-center">
        <span className="text-5xl">📍</span>
      </div>

      <div className="p-5">

        <p className="text-sm font-semibold text-[#2F796C]">
          {place.category}
        </p>

        <h2 className="text-2xl font-bold text-[#153653] mt-2">
          {place.name}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {place.location}, Dakshina Kannada
        </p>

        <p className="text-gray-700 mt-4">
          {place.description}
        </p>

        <Link
          href={`/places/${place.id}`}
          className="inline-block mt-5 text-[#2F796C] font-semibold"
        >
          Explore more →
        </Link>

      </div>
    </div>
  );
}

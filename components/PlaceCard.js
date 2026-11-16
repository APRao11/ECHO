
export default function PlaceCard({ place }) {
  return (
    <div className="bg-[#F7F3EA] rounded-lg overflow-hidden border border-[#D9BE91]">
      <div className="h-48 bg-[#477D78]"></div>

      <div className="p-4">
        <p className="text-sm text-[#A6533C] mb-2">
          {place.category}
        </p>

        <h2 className="text-xl font-semibold text-[#183B4E] mb-1">
          {place.name}
        </h2>

        <p className="text-sm text-[#477D78] mb-3">
          {place.location}
        </p>

        <p className="text-sm text-[#292C29] leading-relaxed">
          {place.description}
        </p>
      </div>
    </div>
  );
}

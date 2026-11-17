
"use client";

export default function PlaceDetailsModal({ place, onClose }) {
  if (!place) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F3EA] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-[#183B4E] mt-4">
          {place.name}
        </h2>

        <p className="text-[#477D78] mt-2">
          {place.location}
        </p>

        <h3 className="font-semibold mt-6">About this place</h3>
        <p className="mt-2">{place.description}</p>

        <h3 className="font-semibold mt-6">The Story</h3>
        <p className="mt-2">
          {place.story || "More story details coming soon."}
        </p>

        {place.fact && (
          <div className="mt-6">
            <h3 className="font-semibold">Did You Know?</h3>
            <p className="mt-2">{place.fact}</p>
          </div>
        )}
      </div>
    </div>
  );
}

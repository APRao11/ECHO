
"use client";

import { useSavedPlaces } from "../context/SavedPlacesContext";

export default function SaveButton({ place }) {
  const {
    addSavedPlace,
    removeSavedPlace,
    isPlaceSaved,
  } = useSavedPlaces();

  const saved = isPlaceSaved(place.id);

  function handleSave() {
    if (saved) {
      removeSavedPlace(place.id);
    } else {
      addSavedPlace(place);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSave}
      aria-label={saved ? "Remove saved place" : "Save place"}
      aria-pressed={saved}
      className={`px-4 py-2 rounded-md text-sm font-semibold border transition ${
        saved
          ? "bg-[#A6533C] text-[#F7F3EA] border-[#A6533C]"
          : "bg-[#F7F3EA] text-[#183B4E] border-[#D9BE91] hover:bg-[#D9BE91]"
      }`}
    >
      {saved ? "♥ Saved" : "♡ Save"}
    </button>
  );
}
  
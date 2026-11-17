
"use client";

import { SavedPlacesProvider } from "../context/SavedPlacesContext";

export default function Providers({ children }) {
  return (
    <SavedPlacesProvider>
      {children}
    </SavedPlacesProvider>
  );
}
  
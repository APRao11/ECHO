
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SavedPlacesContext = createContext();

export function SavedPlacesProvider({ children }) {
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlaces = localStorage.getItem("echo-saved-places");

      if (storedPlaces) {
        setSavedPlaces(JSON.parse(storedPlaces));
      }
    } catch (error) {
      console.error("Error loading saved places:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "echo-saved-places",
        JSON.stringify(savedPlaces)
      );
    }
  }, [savedPlaces, isLoaded]);

  function addSavedPlace(place) {
    setSavedPlaces((previousPlaces) => {
      const alreadySaved = previousPlaces.some(
        (item) => item.id === place.id
      );

      if (alreadySaved) {
        return previousPlaces;
      }

      return [...previousPlaces, place];
    });
  }

  function removeSavedPlace(placeId) {
    setSavedPlaces((previousPlaces) =>
      previousPlaces.filter((place) => place.id !== placeId)
    );
  }

  function isPlaceSaved(placeId) {
    return savedPlaces.some((place) => place.id === placeId);
  }

  return (
    <SavedPlacesContext.Provider
      value={{
        savedPlaces,
        addSavedPlace,
        removeSavedPlace,
        isPlaceSaved,
      }}
    >
      {children}
    </SavedPlacesContext.Provider>
  );
}

export function useSavedPlaces() {
  const context = useContext(SavedPlacesContext);

  if (!context) {
    throw new Error(
      "useSavedPlaces must be used inside SavedPlacesProvider"
    );
  }

  return context;
}
  
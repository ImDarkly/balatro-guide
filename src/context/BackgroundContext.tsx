"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type BackgroundMode = "animated" | "static" | "off";

type BackgroundContextType = {
  mode: BackgroundMode;
  setMode: (mode: BackgroundMode) => void;
};

const BackgroundContext = createContext<BackgroundContextType>({
  mode: "animated",
  setMode: () => {},
});

// Provider component
export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<BackgroundMode>("animated");

  return (
    <BackgroundContext.Provider value={{ mode, setMode }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context)
    throw new Error("useBackground must be used within BackgroundProvider");
  return context;
};

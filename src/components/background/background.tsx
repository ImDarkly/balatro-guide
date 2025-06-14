"use client";
import { useBackground } from "@/src/context/BackgroundContext";
import BackgroundShader from "./background-shader";

export default function Background() {
  const { mode } = useBackground();
  if (mode === "off") {
    return null;
  }

  return (
    <BackgroundShader mouseInteraction={false} isPaused={mode !== "animated"} />
  );
}

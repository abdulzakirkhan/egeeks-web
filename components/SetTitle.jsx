"use client";
import { useEffect } from "react";

export default function SetTitle() {
  useEffect(() => {
    document.title = "EgeeksGlobal";
  }, []);

  return null; 
}

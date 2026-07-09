"use client";

import { usePopup } from "@/context/PopupContext";
import HeroPopup from "@/components/home/HeroPopup";

export default function GlobalPopup() {
  const { isOpen, closePopup } = usePopup();
  return <HeroPopup isOpen={isOpen} onClose={closePopup} />;
}

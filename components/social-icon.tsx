"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Tv } from "lucide-react";

export function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  if (name === "Facebook") return <FaFacebookF size={size} aria-hidden="true" />;
  if (name === "Instagram") return <FaInstagram size={size} aria-hidden="true" />;
  if (name === "YouTube") return <FaYoutube size={size} aria-hidden="true" />;
  if (name === "TikTok / Short-form") return <FaTiktok size={size} aria-hidden="true" />;
  return <Tv size={size} aria-hidden="true" />;
}

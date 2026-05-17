"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

function waitForImages() {
  const images = Array.from(document.images).filter((img) => {
    const rect = img.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= window.innerHeight + 240;
  });

  return Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return Promise.race([
        img.decode().catch(() => undefined),
        new Promise((resolve) => setTimeout(resolve, 2400))
      ]);
    })
  );
}

export function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let started = false;
    setLoading(true);

    const ready = async () => {
      if (started) return;
      started = true;
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await waitForImages();
      await new Promise((resolve) => setTimeout(resolve, 180));
      if (active) setLoading(false);
    };

    const fallback = window.setTimeout(ready, 0);
    window.addEventListener("load", ready, { once: true });

    return () => {
      active = false;
      window.clearTimeout(fallback);
      window.removeEventListener("load", ready);
    };
  }, [pathname]);

  return (
    <div className={`page-loader ${loading ? "is-active" : ""}`} aria-hidden={!loading}>
      <div className="loader-mark">
        <LoaderCircle size={42} strokeWidth={1.8} />
      </div>
      <span>Sound of Abundance</span>
    </div>
  );
}

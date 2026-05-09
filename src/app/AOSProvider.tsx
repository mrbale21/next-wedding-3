"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let mounted = true;

    const initAOS = async () => {
      const AOS = (await import("aos")).default;

      if (mounted) {
        AOS.init({
          duration: 800,
          once: true,
        });
      }
    };

    initAOS();

    return () => {
      mounted = false;
    };
  }, []);

  return <>{children}</>;
}

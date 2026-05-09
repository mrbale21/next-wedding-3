"use client";

import { useEffect, useState } from "react";
import {
  MdClose,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type GalleryItem = {
  src: string;
  alt: string;
};

const POPUP_PHOTOS: GalleryItem[] = [
  { src: "/assets/images/image-5.webp", alt: "Gallery image 5" },
  { src: "/assets/images/image-2.webp", alt: "Gallery image 2" },
  { src: "/assets/images/image-3.webp", alt: "Gallery image 3" },
  { src: "/assets/images/image-4.webp", alt: "Gallery image 4" },
  { src: "/assets/images/image-8.webp", alt: "Gallery image 8" },
  { src: "/assets/images/image-1.webp", alt: "Gallery image 1" },
];

function GalleryImage({
  src,
  alt,
  onClick,
  clickable = false,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  clickable?: boolean;
}) {
  return (
    <div
      className={`relative group overflow-hidden ${clickable ? "cursor-pointer" : "cursor-default"}`}
      onClick={clickable ? onClick : undefined}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition duration-300 ${
          clickable ? "group-hover:scale-[1.03]" : ""
        }`}
      />

      <div
        className={`absolute inset-0 transition duration-300 ${
          clickable ? "bg-black/10 group-hover:bg-black/25" : "bg-black/55"
        }`}
      />

      {clickable && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-right text-xs font-medium uppercase tracking-[0.2em] text-white/80 opacity-0 transition duration-300 group-hover:opacity-100">
          View
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + POPUP_PHOTOS.length) % POPUP_PHOTOS.length,
      );
    }
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % POPUP_PHOTOS.length);
    }
  };

  useEffect(() => {
    if (currentIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCurrentIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex(
          (prevIndex) =>
            prevIndex === null
              ? prevIndex
              : (prevIndex - 1 + POPUP_PHOTOS.length) % POPUP_PHOTOS.length,
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex === null
            ? prevIndex
            : (prevIndex + 1) % POPUP_PHOTOS.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="bg-secondary">
      <h1
        data-aos="fade-right"
        data-aos-delay={10}
        className="text-center font-Sacramneto text-5xl sm:text-6xl font-bold text-neutral my-16 z-20"
      >
        Gallery
      </h1>

      <div className="grid grid-cols-3 p-4 gap-1">
        <GalleryImage
          src={POPUP_PHOTOS[0].src}
          alt={POPUP_PHOTOS[0].alt}
          clickable
          onClick={() => openPopup(0)}
        />

        <div
          data-aos="fade-down"
          data-aos-delay={10}
          className="h-full flex flex-col justify-between gap-1"
        >
          <GalleryImage
            src={POPUP_PHOTOS[1].src}
            alt={POPUP_PHOTOS[1].alt}
            clickable
            onClick={() => openPopup(1)}
          />
          <GalleryImage src="/assets/images/galery-2.jpg" alt="image" />
        </div>

        <GalleryImage
          src={POPUP_PHOTOS[2].src}
          alt={POPUP_PHOTOS[2].alt}
          clickable
          onClick={() => openPopup(2)}
        />

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="flex flex-col justify-between gap-1"
        >
          <GalleryImage
            src={POPUP_PHOTOS[3].src}
            alt={POPUP_PHOTOS[3].alt}
            clickable
            onClick={() => openPopup(3)}
          />
          <GalleryImage src="/assets/images/galery-4.jpg" alt="image" />
        </div>

        <GalleryImage
          src={POPUP_PHOTOS[4].src}
          alt={POPUP_PHOTOS[4].alt}
          clickable
          onClick={() => openPopup(4)}
        />

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="flex flex-col justify-between gap-1"
        >
          <GalleryImage src="/assets/images/galery-3.jpg" alt="image" />
          <GalleryImage src="/assets/images/galery-5.jpg" alt="image" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay={10}
          className="h-full flex flex-col justify-between gap-1"
        >
          <GalleryImage src="/assets/images/galery-1.jpg" alt="image" />
          <p
            data-aos="fade-right"
            data-aos-delay={10}
            className="text-center text-neutral font-Chalisa text-xl "
          >
            Komeng & Resti
          </p>
          <GalleryImage
            src={POPUP_PHOTOS[5].src}
            alt={POPUP_PHOTOS[5].alt}
            clickable
            onClick={() => openPopup(5)}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay={10} className="col-span-2">
          <GalleryImage
            src={POPUP_PHOTOS[1].src}
            alt={POPUP_PHOTOS[1].alt}
            clickable
            onClick={() => openPopup(1)}
          />
        </div>
      </div>

      {/* Popup Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closePopup}
        >
          <button
            onClick={closePopup}
            className="absolute right-4 top-12 rounded-full bg-white/20 p-1 text-2xl text-white"
          >
            <MdClose />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 rounded-lg bg-white/20 px-2 py-1 text-3xl text-white"
          >
            <MdKeyboardDoubleArrowLeft />
          </button>

          <img
            src={POPUP_PHOTOS[currentIndex].src}
            alt={POPUP_PHOTOS[currentIndex].alt}
            className="max-h-[90%] max-w-[90%] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 rounded-lg bg-white/20 px-2 py-1 text-3xl text-white"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

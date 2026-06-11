"use client";

import { useState } from "react";
import Image from "next/image";

export type ProjectImage = {
  src: string;
  label: string;
};

export default function ProjectGallery({ images }: { images?: ProjectImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
        Project Visuals
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group/item relative h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow bg-gray-50 flex items-center justify-center"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover group-hover/item:scale-105 transition-transform duration-300"
            />
            {/* Image Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white text-xs p-2 text-center transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button - Fixed to Top Right */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 z-[110] transition-colors bg-black/20 rounded-full hover:bg-black/40"
            onClick={() => setSelectedIndex(null)}
            title="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-[110] transition-colors bg-black/20 rounded-full hover:bg-black/40"
                onClick={handlePrev}
                title="Previous Image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-[110] transition-colors bg-black/20 rounded-full hover:bg-black/40"
                onClick={handleNext}
                title="Next Image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex flex-col items-center justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].label}
                fill
                className="object-contain pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Label displayed at the bottom of the lightbox */}
            <div className="mt-4 text-center pointer-events-auto">
              <p className="text-white text-lg font-medium tracking-wide">
                {images[selectedIndex].label}
              </p>
              {images.length > 1 && (
                <p className="text-white/60 text-sm mt-1">
                  {selectedIndex + 1} of {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

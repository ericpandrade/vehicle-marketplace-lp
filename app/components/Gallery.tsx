"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-1.jpg",
    alt: "Honda CG 150 Titan 2014 - Frontal",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-2.jpg",
    alt: "Honda CG 150 Titan 2014 - Visão do painel",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-3.jpg",
    alt: "Honda CG 150 Titan 2014 - Lateral com tanque",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-4.jpg",
    alt: "Honda CG 150 Titan 2014 - Lateral direita com bagageiro",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-5.jpg",
    alt: "Honda CG 150 Titan 2014 - Velocímetro 96.429 km",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-6.jpg",
    alt: "Honda CG 150 Titan 2014 - Lateral na oficina",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-7.jpg",
    alt: "Honda CG 150 Titan 2014 - Perfil completo esquerda",
  },
  {
    src: "/motos/HON-CG150-TIT-VM[OSR-7155]/foto-8.jpg",
    alt: "Honda CG 150 Titan 2014 - Perfil completo direita",
  },
];

export function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full min-w-0">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#cc0000] shadow-[0_0_30px_rgba(204,0,0,0.25)] bg-[#111]">
        <Image
          key={current}
          src={photos[current].src}
          alt={photos[current].alt}
          fill
          className="object-cover slide-in"
          priority={current === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white text-xl hover:bg-[#cc0000] transition-colors duration-200"
          aria-label="Foto anterior"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white text-xl hover:bg-[#cc0000] transition-colors duration-200"
          aria-label="Próxima foto"
        >
          ›
        </button>

        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">
          {current + 1}/{photos.length}
        </div>
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              i === current
                ? "border-[#cc0000] shadow-[0_0_8px_rgba(204,0,0,0.5)]"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
            aria-label={`Ver foto ${i + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-5 h-2 bg-[#cc0000]"
                : "w-2 h-2 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

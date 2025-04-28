"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import kidneys from "@/assets/home/kidneys.svg";
import brain from "@/assets/home/brain.svg";
import cardiology from "@/assets/home/cardiology.svg";
import dentist from "@/assets/home/dentist.svg";
import { Button } from "../ui/button";

const specialties = [
  { id: 1, name: "Urology", icon: kidneys },
  { id: 2, name: "Neurology", icon: brain },
  { id: 3, name: "Cardiology", icon: cardiology },
  { id: 4, name: "Dentist", icon: dentist },
  { id: 5, name: "Urology", icon: kidneys },
  { id: 6, name: "Neurology", icon: brain },
  { id: 7, name: "Cardiology", icon: cardiology },
  { id: 8, name: "Dentist", icon: dentist },
];

export default function SpecialtiesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="specialties-slider">
      <div className="relative">
        {/* Left/Right Scroll Buttons */}
        <Button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hidden md:block"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>

        <Button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hidden md:block"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </Button>

        {/* Slider List */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {specialties.map((specialty) => (
            <div
              key={`${specialty.id}-${specialty.name}`}
              className="flex-shrink-0 w-20 md:w-24 text-center"
            >
              <div
                className="rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto shadow-md"
                style={{
                  backgroundColor:
                    specialty.name === "Urology"
                      ? "#6DBDB1"
                      : specialty.name === "Neurology"
                      ? "#3D4853"
                      : specialty.name === "Cardiology"
                      ? "#02C0F1"
                      : specialty.name === "Dentist"
                      ? "#FA7575"
                      : "#EEE",
                }}
              >
                <Image
                  src={specialty.icon}
                  alt={specialty.name}
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-xs md:text-sm mt-2 text-gray-800">
                {specialty.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

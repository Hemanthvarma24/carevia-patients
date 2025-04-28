"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import gifone from "@/assets/gif/1.gif";
import profileone from "@/assets/onboarding/1.png";
import profiletwo from "@/assets/onboarding/2.png";
import profilethree from "@/assets/onboarding/3.png";
import design from "@/assets/onboarding/line-design.svg";

export default function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const router = useRouter();

  const slides = [
    {
      poster: profileone,
      title: "Expert Doctors",
      description: "Connect with board-certified specialists for personalized care and expert medical advice.",
    },
    {
      poster: profiletwo,
      title: "24/7 Availability",
      description: "Our doctors are available around the clock for consultations, emergencies, and follow-ups.",
    },
    {
      poster: profilethree,
      title: "Secure Consultations",
      description: "Private and secure video consultations with doctors from the comfort of your home.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const handleNavigate = () => {
    setIsLoading(true); // Show loading immediately
    router.push("/signup"); // Immediately navigate without delay
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="min-h-screen bg-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-screen">
        <div className="h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div className="flex flex-col h-full">
                {/* GIF shown for all slides */}
                <div className="w-full h-[40vh] relative overflow-hidden">
                  <Image
                    src={gifone}
                    alt="Onboarding animation"
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>

                <div className="relative px-4">
                  <div className="bg-white rounded-t-3xl pt-4 pb-4 relative">
                    <div className="relative mx-auto max-w-[500px]">
                      <div className="relative mb-8">
                        <Image
                          src={slide.poster}
                          alt="Poster"
                          width={300}
                          height={300}
                          className="mx-auto"
                        />
                      </div>
                      <div className="text-center px-4">
                        <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                        <div className="mb-3">
                          <Image
                            src={design}
                            alt="border-design"
                            width={150}
                            height={10}
                            className="mx-auto"
                          />
                        </div>
                        <h5 className="text-gray-600 text-sm mb-6">
                          {slide.description}
                        </h5>
                        <button
                          onClick={handleNavigate}
                          disabled={isLoading}
                          className="inline-block pb-8"
                        >
                          <div className="w-14 h-14 rounded-full bg-[#02998c] flex items-center justify-center shadow-lg">
                            {isLoading ? (
                              <svg
                                className="animate-spin h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                            ) : (
                              <ChevronRight className="text-white w-8 h-8" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {isLoading && (
          <div className="fixed inset-0 bg-gray-200 bg-opacity-70 flex items-center justify-center z-50">
            <svg
              className="animate-spin h-16 w-16 text-[#02998c]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

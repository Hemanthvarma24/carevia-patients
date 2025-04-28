"use client";

import { useState } from "react";
import { X, Play, Pause } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import NavigationMenuSlider from "@/components/aboutmenu";
import Navbar from "@/components/header";
import building from "@/assets/home/building-view.jpg";
import staff from "@/assets/home/team.jpg";
import modren from "@/assets/gallary/getting-ct.jpg";
import patient from "@/assets/gallary/patient-telling.jpg";
import { StaticImageData } from "next/image";

type MediaType = "photo" | "video";

interface MediaItem {
  id: number;
  src: StaticImageData | string; 
  alt: string;
  type: MediaType;
  duration?: string;
  videoSrc?: string; 
}

export default function GalleryUI() {
  const [activeTab, setActiveTab] = useState<MediaType>("photo");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      src: building,
      alt: "Hospital Building",
      type: "photo",
    },
    {
      id: 2,
      src: staff,
      alt: "Medical Staff",
      type: "photo",
    },
    {
      id: 3,
      src: modren,
      alt: "Modern Equipment",
      type: "photo",
    },
    {
      id: 4,
      src: patient,
      alt: "Patient Care",
      type: "photo",
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      alt: "Hospital Tour",
      type: "video",
      duration: "3:45",
      videoSrc: "src/assets/gallary/tourhospital.mp4", // Add actual path to your MP4 file
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      alt: "Doctor Interview",
      type: "video",
      duration: "2:30",
      videoSrc: "/videos/doctor-interview.mp4", // Add actual path to your MP4 file
    },
    {
      id: 7,
      src: "/api/placeholder/400/300",
      alt: "Medical Procedure",
      type: "video",
      duration: "4:15",
      videoSrc: "/videos/medical-procedure.mp4", // Add actual path to your MP4 file
    },
    {
      id: 8,
      src: "/api/placeholder/400/300",
      alt: "Patient Testimonial",
      type: "video",
      duration: "5:20",
      videoSrc: "/videos/patient-testimonial.mp4", // Add actual path to your MP4 file
    },
  ];

  const openModal = (item: MediaItem): void => {
    setSelectedItem(item);
    setIsPlaying(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setSelectedItem(null);
    setIsPlaying(false);
    document.body.style.overflow = "auto";
  };

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    
    // Get video element and toggle play/pause
    const videoElement = document.getElementById('modalVideo') as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  };

  const filteredItems = mediaItems.filter((item) => item.type === activeTab);

  return (
    <>
      <Navbar />
      <NavigationMenuSlider />
      <div className="container mx-auto px-4 py-8 mb-14">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Medical Center Gallery
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-200 w-full max-w-md">
            <div className="flex -mb-px">
              <button
                className={`w-1/2 py-3 text-center font-medium text-lg ${
                  activeTab === "photo"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("photo")}
              >
                Photos
              </button>
              <button
                className={`w-1/2 py-3 text-center font-medium text-lg ${
                  activeTab === "video"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("video")}
              >
                Videos
              </button>
            </div>
          </div>
        </div>

        {/* Content - Always 2 columns */}
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(item)}
            >
              {item.type === "photo" ? (
                <div className="h-48 w-full relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative h-48">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-500 bg-opacity-80 rounded-full p-3 shadow-lg">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal with support for real videos */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="max-w-4xl w-full max-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              {selectedItem.type === "photo" ? (
                <div className="flex items-center justify-center h-screen">
                  <div className="relative h-3/4 w-full">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-screen">
                  <div className="relative w-full h-3/4">
                    {/* Actual video player */}
                    <video
                      id="modalVideo"
                      src={selectedItem.videoSrc}
                      poster={typeof selectedItem.src === 'string' ? selectedItem.src : ''}
                      className="w-full h-full object-contain"
                      controls={false}
                      onEnded={() => setIsPlaying(false)}
                    />
                    
                    {/* Custom play/pause button */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause();
                      }}
                    >
                      {!isPlaying && (
                        <div className="bg-blue-500 bg-opacity-80 rounded-full p-4 shadow-lg">
                          <Play size={40} className="text-white" />
                        </div>
                      )}
                      {isPlaying && (
                        <div className="bg-blue-500 bg-opacity-80 rounded-full p-4 shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                          <Pause size={40} className="text-white" />
                        </div>
                      )}
                    </div>
                    
                    {/* Video duration indicator */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                      {selectedItem.duration}
                    </div>
                    
                    {/* Custom video controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayPause();
                        }} 
                        className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
                      >
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                      <span>{selectedItem.alt}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
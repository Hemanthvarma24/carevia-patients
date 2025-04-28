"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Lightbulb,
  HelpCircle,
  Stethoscope,
  Building,
  Users,
  Newspaper,
  Tag,
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import icon from "@/assets/home/image-icon.png";

export default function NavigationMenuSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const menuItems = [
    {
      title: "About Hospital",
      icon: <Building2 className="h-6 w-6 text-white" />,
      href: "/about-hospital",
      bgColor: "bg-emerald-500",
    },
    {
      title: "Vision & Mission",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      href: "/vision-mission",
      bgColor: "bg-slate-600",
    },
    {
      title: "FAQ",
      icon: <HelpCircle className="h-6 w-6 text-white" />,
      href: "/faq",
      bgColor: "bg-cyan-500",
    },
    {
      title: "Specialities",
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      href: "/specialities",
      bgColor: "bg-pink-500",
    },
    {
      title: "Facilities",
      icon: <Building className="h-6 w-6 text-white" />,
      href: "/facilities",
      bgColor: "bg-purple-500",
    },
    {
      title: "Our Doctors",
      icon: <Users className="h-6 w-6 text-white" />,
      href: "/doctors",
      bgColor: "bg-blue-500",
    },
    {
      title: "Gallery",
      icon: (
        <div className="h-6 w-6 relative">
          <Image
            src={icon}
            alt="Gallery Icon"
            fill
            className="object-contain"
          />
        </div>
      ),
      href: "/gallery",
      bgColor: "bg-green-600",
    },
    {
      title: "News & Events",
      icon: <Newspaper className="h-6 w-6 text-white" />,
      href: "/news-events",
      bgColor: "bg-amber-500",
    },
    {
      title: "Offers",
      icon: <Tag className="h-6 w-6 text-white" />,
      href: "/offers",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Contact Info",
      icon: <Phone className="h-6 w-6 text-white" />,
      href: "/contact",
      bgColor: "bg-rose-500",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition =
      direction === "left"
        ? Math.max(container.scrollLeft - scrollAmount, 0)
        : Math.min(
            container.scrollLeft + scrollAmount,
            container.scrollWidth - container.clientWidth
          );

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScrollable = () => {
      setCanScroll(container.scrollWidth > container.clientWidth);
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  return (
    <div className="relative py-4 px-4 bg-white">
      <div className="container mx-auto">
        {/* Back to About Us Link */}
        <div className="mb-4">
          <Link
            href="/about-us"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to About Us
          </Link>
        </div>

        <div className="relative">
          {/* Left Scroll Button */}
          {canScroll && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
          )}

          {/* Scrollable Menu */}
          <div
            ref={containerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 px-2 md:px-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <div
                    className={`${item.bgColor} rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-800 text-center whitespace-nowrap">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          {canScroll && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:flex"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

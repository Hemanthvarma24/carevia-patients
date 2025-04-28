"use client";

import {
  Activity,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Heart,
  Pill,
  Plus,
  Share2,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import profile from "@/assets/patients/patient10.jpg";
import doctoone from "@/assets/doctors/doctor-02.png";
import doctotwo from "@/assets/doctors/doctor-04.png";
import doctothree from "@/assets/doctors/doctor-05.png";
import doctofive from "@/assets/doctors/doctor-10.png";
import Footer from "@/components/footer";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/header";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tips = [
    {
      title: "Stay Hydrated",
      content:
        "Drink at least 8 glasses of water daily to maintain proper hydration and support bodily functions.",
      icon: "💧",
      color: "blue",
    },
    {
      title: "Regular Exercise",
      content:
        "Aim for at least 30 minutes of moderate exercise 5 days a week to improve cardiovascular health.",
      icon: "🏃‍♂️",
      color: "green",
    },
    {
      title: "Balanced Diet",
      content:
        "Include a variety of fruits, vegetables, lean proteins, and whole grains in your daily meals.",
      icon: "🥗",
      color: "amber",
    },
  ];

  // Handle navigation
  const goToPrevious = () => {
    setCurrentSlide((prev: number) =>
      prev === 0 ? tips.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev: number) =>
      prev === tips.length - 1 ? 0 : prev + 1
    );
  };

  // Connect the custom buttons to the carousel
  useEffect(() => {
    const prevButton = document.getElementById("prev-tip");
    const nextButton = document.getElementById("next-tip");

    if (prevButton) prevButton.addEventListener("click", goToPrevious);
    if (nextButton) nextButton.addEventListener("click", goToNext);

    return () => {
      if (prevButton) prevButton.removeEventListener("click", goToPrevious);
      if (nextButton) nextButton.removeEventListener("click", goToNext);
    };
  },);

  // Color classes based on tip color
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "bg-blue-50", text: "text-blue-700" };
      case "green":
        return { bg: "bg-green-50", text: "text-green-700" };
      case "amber":
        return { bg: "bg-amber-50", text: "text-amber-700" };
      default:
        return { bg: "bg-gray-50", text: "text-gray-700" };
    }
  };

  const doctors = [
    {
      name: "Dr. Sarah Lee",
      specialty: "Pediatrics",
      experience: "8 years",
      rating: 4.9,
      image: doctoone,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Neurology",
      experience: "12 years",
      rating: 4.7,
      image: doctotwo,
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Dermatology",
      experience: "5 years",
      rating: 4.8,
      image: doctothree,
    },
    {
      name: "Dr. Robert Garcia",
      specialty: "Orthopedics",
      experience: "10 years",
      rating: 4.6,
      image: doctofive,
    },
  ];

  // Example data - in a real application, this would come from props or an API
  const [stats] = useState({
    appointments: 128,
    payments: "$9,854.00",
  });


  const events = [
    {
      title: "Health & Wellness Fair",
      date: "May 15, 2023",
      location: "Community Center",
      time: "10:00 AM - 4:00 PM",
    },
    {
      title: "Diabetes Awareness Workshop",
      date: "May 22, 2023",
      location: "Memorial Hospital",
      time: "2:00 PM - 4:00 PM",
    },
    {
      title: "Blood Donation Drive",
      date: "June 5, 2023",
      location: "City Park",
      time: "9:00 AM - 3:00 PM",
    }
  ];

  type EventType = {
    title: ReactNode;
    date: ReactNode;
    location: ReactNode;
    time: ReactNode;
  };

  return (
    <div className="pb-20 bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* User Profile Section with Health Score */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 p-6 text-white shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 -mb-10 -ml-10 bg-white/5 rounded-full blur-xl"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/80 shadow-lg">
              <Image
                src={profile}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Sarah Johnson</h1>
              <p className="text-sm text-white/80">Joined on: April 15, 2023</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">
                  blood group B+
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <span className="text-2xl font-bold">87</span>
                <svg
                  className="absolute inset-0"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeDasharray="226"
                    strokeDashoffset="29"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
              </div>
              <span className="text-xs block mt-1 font-medium">
                Health Score
              </span>
            </div>
          </div>
        </section>

        {/* Card Container - flex-col on mobile, flex-row on sm and up */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Appointments Card */}
          <div className="bg-white rounded-lg shadow p-6 flex-1">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Appointments
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {stats.appointments}
                </h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-500 font-medium">
                  +12% from last month
                </span>
                <Link
                  href="/appointments"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>

          {/* Payments Card */}
          <div className="bg-white rounded-lg shadow p-6 flex-1">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <CreditCard size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Payments
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {stats.payments}
                </h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-500 font-medium">
                  +8% from last month
                </span>
                <Link
                  href="/payments"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Health Activity Summary */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Your Activity</h2>
            <Link href="/profile/info" passHref>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-600 font-medium"
            >
              View All
            </Button>
            </Link>
          </div>
          <Card className="overflow-hidden border-slate-200 shadow-md">
            <CardContent className="p-5">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-500" />
                    <span className="text-sm font-medium text-slate-700">
                      Heart Rate
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-slate-800">
                      72
                    </span>
                    <span className="text-sm text-slate-500 mb-1">bpm</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600 font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Normal range
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">
                      Steps
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-slate-800">
                      8,547
                    </span>
                    <span className="text-sm text-slate-500 mb-1">/ 10k</span>
                  </div>
                  <Progress value={85} className="h-2 bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm font-medium text-slate-700">
                      Sleep
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-slate-800">
                      7.2
                    </span>
                    <span className="text-sm text-slate-500 mb-1">hrs</span>
                  </div>
                  <div className="flex items-center text-xs text-amber-600 font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Slightly below target
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium text-slate-700">
                      Achievements
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-slate-800">
                      12
                    </span>
                    <span className="text-sm text-slate-500 mb-1">badges</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-teal-100 border border-white flex items-center justify-center text-teal-600"
                      >
                        <span className="text-[10px]">🏆</span>
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-teal-100 border border-white flex items-center justify-center text-teal-600">
                      <span className="text-[10px]">+8</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

    
        {/* Medication Reminders */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Medication Reminders
            </h2>
            <Link href="/medical-records" passHref>
              <Button
                variant="ghost"
                size="sm"
                className="text-teal-600 font-medium"
              >
                View All
              </Button>
            </Link>
          </div>
          <Card className="overflow-hidden border-slate-200 shadow-md">
            <CardContent className="p-5">
              <div className="space-y-5">
                {[
                  {
                    name: "Lisinopril",
                    dosage: "10mg",
                    time: "8:00 AM",
                    status: "Taken",
                    color: "green",
                  },
                  {
                    name: "Metformin",
                    dosage: "500mg",
                    time: "1:00 PM",
                    status: "Due in 2 hours",
                    color: "amber",
                  },
                  {
                    name: "Atorvastatin",
                    dosage: "20mg",
                    time: "9:00 PM",
                    status: "Upcoming",
                    color: "slate",
                  },
                ].map((med, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          med.color === "green" &&
                            "bg-green-100 text-green-600",
                          med.color === "amber" &&
                            "bg-amber-100 text-amber-600",
                          med.color === "slate" && "bg-slate-100 text-slate-600"
                        )}
                      >
                        <Pill className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">
                          {med.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {med.dosage} • {med.time}
                        </p>
                      </div>
                    </div>
                    <div>
                      {med.status === "Taken" ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">
                          Taken
                        </Badge>
                      ) : med.status.includes("Due") ? (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none">
                          {med.status}
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="text-slate-600 border-slate-300"
                        >
                          {med.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Tips Slider */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Health Tips</h2>
            <div className="flex gap-2">
              <button
                id="prev-tip"
                className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous tip</span>
              </button>
              <button
                id="next-tip"
                className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next tip</span>
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tips.map((tip, index) => {
                const colorClasses = getColorClasses(tip.color);
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="overflow-hidden border-none shadow-md rounded-lg">
                      <div className={`p-6 ${colorClasses.bg}`}>
                        <div className="flex items-start">
                          <div className="mr-5 text-4xl">{tip.icon}</div>
                          <div>
                            <h3
                              className={`text-lg font-bold ${colorClasses.text}`}
                            >
                              {tip.title}
                            </h3>
                            <p className="text-sm mt-2 text-slate-700 leading-relaxed">
                              {tip.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-slate-800">
              Our Doctors
            </h2>
            <Link href="/doctors" passHref>
              <Button
                variant="ghost"
                size="sm"
                className="text-teal-600 font-medium"
              >
                View All
              </Button>
            </Link>
          </div>
          <div
            className="overflow-auto pb-1 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-4 min-w-max">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="w-[180px] overflow-hidden py-4 border-slate-200 shadow-sm"
                >
                  <div className="relative">
                    <div className="h-36 relative">
                      <Image
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white rounded-full px-2  text-xs font-medium flex items-center shadow-sm">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-0.5" />
                      {doctor.rating}
                    </div>
                  </div>
                  <CardContent className="p-2">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">
                      {doctor.name}
                    </h3>
                    <div className="flex flex-col mt-0.5 mb-1.5">
                      <span className="text-xs text-slate-500 truncate">
                        {doctor.specialty}
                      </span>
                      <span className="text-xs text-slate-400">
                        {doctor.experience}
                      </span>
                    </div>
                    <Link href="/appointments" passHref>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full h-7 text-xs border-teal-600 text-teal-600 hover:bg-teal-50 py-0"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </section>

     <section className="p-4">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Upcoming Events</h2>
      <div className="space-y-4">
      {events.map((event: EventType, index: number) => (
          <Card
            key={index}
            className="border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-slate-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-500">{event.date}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-slate-600">
                    <span className="flex items-center">
                      📍 {event.location}
                    </span>
                    <span className="hidden sm:inline-block">•</span>
                    <span className="flex items-center">
                      ⏰ {event.time}
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-4">
      <Link href="/health-resources" passHref>
        <Button
          variant="ghost"
          className="w-full text-teal-600 font-medium"
        >
          View All Events
        </Button>
        </Link>
      </div>
    </section>
        {/* Community Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Community</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-600 font-medium"
            >
              Join Groups
            </Button>
          </div>
          <Card className="bg-gradient-to-r from-teal-50 to-teal-100 border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Join Health Communities
                  </h3>
                  <p className="text-sm text-slate-600">
                    Connect with others, share experiences, and get support
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Heart Health", members: 1243 },
                  { name: "Fitness Goals", members: 3567 },
                  { name: "Nutrition Tips", members: 2189 },
                  { name: "Mental Wellness", members: 1876 },
                ].map((group, index) => (
                  <Card key={index} className="bg-white border-slate-200">
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm text-slate-800">
                          {group.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {group.members.toLocaleString()} members
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Share App Button */}
        <div className="bottom-20 right-4 z-10 mt-4 ">
      <Link href="/profile/share">
        <Button
          className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700"
          size="icon"
        >
          <Share2 className="h-6 w-6" />
          <span className="sr-only">Share App</span>
        </Button>
      </Link>
      </div>
      </main>

      <Footer />
    </div>
  );
}

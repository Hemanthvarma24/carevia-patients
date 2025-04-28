"use client";

import React, { useState } from "react";
import Head from "next/head";
import {
  Search,
  ChevronRight,
  Activity,
  Heart,
  Brain,
  Bone,
  Pill,
  Eye,
  Baby,
  TestTube,
  Scissors,
  Pause,
} from "lucide-react";
import NavigationMenuSlider from "@/components/aboutmenu";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function Specialties() {
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = [
    {
      id: 1,
      name: "Cardiology",
      description: "Diagnosis and treatment of heart disorders",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      doctors: 12,
    },
    {
      id: 2,
      name: "Neurology",
      description:
        "Disorders of the nervous system including brain and spinal cord",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      doctors: 8,
    },
    {
      id: 3,
      name: "Orthopedics",
      description: "Treatment of the musculoskeletal system",
      icon: <Bone className="w-6 h-6 text-gray-500" />,
      doctors: 10,
    },
    {
      id: 4,
      name: "Ophthalmology",
      description: "Eye diseases and disorders",
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      doctors: 6,
    },
    {
      id: 5,
      name: "Pediatrics",
      description: "Healthcare for infants, children, and adolescents",
      icon: <Baby className="w-6 h-6 text-green-500" />,
      doctors: 14,
    },
    {
      id: 6,
      name: "Internal Medicine",
      description: "Prevention, diagnosis, and treatment of adult diseases",
      icon: <Activity className="w-6 h-6 text-yellow-500" />,
      doctors: 16,
    },
    {
      id: 7,
      name: "Dermatology",
      description: "Diagnosis and treatment of skin disorders",
      icon: <Pill className="w-6 h-6 text-orange-500" />,
      doctors: 7,
    },
    {
      id: 8,
      name: "Surgery",
      description: "Surgical procedures and post-operative care",
      icon: <Scissors className="w-6 h-6 text-pink-500" />,
      doctors: 18,
    },
    {
      id: 9,
      name: "Pulmonology",
      description: "Diagnosis and treatment of lung disorders",
      icon: <Pause className="w-6 h-6 text-indigo-500" />,
      doctors: 6,
    },
    {
      id: 10,
      name: "Pathology",
      description: "Study of disease processes for accurate diagnosis",
      icon: <TestTube className="w-6 h-6 text-teal-500" />,
      doctors: 5,
    },
  ];

  // Filter specialties based on search term
  const filteredSpecialties = specialties.filter(
    (specialty) =>
      specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialty.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <NavigationMenuSlider />
      <Head>
        <title>Hospital Specialties | Medcare Health Services</title>
        <meta
          name="description"
          content="Explore our hospital's medical specialties"
        />
      </Head>

      <div className="bg-gray-50 min-h-screen mb-18">
        {/* Top Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Our Specialties
            </h1>
            <p className="text-gray-600 mt-2">
              Expert medical care across multiple disciplines
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search specialties..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute top-3 left-4 text-gray-400" />
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.length > 0 ? (
              filteredSpecialties.map((specialty) => (
                <div
                  key={specialty.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                          {specialty.icon}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {specialty.name}
                        </h2>
                      </div>
                      <span className="text-sm font-medium text-blue-600">
                        {specialty.doctors} doctors
                      </span>
                    </div>

                    <p className="mt-4 text-gray-600">
                      {specialty.description}
                    </p>

                    <div className="mt-6">
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        Learn more
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-lg">
                  No specialties found matching &rdquo;{searchTerm}&rdquo;
                </p>
                <button
                  className="mt-4 text-blue-600 hover:text-blue-800"
                  onClick={() => setSearchTerm("")}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-blue-600 mt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white mb-4 md:mb-0">
                <h3 className="text-xl font-bold">
                  Need help finding the right specialist?
                </h3>
                <p className="mt-1">
                  Our healthcare navigators are ready to assist you
                </p>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

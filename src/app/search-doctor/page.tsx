"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaMoneyBillAlt,
} from "react-icons/fa";
import {
  Star,
  Stethoscope,
  Briefcase,
  Heart,
  Coffee,
  Music,
} from "lucide-react";
import doctoone from "@/assets/doctors/doctor-09.png";
import doctotwo from "@/assets/doctors/doctor-10.png";
import doctothree from "@/assets/doctors/doctor-07.png";
import icon from "@/assets/home/specialities-05.png";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function SearchDoctor() {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };


  return (
    <><Navbar /><div className="min-h-screen bg-gray-50">
      <main className="pb-20">
        {/* Search tag */}
        <div className="bg-white shadow px-4 py-3">
          <div className="container mx-auto">
            {/* Horizontally scrollable tags only */}
            <div
              className="overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-2 pb-2 w-max">
                {[
                  { icon: <Star size={16} />, text: "Rating" },
                  { icon: <Stethoscope size={16} />, text: "Stethoscope" },
                  { icon: <Briefcase size={16} />, text: "Purse" },
                  { icon: <Heart size={16} />, text: "Favorite" },
                  { icon: <Coffee size={16} />, text: "Coffee" },
                  { icon: <Music size={16} />, text: "Music" },
                ].map((tag, index) => (
                  <Button
                    key={index}
                    onClick={toggleFilterModal}
                    className="flex items-center space-x-1 whitespace-nowrap px-4 py-2 text-black bg-[#f2f3f5] rounded-full text-sm"
                  >
                    <span className="w-4 h-4 relative text-black">
                      {tag.icon}
                    </span>
                    <span>{tag.text}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Fixed, non-scrollable content */}
            <h6 className="text-sm text-gray-500 mt-2">
              16525 matches found for:
            </h6>
            <span className="text-black">Dental specialist In Bangalore</span>
          </div>
        </div>

        {/* Doctors Listing */}
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-4">
            {[
              {
                id: 1,
                name: "Dr. Ruby Perrin",
                specialty: "MDS - Periodontology, BDS",
                department: "Dentist",
                experience: "9+ Exp",
                rating: 4,
                reviews: 47,
                location: "Florida, USA",
                satisfaction: "98%",
                price: "$300 - $1000",
                image: doctoone,
                specialtyIcon: icon,
              },
              {
                id: 2,
                name: "Dr. Katharine Berthold",
                specialty: "MS, MBBS, M.Ch - Orthopaedics",
                department: "Dentist",
                experience: "15+ Exp",
                rating: 4,
                reviews: 16592,
                location: "Florida, USA",
                satisfaction: "98%",
                price: "$300 - $1000",
                image: doctotwo,
                specialtyIcon: icon,
              },
              {
                id: 3,
                name: "Dr. Ruby Perrin",
                specialty: "MDS - Periodontology, BDS",
                department: "Dentist",
                experience: "9+ Exp",
                rating: 4,
                reviews: 47,
                location: "Florida, USA",
                satisfaction: "98%",
                price: "$300 - $1000",
                image: doctothree,
                specialtyIcon: icon,
              },
            ].map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  {/* Doctor Info Left */}
                  <div className="flex md:w-2/3">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        objectFit="cover" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">
                        <Link
                          href="/doctor-profile"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {doctor.name}
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="w-6 h-6 relative mr-2">
                          <Image
                            src={doctor.specialtyIcon}
                            alt="Specialty"
                            fill
                            objectFit="contain" />
                        </span>
                        <span className="text-gray-800">
                          {doctor.department}
                        </span>
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {doctor.experience}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-3 h-3 ${i < doctor.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"}`} />
                          ))}
                          <span className="ml-1 text-xs text-gray-600">
                            ({doctor.reviews})
                          </span>
                        </div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <FaMapMarkerAlt className="w-3 h-3 text-gray-500 mr-1" />
                          <p className="text-xs text-gray-600">
                            {doctor.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Right */}
                  <div className="mt-4 md:mt-0 md:w-1/3 flex flex-col items-end justify-between">
                    <div className="w-full">
                      <ul className="flex justify-end space-x-4">
                        <li className="flex items-center text-sm">
                          <FaThumbsUp className="text-green-500 mr-1" />
                          <span>{doctor.satisfaction}</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <FaMoneyBillAlt className="text-blue-500 mr-1" />
                          <span>{doctor.price}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 w-full md:w-auto">
                      <Link
                        href="/bookappointment"
                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200 w-full md:w-auto"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </main>
        <Footer/>
    </div></>
  );
}
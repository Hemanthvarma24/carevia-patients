"use client";

import { useState } from "react";
import {
  Heart,
  ArrowLeft,
  MoreVertical,
  Search,
} from "lucide-react";
import Footer from "@/components/footer";
import doctorone from "@/assets/doctors/doctor-01.png";
import doctortwo from "@/assets/doctors/doctor-02.png";
import doctorthree from "@/assets/doctors/doctor-03.png";
import doctorfour from "@/assets/doctors/doctor-04.png";
import Image from "next/image";
import NavigationMenuSlider from "@/components/aboutmenu";
import Navbar from "@/components/header";
import Link from "next/link";
import { StaticImageData } from "next/image";

// Doctor type definition
type Doctor = {
  id: number;
  name: string;
  fullName?: string;
  specialty: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  image: StaticImageData;
  availableSlots?: string[];
};

export default function DoctorAppointmentApp() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Pawan",
      fullName: "Dr. Pawan a. jon",
      specialty: "Denteeth",
      price: 120.0,
      rating: 5.0,
      isFavorite: false,
      image: doctorone,
      availableSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"],
    },
    {
      id: 2,
      name: "Dr. Wanitha",
      specialty: "Cardiologist",
      price: 150.0,
      rating: 5.0,
      isFavorite: true,
      image: doctorthree,
      availableSlots: ["09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"],
    },
    {
      id: 3,
      name: "Dr. Dhiraj",
      specialty: "Neurologist",
      price: 180.0,
      rating: 5.0,
      isFavorite: false,
      image: doctortwo,
      availableSlots: ["08:00 AM", "11:30 AM", "01:30 PM", "04:00 PM"],
    },
    {
      id: 4,
      name: "Dr. Manoj",
      specialty: "Orthopedic",
      price: 140.0,
      rating: 5.0,
      isFavorite: true,
      image: doctorfour,
      availableSlots: ["09:30 AM", "12:30 PM", "02:30 PM", "04:30 PM"],
    },
  ]);
  
  // Added the toggleFavorite function
  const toggleFavorite = (doctorId: number) => {
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor => 
        doctor.id === doctorId 
          ? { ...doctor, isFavorite: !doctor.isFavorite } 
          : doctor
      )
    );
  };

  const goBack = () => {
    setSelectedDoctor(null);
  };

  const viewDoctorDetails = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <>
      <Navbar />
      <NavigationMenuSlider />
      <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
        {!selectedDoctor ? (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Doctors</h1>
            </div>

            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search a doctor"
                className="w-full py-3 pl-10 pr-4 bg-white rounded-lg shadow-sm"
              />
            </div>

            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-xl p-3 shadow-sm flex items-start"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-xl mr-3 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-bold">{doctor.name}</h2>
                      <button
                        onClick={() => toggleFavorite(doctor.id)}
                        className="text-gray-400"
                      >
                        <Heart
                          fill={doctor.isFavorite ? "#f87171" : "none"}
                          color={
                            doctor.isFavorite ? "#f87171" : "currentColor"
                          }
                          size={20}
                        />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor, consectetur adipiscing elit
                    </p>
                    <div className="text-xs text-blue-500 mt-1">
                      Read more...
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <button
                        onClick={() => viewDoctorDetails(doctor)}
                        className="bg-blue-500 text-white px-6 py-1 rounded-full text-sm"
                      >
                        Book
                      </button>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-medium">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="bg-blue-100 p-4 rounded-b-3xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <button onClick={goBack} className="mr-2">
                    <ArrowLeft size={20} />
                  </button>
                  <h1 className="text-xl font-medium">Appointment</h1>
                </div>
                <MoreVertical size={20} />
              </div>

              <div className="flex items-center justify-center mb-4">
                <Image
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>

            <div className="p-4 mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {selectedDoctor.fullName || selectedDoctor.name}
                </h2>
                <div className="text-blue-400">{selectedDoctor.specialty}</div>
              </div>

              <div className="mt-2 mb-4">
                <span className="text-2xl font-bold">
                  ${selectedDoctor.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Details</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-lg">Working Hours</h3>
                  <span className="text-blue-400 text-sm">See all</span>
                </div>

                <div className="flex space-x-3 overflow-x-auto py-2">
                  {selectedDoctor.availableSlots?.map((slot, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg ${
                        index === 0
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <Link href="/appointments" passHref>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 font-medium">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
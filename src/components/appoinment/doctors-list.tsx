"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, MapPin, ThumbsUp, DollarSign } from "lucide-react"
import doctoone from "@/assets/doctors/doctor-02.png"
import doctotwo from "@/assets/doctors/doctor-04.png"
import doctothree from "@/assets/doctors/doctor-05.png"
import doctofour from "@/assets/doctors/doctor-06.png"
import icon from "@/assets/home/specialities-05.png";
import { Button } from "../ui/button"

// Define doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Ruby Perrin",
    speciality: "MDS - Periodontology, BDS",
    department: "Dentist",
    experience: "9+ Exp",
    departmentIcon: icon,
    rating: 4,
    reviews: 47,
    location: "Florida, USA",
    satisfaction: "98%",
    price: "$300 - $1000",
    image: doctoone,
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    specialty: "Dermatologist",
    department: "Dentist",
    experience: "9+ Exp",
    departmentIcon: icon,
    rating: 4,
    reviews: 47,
    location: "Florida, USA",
    satisfaction: "98%",
    price: "$300 - $1000",
    image: doctotwo,
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
      specialty: "Neurologist",
    department: "Dentist",
    experience: "9+ Exp",
    departmentIcon: icon,
    rating: 4,
    reviews: 47,
    location: "Florida, USA",
    satisfaction: "98%",
    price: "$300 - $1000",
    image: doctothree,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Pediatrician",
    department: "Dentist",
    experience: "9+ Exp",
    departmentIcon: icon,
    rating: 4,
    reviews: 47,
    location: "Florida, USA",
    satisfaction: "98%",
    price: "$300 - $1000",
    image: doctofour,
  },
]

export default function DoctorsList() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { current } = sliderRef
      const scrollAmount = direction === "left" ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="doctors-list">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Our Doctors</h3>
        <Link href="/search-doctor" className="text-blue-600 text-sm">
          View All
        </Link>
      </div>

      <div className="relative">
        {/* Navigation buttons */}
        <Button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </Button>

        <Button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </Button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex-shrink-0 w-full md:w-[350px] snap-start pr-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex flex-col md:flex-row">
                  {/* Doctor info left */}
                  <div className="flex mb-4 md:mb-0">
                    <div className="mr-3">
                      <Link href="/doctor-profile">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                          <Image
                            src={doctor.image || "/placeholder.svg"}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-medium text-lg">
                        <Link href="/doctor-profile" className="text-gray-800 hover:text-blue-600">
                          {doctor.name}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-600">{doctor.speciality}</p>

                      <div className="flex items-center mt-1">
                        <div className="w-5 h-5 mr-1">
                          <Image
                            src={doctor.departmentIcon || "/placeholder.svg"}
                            alt="Speciality"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{doctor.department}</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-2">
                          {doctor.experience}
                        </span>
                      </div>

                      <div className="flex items-center mt-2">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < doctor.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({doctor.reviews})</span>
                      </div>

                      <div className="flex items-center mt-1 text-xs text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor info right */}
                  <div className="md:ml-auto">
                    <div className="flex flex-wrap justify-between md:flex-col md:items-end">
                      <div className="flex items-center text-sm mb-2">
                        <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />
                        <span>{doctor.satisfaction}</span>
                      </div>

                      <div className="flex items-center text-sm mb-4">
                        <DollarSign className="h-4 w-4 mr-1 text-gray-600" />
                        <span>{doctor.price}</span>
                      </div>

                      <Link
                        href="/bookappointment"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md text-sm transition duration-200"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

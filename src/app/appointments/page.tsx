"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, MapPin, FileText, Search, MapPinIcon as LocationPin } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/header"
import Image from "next/image"
import doctorone from "@/assets/doctors/doctor-01.png"
import doctortwo from "@/assets/doctors/doctor-03.png"
import doctorthree from "@/assets/doctors/doctor-02.png"
import doctorfour from "@/assets/doctors/doctor-06.png"
import doctorfive from "@/assets/doctors/doctor-07.png"

export default function AppointmentPage() {
  const [activeTab, setActiveTab] = useState("make")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Doctor categories
  const categories = [
    { id: "neurology", name: "Neurology", icon: "🧠" },
    { id: "cardiology", name: "Cardiology", icon: "❤️" },
    { id: "dentist", name: "Dentist", icon: "🦷" },
    { id: "urology", name: "Urology", icon: "🩺" },
    { id: "dermatology", name: "Dermatology", icon: "🧬" },
  ]

  // Mock doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      category: "cardiology",
      experience: "12+ Exp",
      rating: 4.8,
      reviews: 127,
      location: "Main Hospital, New York",
      price: "$150 - $300",
      image: doctorone,
    },
    {
      id: 2,
      name: "Dr. Ruby Perrin",
      specialty: "MDS - Periodontology, BDS",
      category: "dentist",
      experience: "8+ Exp",
      rating: 4.9,
      reviews: 47,
      location: "Florida, USA",
      price: "$300 - $1000",
      image: doctortwo,
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      category: "dermatology",
      experience: "10+ Exp",
      rating: 4.7,
      reviews: 89,
      location: "West Wing Clinic",
      price: "$200 - $350",
      image: doctorthree,
    },
    {
      id: 4,
      name: "Dr. Lisa Rodriguez",
      specialty: "Neurologist",
      category: "neurology",
      experience: "15+ Exp",
      rating: 4.9,
      reviews: 156,
      location: "Medical Center, Room 205",
      price: "$250 - $400",
      image: doctorfour,
    },
    {
      id: 5,
      name: "Dr. James Wilson",
      specialty: "Urologist",
      category: "urology",
      experience: "9+ Exp",
      rating: 4.6,
      reviews: 72,
      location: "Family Health Center",
      price: "$180 - $320",
      image: doctorfive,
    },
  ]

  // Appointment data
  const myAppointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "April 25, 2025",
      time: "10:30 AM",
      location: "Main Hospital, Floor 3",
      image: doctorone,
      status: "upcoming",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "April 28, 2025",
      time: "2:15 PM",
      location: "West Wing Clinic",
      image: doctortwo,
      status: "upcoming",
    },
    {
      id: 3,
      doctorName: "Dr. Ruby Perrin",
      specialty: "Dentist",
      date: "May 3, 2025",
      time: "11:00 AM",
      location: "Dental Care Center",
      image: doctorthree,
      status: "pending",
    },
    {
      id: 4,
      doctorName: "Dr. James Wilson",
      specialty: "Urologist",
      date: "April 15, 2025",
      time: "9:00 AM",
      location: "Family Health Center",
      image: doctorfour,
      status: "completed",
    },
  ]

  // Filter doctors based on category and search query
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory = selectedCategory === "all" || doctor.category === selectedCategory
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-gray-50 min-h-screen mt-2 pb-20">
        <div className="bg-white shadow-sm">
          <h1 className="text-2xl font-bold py-4 px-4 text-left">Book Appointment</h1>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 text-center font-medium ${
                activeTab === "make" ? "text-[#00ad9c] border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("make")}
            >
              Make Appointment
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium ${
                activeTab === "my" ? "text-[#00ad9c] border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("my")}
            >
              My Appointments
            </button>
          </div>
        </div>

        {/* Make Appointment Tab Content */}
        {activeTab === "make" && (
          <div className="px-4 py-6">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search doctors, specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button className="mt-4 w-full bg-[#00ad9c] hover:bg-cyan-600 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                SEARCH NOW
              </button>
            </div>

            {/* Specialties */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Specialities</h2>
                <a href="#" className="text-sm text-blue-600 font-medium">
                  View All
                </a>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                      selectedCategory === category.id ? "bg-blue-100 text-blue-700" : "bg-white text-gray-700"
                    }`}
                    onClick={() => setSelectedCategory(category.id === selectedCategory ? "all" : category.id)}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-2xl mb-1">
                      {category.icon}
                    </div>
                    <span className="text-xs mt-1">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Find Doctors */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Find Doctors</h2>
                <a href="/doctors" className="text-sm text-blue-600 font-medium">
                  View All
                </a>
              </div>

              {filteredDoctors.length > 0 ? (
                <div className="space-y-4">
                  {filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="p-4">
                        <div className="flex">
                          <div className="mr-4">
                            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                              {/* Use placeholder image when doctor images aren't available */}
                              {doctor.image ? (
                                <Image
                                  src={doctor.image || "/placeholder.svg"}
                                  alt={doctor.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                  👨‍⚕️
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                            <div className="flex items-center mt-1 mb-2">
                              <div className="text-sm bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                                {doctor.experience}
                              </div>
                            </div>
                            <div className="flex items-center text-sm">
                              <div className="flex text-yellow-400">
                                {"★".repeat(Math.floor(doctor.rating))}
                                {"☆".repeat(5 - Math.floor(doctor.rating))}
                              </div>
                              <span className="ml-1 text-gray-600">({doctor.reviews})</span>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <LocationPin size={14} className="mr-1" />
                              <span>{doctor.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                          <div className="text-sm font-medium">{doctor.price}</div>
                          <Link
                            href="/bookappointment"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <p className="text-gray-500">No doctors found matching your criteria</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* My Appointments Tab Content */}
        {activeTab === "my" && (
          <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Appointments</h2>
              <div className="bg-blue-50 text-blue-600 rounded-lg p-2 text-sm font-medium">
                Total: {myAppointments.length}
              </div>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
              <div className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                All{" "}
                <span className="ml-1 bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {myAppointments.length}
                </span>
              </div>
              <div className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Upcoming{" "}
                <span className="ml-1 bg-green-800 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {myAppointments.filter((a) => a.status === "upcoming").length}
                </span>
              </div>
              <div className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                Pending{" "}
                <span className="ml-1 bg-yellow-800 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {myAppointments.filter((a) => a.status === "pending").length}
                </span>
              </div>
              <div className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Completed{" "}
                <span className="ml-1 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {myAppointments.filter((a) => a.status === "completed").length}
                </span>
              </div>
            </div>

            {/* Appointments Cards */}
            <div className="space-y-4">
              {myAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                        {/* Display doctor image in my appointments section */}
                        {appointment.image ? (
                          <Image
                            src={appointment.image || "/placeholder.svg"}
                            alt={appointment.doctorName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-2xl">👨‍⚕️</div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                        <p className="text-gray-600 text-sm">{appointment.specialty}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{appointment.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{appointment.location}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      {appointment.status === "upcoming" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Upcoming
                        </span>
                      )}
                      {appointment.status === "pending" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                      {appointment.status === "completed" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Completed
                        </span>
                      )}

                      <div className="flex space-x-2">
                        {appointment.status === "completed" && (
                          <Link
                            href="/medical-records"
                            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            <FileText size={16} className="mr-1" />
                            View Records
                          </Link>
                        )}
                        {appointment.status === "upcoming" && (
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                        )}
                        {appointment.status === "pending" && (
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Confirm</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

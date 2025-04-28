"use client"

import { useState } from "react"
import Image from "next/image"
import patientone from "@/assets/patients/patient1.jpg"
import doctoone from "@/assets/doctors/doctor-02.png"
import doctotwo from "@/assets/doctors/doctor-04.png"
import doctothree from "@/assets/doctors/doctor-05.png"
import doctofour from "@/assets/doctors/doctor-06.png"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/header"
import Footer from "@/components/footer"

export default function MedicalRecordsPage() {
  const [activeTab, setActiveTab] = useState("OverView")

  const tabs = [
    { id: "OverView", label: "Overview" },
    { id: "appoinments", label: "Appointments" },
    { id: "prescriptions", label: "Prescriptions" },
    { id: "medical-records", label: "Medical Records" },
    { id: "billing", label: "Billing" },
  ]

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pb-14">
        <main className="container mx-auto px-4 py-6">
          <h1 className="text-2xl  font-bold mb-4 text-gray-800">Medical Records</h1>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Tab Navigation */}
            <div
              className="overflow-x-auto border-b border-gray-200"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex whitespace-nowrap px-4">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    className={`px-5 py-4 text-sm font-medium transition-colors duration-200 rounded-none ${
                      activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
                <Footer/>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "OverView" && (
                <div>
                  {/* Profile Info */}
                  <div className="mb-8 p-6 border rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <Image
                            src={patientone || "/placeholder.svg"}
                            alt="Michelle Fairfax"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-xl font-semibold mb-1">Michelle Fairfax</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <span>Patient ID - PT0025</span>
                          <span>Blood Group - O+</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-sm text-gray-600">
                        <p className="flex items-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          +1 504 368 6874
                        </p>
                        <p className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Florida, USA
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* About Me */}
                  <div className="mb-8 p-6 border rounded-lg shadow-sm">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-3 rounded-full shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">About me</h3>
                        <p className="text-gray-600">
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Last Booking */}
                  <div className="mb-8 p-6 border rounded-lg shadow-sm">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-3 rounded-full shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full">
                        <h3 className="text-lg font-medium mb-4">Last Booking</h3>

                        <div className="mb-4 pb-4 border-b border-gray-200">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2 text-green-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h4 className="font-medium">Dr. Darren Elder</h4>
                          </div>
                          <div className="ml-7 text-sm text-gray-600">
                            <p>Dentist</p>
                            <p>14 Nov 2019 5.00 PM</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2 text-green-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h4 className="font-medium">Dr. Darren Elder</h4>
                          </div>
                          <div className="ml-7 text-sm text-gray-600">
                            <p>Dentist</p>
                            <p>15 Nov 2019 4.00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Appointments Tab */}
              {activeTab === "appoinments" && (
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
                        <span className="font-medium text-sm">Booking Date - 16 Mar 2020</span>
                        <span className="text-sm text-gray-600">Dental</span>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                              <Image
                                src={doctoone || "/placeholder.svg"}
                                alt={`Dr. ${item === 1 ? "Ruby Perrin" : item === 2 ? "Darren Elder" : "Deborah Angel"}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h4 className="font-medium mb-1">
                              {item === 1 ? "Dr. Ruby Perrin" : item === 2 ? "Dr. Darren Elder" : "Dr. Deborah Angel"}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">Appt Date - 22 Mar 2020, 4:30 PM</p>
                            <p className="text-base font-medium text-gray-800">$150</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-5">
                          <Button
                            variant="outline"
                            className="flex items-center px-4 py-2 bg-green-100 text-green-600 border-green-200 hover:bg-green-200 hover:text-green-700 rounded-lg text-sm font-medium"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Confirm
                          </Button>
                          <Button
                            variant="outline"
                            className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 hover:text-blue-700 rounded-lg text-sm font-medium"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            View
                          </Button>
                          <Button
                            variant="outline"
                            className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm font-medium"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                              />
                            </svg>
                            Print
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Prescriptions Tab */}
              {activeTab === "prescriptions" && (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
                        <span className="font-medium text-sm">Prescription {item}</span>
                        <span className="text-sm text-gray-600">14 Nov 2019</span>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                              <Image
                                src={doctothree || "/placeholder.svg"}
                                alt={`Dr. ${item === 1 || item === 4 ? "Ruby Perrin" : item === 2 ? "Darren Elder" : "Deborah Angel"}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h4 className="font-medium mb-1">
                              {item === 1 || item === 4
                                ? "Dr. Ruby Perrin"
                                : item === 2
                                  ? "Dr. Darren Elder"
                                  : "Dr. Deborah Angel"}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">Dental</p>

                            <div className="flex flex-wrap gap-3 mt-5">
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 hover:text-blue-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                                View
                              </Button>
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                  />
                                </svg>
                                Print
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Medical Records Tab */}
              {activeTab === "medical-records" && (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
                        <span className="font-medium text-sm">#MR-0010</span>
                        <span className="text-sm text-gray-600">14 Nov 2019</span>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                              <Image
                                src={doctotwo || "/placeholder.svg"}
                                alt={`Dr. ${item === 1 || item === 4 ? "Ruby Perrin" : item === 2 ? "Darren Elder" : "Deborah Angel"}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h4 className="font-medium mb-1">
                              {item === 1 || item === 4
                                ? "Dr. Ruby Perrin"
                                : item === 2
                                  ? "Dr. Darren Elder"
                                  : "Dr. Deborah Angel"}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 text-sm text-gray-600 mb-2">
                              <span>Dental</span>
                              <span>Dental Filling</span>
                            </div>

                            <div className="mt-2 mb-4">
                              <a href="#" className="text-blue-600 underline text-sm">
                                Dental-test.pdf
                              </a>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 hover:text-blue-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                                View
                              </Button>
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                  />
                                </svg>
                                Print
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
                        <span className="font-medium text-sm">#MR-0010</span>
                        <span className="text-sm text-gray-600">Paid on - 14 Nov 2019</span>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                              <Image
                                src={doctofour || "/placeholder.svg"}
                                alt={`Dr. ${item === 1 || item === 4 ? "Ruby Perrin" : item === 2 ? "Darren Elder" : "Deborah Angel"}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h4 className="font-medium mb-1">
                              {item === 1 || item === 4
                                ? "Dr. Ruby Perrin"
                                : item === 2
                                  ? "Dr. Darren Elder"
                                  : "Dr. Deborah Angel"}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 text-sm text-gray-600 mb-2">
                              <span>Dental</span>
                              <span className="font-medium">$450</span>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 hover:text-blue-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                                View
                              </Button>
                              <Button
                                variant="outline"
                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm font-medium"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                  />
                                </svg>
                                Print
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

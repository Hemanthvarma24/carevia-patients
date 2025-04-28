"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/header";
import NavigationMenuSlider from "@/components/aboutmenu";
import Footer from "@/components/footer";

export default function Contact() {
 


  return (
    <>
      <Navbar />
      <NavigationMenuSlider />
      <div className="min-h-screen bg-gray-50 mb-8">
        {/* Hero Section */}
        <div className="bg-blue-50 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-400">
              We&apos;re here to help with all your healthcare needs. Reach out to us
              through any of the methods below.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="text-blue-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone Numbers</h4>
                    <p className="mt-1">Main Line: (555) 123-4567</p>
                    <p>Emergency: (555) 123-4568</p>
                    <p>Appointments: (555) 123-4569</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-blue-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Addresses</h4>
                    <p className="mt-1">
                      General: info@citygeneralhospital.com
                    </p>
                    <p>Support: patients@citygeneralhospital.com</p>
                    <p>Billing: billing@citygeneralhospital.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="text-blue-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="mt-1">123 Healthcare Avenue</p>
                    <p>Cityville, State 12345</p>
                    <p className="mt-2">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View on Map →
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <Clock className="text-blue-600 w-6 h-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Hours of Operation
                    </h4>
                    <div className="mt-1 grid grid-cols-2 gap-x-4">
                      <p>Monday - Friday:</p>
                      <p>8:00 AM - 8:00 PM</p>
                      <p>Saturday:</p>
                      <p>9:00 AM - 5:00 PM</p>
                      <p>Sunday:</p>
                      <p>10:00 AM - 3:00 PM</p>
                    </div>
                    <p className="font-medium mt-2 text-blue-700">
                      Emergency Services Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Send Us a Message
              </h3>
              <form>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Please select</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointments">Appointments</option>
                    <option value="billing">Billing</option>
                    <option value="medical_records">Medical Records</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the privacy policy and consent to being
                      contacted regarding my inquiry.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

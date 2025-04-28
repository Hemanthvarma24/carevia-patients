"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  FileText,
  AlarmClock,
  Clipboard,
  Activity,
  AlertCircle,
  Edit2,
  Heart,
  Thermometer,
  Weight,
  Ruler,
  Pill,
  RefreshCcw,
  Plus,
  UserRound,
  X,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import Image from "next/image";
import Profilepic from "@/assets/patients/patient10.jpg";

// Define interfaces for better type safety
interface Appointment {
  date: string;
  time: string;
  doctor: string;
  type: string;
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

interface VitalSigns {
  bloodPressure: string;
  heartRate: string;
  temperature: string;
  weight: string;
  height: string;
}

interface PatientData {
  name: string;
  id: string;
  dob: string;
  gender: string;
  contact: string;
  email: string;
  address: string;
  insurance: string;
  policyNumber: string;
  emergencyContact: string;
  appointments: Appointment[];
  medications: Medication[];
  allergies: string[];
  vitalSigns: VitalSigns;
}

export default function PatientInfoPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("info");
  const [showEditModal, setShowEditModal] = useState(false);

  // Sample patient data
  const [patient, setPatient] = useState<PatientData>({
    name: "Sarah Johnson",
    id: "PT-12345",
    dob: "1985-04-12",
    gender: "male",
    contact: "555-123-4567",
    email: "sarah.johnson@example.com",
    address: "123 Main Street, Anytown, ST 12345",
    insurance: "HealthPlus Insurance",
    policyNumber: "HP987654321",
    emergencyContact: "John Smith - 555-987-6543",
    appointments: [
      {
        date: "April 25, 2025",
        time: "10:30 AM",
        doctor: "Dr. Roberts",
        type: "Follow-up",
      },
      {
        date: "May 12, 2025",
        time: "2:00 PM",
        doctor: "Dr. Chen",
        type: "Annual Physical",
      },
    ],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily with meals",
      },
    ],
    allergies: ["Penicillin", "Latex"],
    vitalSigns: {
      bloodPressure: "120/80 mmHg",
      heartRate: "72 bpm",
      temperature: "98.6°F",
      weight: "140 lbs",
      height: "5'6",
    },
  });

  // Form state for editing
  const [formData, setFormData] = useState<PatientData>({ ...patient });

  // Handle form input changes - Fixed the 'any' type issue
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPatient({ ...formData });
    setShowEditModal(false);
  };

  // Handle navigation to appointment scheduling page
  const handleScheduleNew = () => {
    router.push(`/appointments`);
  };

  return (
    <div
      className="bg-gray-50 min-h-screen flex flex-col mb-14"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Patient Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row md:items-center border-l-4 border-blue-500">
          <div className="flex-shrink-0 w-24 h-24 mb-4 md:mb-0 md:mr-6 rounded-full overflow-hidden border-2 border-blue-200">
            <Image
              src={Profilepic || "/placeholder.svg"}
              alt="Patient"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {patient.name}
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  ID: {patient.id} • DOB: {patient.dob} • {patient.gender}
                </p>
              </div>
              <div className="mt-3 md:mt-0 flex flex-col md:items-end">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded inline-flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                  Active Patient
                </span>
                <p className="text-xs text-gray-500 mt-2">
                  Last visit: April 10, 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Calendar size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">
                Next Appointment
              </p>
              <p className="text-lg font-semibold text-gray-800">Apr 25</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <Clipboard size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Prescriptions</p>
              <p className="text-lg font-semibold text-gray-800">2 Active</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Activity size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">BP Status</p>
              <p className="text-lg font-semibold text-green-700">Normal</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <AlertCircle size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Allergies</p>
              <p className="text-lg font-semibold text-gray-800">2 Noted</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="bg-white rounded-t-lg shadow-sm border border-gray-200 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <nav className="flex">
            <button
              onClick={() => setActiveTab("info")}
              className={`px-6 py-4 text-sm font-medium border-b-2 flex items-center transition-colors ${
                activeTab === "info"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <User size={16} className="mr-2" />
              Personal Info
            </button>
            <button
              onClick={() => setActiveTab("appointments")}
              className={`px-6 py-4 text-sm font-medium border-b-2 flex items-center transition-colors ${
                activeTab === "appointments"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Calendar size={16} className="mr-2" />
              Appointments
            </button>
            <button
              onClick={() => setActiveTab("medical")}
              className={`px-6 py-4 text-sm font-medium border-b-2 flex items-center transition-colors ${
                activeTab === "medical"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Activity size={16} className="mr-2" />
              Medical Info
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-lg shadow-md p-6 mb-6 border-t-0 border border-gray-200">
          {activeTab === "info" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Personal Information
                </h2>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center transition-colors"
                  onClick={() => setShowEditModal(true)}
                >
                  <Edit2 size={16} className="mr-2" />
                  <span>Edit Info</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-6">
                    <Phone size={20} className="mt-1 mr-4 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Phone Number
                      </p>
                      <p className="text-lg text-gray-800">{patient.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <Mail size={20} className="mt-1 mr-4 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Email Address
                      </p>
                      <p className="text-lg text-gray-800">{patient.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <Calendar size={20} className="mt-1 mr-4 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Date of Birth
                      </p>
                      <p className="text-lg text-gray-800">{patient.dob}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start mb-6">
                    <MapPin size={20} className="mt-1 mr-4 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Address
                      </p>
                      <p className="text-lg text-gray-800">{patient.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <FileText size={20} className="mt-1 mr-4 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Insurance
                      </p>
                      <p className="text-lg text-gray-800">
                        {patient.insurance}
                      </p>
                      <p className="text-sm text-gray-600">
                        Policy: {patient.policyNumber}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <AlertCircle
                      size={20}
                      className="mt-1 mr-4 text-blue-500"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Emergency Contact
                      </p>
                      <p className="text-lg text-gray-800">
                        {patient.emergencyContact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div>
              <div className="bg-white rounded-lg overflow-hidden mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Calendar size={22} className="mr-2 text-blue-600" />
                    Upcoming Appointments
                  </h2>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-colors"
                    onClick={handleScheduleNew}
                  >
                    <Plus size={16} className="mr-2" />
                    <span>Schedule New</span>
                  </button>
                </div>

                {/* Card-based layout for appointments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {patient.appointments.map((appointment, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-blue-50 p-4 flex justify-between items-center border-b border-blue-100">
                        <div className="flex items-center">
                          <div className="bg-white rounded-full p-2 mr-3 shadow-sm">
                            <Calendar size={18} className="text-blue-600" />
                          </div>
                          <span className="font-medium text-blue-800">
                            {appointment.date}
                          </span>
                        </div>
                        <span className="text-sm font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {appointment.time}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <UserRound size={22} className="text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {appointment.doctor}
                            </p>
                            <p className="text-sm text-gray-600">
                              {appointment.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            <RefreshCcw size={14} className="mr-1" />
                            Reschedule
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-center mb-6">
                  <AlarmClock size={20} className="mr-3 text-blue-600" />
                  <p className="text-sm text-blue-700">
                    Please arrive 15 minutes before your scheduled appointment
                    time
                  </p>
                </div>

                {/* Past Appointments */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Past Appointments
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-l-4 border-gray-300 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-6">
                          <p className="font-medium text-gray-800">
                            March 15, 2025
                          </p>
                          <p className="text-sm text-gray-500">9:00 AM</p>
                        </div>
                        <div>
                          <p className="font-medium">Dr. Roberts</p>
                          <p className="text-sm text-gray-500">
                            Regular Checkup
                          </p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 bg-blue-50 rounded-lg transition-colors">
                        View Summary
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border-l-4 border-gray-300 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-6">
                          <p className="font-medium text-gray-800">
                            February 3, 2025
                          </p>
                          <p className="text-sm text-gray-500">2:30 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Dr. Chen</p>
                          <p className="text-sm text-gray-500">Flu Symptoms</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 bg-blue-50 rounded-lg transition-colors">
                        View Summary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "medical" && (
            <div className="space-y-8">
              {/* Health Summary with Chart */}
              <div>
                <div className="flex items-center mb-6">
                  <Activity size={22} className="mr-2 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Health Summary
                  </h2>
                </div>

                <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <Activity size={64} className="text-gray-400" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-2">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg flex flex-col items-center shadow-sm">
                    <Activity size={28} className="mb-2 text-blue-600" />
                    <p className="text-xs text-gray-600 text-center mb-1">
                      Blood Pressure
                    </p>
                    <p className="text-lg font-medium text-center text-gray-900">
                      {patient.vitalSigns.bloodPressure}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg flex flex-col items-center shadow-sm">
                    <Heart size={28} className="mb-2 text-blue-600" />
                    <p className="text-xs text-gray-600 text-center mb-1">
                      Heart Rate
                    </p>
                    <p className="text-lg font-medium text-center text-gray-900">
                      {patient.vitalSigns.heartRate}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg flex flex-col items-center shadow-sm">
                    <Thermometer size={28} className="mb-2 text-blue-600" />
                    <p className="text-xs text-gray-600 text-center mb-1">
                      Temperature
                    </p>
                    <p className="text-lg font-medium text-center text-gray-900">
                      {patient.vitalSigns.temperature}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg flex flex-col items-center shadow-sm">
                    <Weight size={28} className="mb-2 text-blue-600" />
                    <p className="text-xs text-gray-600 text-center mb-1">
                      Weight
                    </p>
                    <p className="text-lg font-medium text-center text-gray-900">
                      {patient.vitalSigns.weight}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg flex flex-col items-center shadow-sm">
                    <Ruler size={28} className="mb-2 text-blue-600" />
                    <p className="text-xs text-gray-600 text-center mb-1">
                      Height
                    </p>
                    <p className="text-lg font-medium text-center text-gray-900">
                      {patient.vitalSigns.height}
                    </p>
                  </div>
                </div>
              </div>

              {/* Medications */}
              <div>
                <div className="flex items-center mb-6">
                  <Pill size={22} className="mr-2 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Current Medications
                  </h2>
                </div>

                <div className="space-y-4 mb-6">
                  {patient.medications.map((med, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-14 h-14 rounded-md bg-purple-100 flex items-center justify-center mr-4">
                        <Pill size={28} className="text-purple-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900 text-lg">
                          {med.name} - {med.dosage}
                        </p>
                        <p className="text-sm text-gray-600">{med.frequency}</p>
                        <div className="mt-2 flex">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-1.5"></span>
                            Active
                          </span>
                        </div>
                      </div>
                      <button className="ml-4 text-gray-500 hover:text-blue-600">
                        <Edit2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-lg flex items-center shadow-sm border border-blue-100">
                  <RefreshCcw size={24} className="mr-4 text-blue-600" />
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-blue-800">
                      Refill Reminder
                    </p>
                    <p className="text-xs text-blue-600">
                      Lisinopril due for refill in 5 days
                    </p>
                  </div>
                  <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                    Refill Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Edit Patient Information Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Patient Information
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="insurance"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="policyNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Policy Number
                    </label>
                    <input
                      type="text"
                      id="policyNumber"
                      name="policyNumber"
                      value={formData.policyNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="emergencyContact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Emergency Contact
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

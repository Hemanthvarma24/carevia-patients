"use client";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Clock,
  Heart,
  AlertCircle,
  Shield,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import profile from "@/assets/patients/patient1.jpg";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function PatientProfile() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Header with patient info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src={profile}
                  alt="Patient"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Sarah Johnson
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="text-blue-600 bg-blue-50 border-blue-200"
                    >
                      Patient ID: P-20542
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-green-600 bg-green-50 border-green-200"
                    >
                      Active
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href="/medical-records">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <FileText className="w-4 h-4" />
                      Medical Records
                    </Button>
                  </Link>

                  <Link href="/bookappointment">
                    <Button
                      size="sm"
                      className="flex items-center bg-blue-400 gap-1"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4 text-blue-500" />
                  <span>34 years, Female</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>sarah.johnson@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>123 Main Street, Boston, MA 02108</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Blue Cross Insurance</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <AlertCircle className="w-4 h-4 text-blue-500" />
                  <span>Blood Type: A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" /> Vital Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="font-medium">Blood Pressure</span>
                    <span className="text-gray-600">120/80 mmHg</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="font-medium">Heart Rate</span>
                    <span className="text-gray-600">72 bpm</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="font-medium">BMI</span>
                    <span className="text-gray-600">22.5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="font-medium">Glucose Level</span>
                    <span className="text-gray-600">95 mg/dL</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" /> Upcoming
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    doctor: "Dr. Michael Chen",
                    specialty: "Cardiologist",
                    date: "May 15, 2023",
                    time: "10:30 AM",
                  },
                  {
                    doctor: "Dr. Emily Rodriguez",
                    specialty: "Dermatologist",
                    date: "May 22, 2023",
                    time: "2:15 PM",
                  },
                ].map((appointment, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-3 py-1"
                  >
                    <p className="font-medium">{appointment.doctor}</p>
                    <p className="text-sm text-gray-600">
                      {appointment.specialty}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <Calendar className="w-3 h-3" /> {appointment.date}
                      <Clock className="w-3 h-3 ml-2" /> {appointment.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" /> Allergies &
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Badge variant="destructive" className="mt-0.5">
                    Allergy
                  </Badge>
                  <div>
                    <p className="font-medium">Penicillin</p>
                    <p className="text-sm text-gray-600">
                      Severe reaction - Anaphylaxis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive" className="mt-0.5">
                    Allergy
                  </Badge>
                  <div>
                    <p className="font-medium">Peanuts</p>
                    <p className="text-sm text-gray-600">
                      Moderate reaction - Hives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge
                    variant="secondary"
                    className="mt-0.5 bg-amber-100 text-amber-800 hover:bg-amber-100"
                  >
                    Alert
                  </Badge>
                  <div>
                    <p className="font-medium">Pregnancy</p>
                    <p className="text-sm text-gray-600">Second trimester</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Medical History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" /> Medical History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    condition: "Asthma",
                    diagnosed: "2010",
                    status: "Controlled with medication",
                  },
                  {
                    condition: "Hypertension",
                    diagnosed: "2018",
                    status: "Managed with diet and medication",
                  },
                  {
                    condition: "Appendectomy",
                    diagnosed: "2015",
                    status: "Surgical procedure completed",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.condition}</h4>
                      <span className="text-sm text-gray-500">
                        Diagnosed: {item.diagnosed}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.status}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" /> Current
                Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    medication: "Albuterol",
                    dosage: "90mcg",
                    frequency: "As needed for asthma symptoms",
                    prescribed: "Dr. James Wilson",
                  },
                  {
                    medication: "Lisinopril",
                    dosage: "10mg",
                    frequency: "Once daily",
                    prescribed: "Dr. Michael Chen",
                  },
                  {
                    medication: "Prenatal Vitamins",
                    dosage: "1 tablet",
                    frequency: "Once daily",
                    prescribed: "Dr. Sarah Martinez",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.medication}</h4>
                      <span className="text-sm text-gray-500">
                        {item.dosage}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.frequency}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Prescribed by: {item.prescribed}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Visits and Emergency Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" /> Recent Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "April 10, 2023",
                    doctor: "Dr. Michael Chen",
                    reason: "Routine checkup",
                    notes:
                      "Blood pressure slightly elevated. Follow-up in 3 months.",
                  },
                  {
                    date: "February 22, 2023",
                    doctor: "Dr. Emily Rodriguez",
                    reason: "Skin rash",
                    notes: "Prescribed topical cream. Condition improved.",
                  },
                  {
                    date: "January 5, 2023",
                    doctor: "Dr. Sarah Martinez",
                    reason: "Pregnancy confirmation",
                    notes:
                      "Confirmed pregnancy. Estimated 6 weeks. Scheduled prenatal care plan.",
                  },
                ].map((visit, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">{visit.reason}</h4>
                      <span className="text-sm text-gray-500">
                        {visit.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Doctor: {visit.doctor}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{visit.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-gray-600" /> Emergency
                Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Robert Johnson",
                    relation: "Husband",
                    phone: "+1 (555) 987-6543",
                    email: "robert.johnson@example.com",
                  },
                  {
                    name: "Mary Williams",
                    relation: "Mother",
                    phone: "+1 (555) 456-7890",
                    email: "mary.williams@example.com",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">{contact.name}</h4>
                      <span className="text-sm text-gray-500">
                        {contact.relation}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 mt-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3 text-gray-500" />{" "}
                        {contact.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3 text-gray-500" />{" "}
                        {contact.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
          <Footer/>
      </div>
    </>
  );
}
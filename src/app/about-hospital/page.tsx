import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import building from "@/assets/home/building-view.jpg";
import patientone from "@/assets/patients/patient.jpg";
import patienttwo from "@/assets/patients/patient3.jpg";
import patientthree from "@/assets/patients/patient5.jpg";
import doctoone from "@/assets/doctors/doctor-02.png";
import doctotwo from "@/assets/doctors/doctor-04.png";
import doctothree from "@/assets/doctors/doctor-05.png";
import doctofour from "@/assets/doctors/doctor-06.png";
import SpecialtiesSlider from "@/components/appoinment/specialties-slider";
import team from "@/assets/home/team.jpg"
import NavigationMenuSlider from "@/components/aboutmenu";

export default function AboutHospital() {
  return (
    <div className="flex min-h-screen flex-col mb-16">
      <Navbar />
      <NavigationMenuSlider/>
      <main className="flex-1">
     {/* Hero Section */}
<section className="relative">
  <div className="absolute inset-0 z-0">
    <Image
      src={building}
      alt="Hospital Building"
      fill
      className="object-cover brightness-50"
      priority
    />
  </div>
  <div className="container relative z-10 px-4 py-32">
    <div className="mx-auto max-w-3xl text-center text-white">
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/appointments"
          className="inline-flex items-center justify-center rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
        >
          Book an Appointment
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>


        {/* About Section */}
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                About Carevia Hospital
              </h2>
              <p className="mb-8 text-muted-foreground">
                Providing exceptional healthcare services to our community for
                over 35 years
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide compassionate, accessible, high-quality healthcare
                  to enhance the health and well-being of the communities we
                  serve.
                </p>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the region&apos;s most trusted healthcare provider,
                  delivering innovative care and exceptional service that
                  transforms the health of our community, one person at a time.
                </p>
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Excellence in all aspects of patient care</li>
                  <li>Compassion and respect for every individual</li>
                  <li>Innovation in medical practices and technology</li>
                  <li>Integrity in all our actions and decisions</li>
                  <li>Collaboration among healthcare professionals</li>
                </ul>
              </div>
              <div className="relative min-h-[300px] overflow-hidden rounded-lg md:min-h-full">
                <Image
                  src={team}
                  alt="Hospital Staff"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Medical Specialties
              </h2>
              <p className="mb-8 text-muted-foreground">
                Comprehensive healthcare services delivered by expert
                specialists
              </p>
            </div>
            <SpecialtiesSlider/>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Top Doctors
              </h2>
              <p className="mb-8 text-muted-foreground">
                Experienced medical professionals dedicated to providing the
                highest quality care
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold">{doctor.name}</h3>
                    <p className="mb-2 text-sm font-medium text-primary">
                      {doctor.specialty}
                    </p>
                    <p className="mb-4 text-xs text-muted-foreground">
                      {doctor.credentials}
                    </p>
                    <Link
                      href={`/doctors/${doctor.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      View profile
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/doctors"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
              >
                View All Doctors
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-12 text-white md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">35+</div>
                <div className="mt-2 text-sm font-medium">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">150+</div>
                <div className="mt-2 text-sm font-medium">
                  Medical Specialists
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">50k+</div>
                <div className="mt-2 text-sm font-medium">
                  Patients Annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">25+</div>
                <div className="mt-2 text-sm font-medium">
                  Specialized Departments
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Patient Testimonials
              </h2>
              <p className="mb-8 text-muted-foreground">
                What our patients say about their experience at Carevia
                Hospital
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={patientone}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-xs text-muted-foreground">
                      Cardiology Patient
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                &apos;The care I received at Carevia Hospital was exceptional. The
                  doctors and nurses were not only highly skilled but also
                  compassionate and attentive to my needs&rsquo;&apos;
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={patienttwo}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Rodriguez</h4>
                    <p className="text-xs text-muted-foreground">
                      Orthopedic Patient
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                &lsquo;After my knee surgery, the rehabilitation team at Carevia
                  was instrumental in my recovery. Their expertise and
                  encouragement helped me get back on my feet faster than
                  expected&rsquo;&lsquo;
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={patientthree}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emily Chen</h4>
                    <p className="text-xs text-muted-foreground">
                      Maternity Patient
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                &apos;The maternity team at Carevia made my childbirth experience
                  as comfortable as possible. Their support and expertise gave
                  me confidence during a challenging time&rsquo;&apos;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


// Sample data for doctors
const doctors = [
  {
    id: "dr-smith",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    credentials: "MD, FACC",
    image: doctoone,
  },
  {
    id: "dr-patel",
    name: "Dr. Priya Patel",
    specialty: "Neurology",
    credentials: "MD, PhD",
    image: doctotwo,
  },
  {
    id: "dr-wilson",
    name: "Dr. Sarah Wilson",
    specialty: "Pediatrics",
    credentials: "MD, FAAP",
    image: doctothree,
  },
  {
    id: "dr-chen",
    name: "Dr. David Chen",
    specialty: "Orthopedics",
    credentials: "MD, FAAOS",
    image: doctofour,
  },
];

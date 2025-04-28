import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Lightbulb,
  HelpCircle,
  Stethoscope,
  Building,
  Users,
  Newspaper,
  Tag,
  Phone,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import building from "@/assets/home/building-view.jpg";
import icon from "@/assets/home/image-icon.png"

export default function AboutUs() {
  const menuItems = [
    {
      title: "About Hospital",
      icon: <Building2 className="h-6 w-6 text-white" />,
      href: "/about-hospital",
      bgColor: "bg-emerald-500",
    },
    {
      title: "Vision & Mission",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      href: "/vision-mission",
      bgColor: "bg-slate-600",
    },
    {
      title: "FAQ",
      icon: <HelpCircle className="h-6 w-6 text-white" />,
      href: "/faq",
      bgColor: "bg-cyan-500",
    },
    {
      title: "Specialities",
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      href: "/specialities",
      bgColor: "bg-pink-500",
    },
    {
      title: "Facilities",
      icon: <Building className="h-6 w-6 text-white" />,
      href: "/facilities",
      bgColor: "bg-purple-500",
    },
    {
      title: "Our Doctors",
      icon: <Users className="h-6 w-6 text-white" />,
      href: "/doctors",
      bgColor: "bg-blue-500",
    },
    {
      title: "Gallery",
      icon: (
        <div className="h-6 w-6 relative">
          <Image src={icon} alt="Gallery Icon" fill className="object-contain" />
        </div>
      ),
      href: "/gallery",
      bgColor: "bg-green-600",
    },
    {
      title: "News & Events",
      icon: <Newspaper className="h-6 w-6 text-white" />,
      href: "/news-events",
      bgColor: "bg-amber-500",
    },
    {
      title: "Offers",
      icon: <Tag className="h-6 w-6 text-white" />,
      href: "/offers",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Contact Info",
      icon: <Phone className="h-6 w-6 text-white" />,
      href: "/contact",
      bgColor: "bg-rose-500",
    },
  ];
  
  

  return (
    <div className="flex flex-col min-h-screen mb-12">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-blue-50 to-white">
        {/* Banner Section - Improved */}
        <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-b-3xl">
          <Image
            src={building}
            alt="Hospital Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70 flex items-center justify-center">
            <div className="text-center text-white p-6 md:p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Welcome to Carevia
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Providing exceptional healthcare with compassion and excellence.
                Your health is our priority, and w&lsquo;re committed to your
                well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Menu Section - Improved Grid Layout */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Our Hospital
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div
                  className={`${item.bgColor} rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl`}
                >
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-800 text-center">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Values Section */}
        <section className="py-6 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Carevia, we&lsquo;re guided by these principles in everything we do to ensure 
                the highest standard of care for our patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600 text-center">
                  We put patients first in everything we do, focusing on individual needs with compassion and respect.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6 mx-auto">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Clinical Excellence</h3>
                <p className="text-gray-600 text-center">
                  We maintain the highest standards in healthcare delivery through continuous improvement and innovation.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-amber-500 flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We embrace cutting-edge medical technologies and approaches to provide the best possible care.
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
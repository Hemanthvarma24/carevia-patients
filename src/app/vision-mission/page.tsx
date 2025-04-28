"use client"

import { ChevronDown } from 'lucide-react';
import Footer from '@/components/footer';
import NavigationMenuSlider from '@/components/aboutmenu';
import Navbar from '@/components/header';

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 mb-18">
        <Navbar />
            <NavigationMenuSlider/>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 py-4">
                <h3 className="text-2xl font-bold text-white text-center">Our Vision</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  To be the leading healthcare provider recognized for excellence in patient care, 
                  innovative medical practices, and community wellness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Transform healthcare through innovation and compassion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Create a healthier community through preventive care and education
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Be the trusted healthcare partner for every family we serve
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 py-4">
                <h3 className="text-2xl font-bold text-white text-center">Our Mission</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  To deliver exceptional, compassionate healthcare that improves the well-being of our patients 
                  and strengthens our community through accessible, high-quality medical services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Provide patient-centered care with empathy and respect
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Ensure medical excellence through continuous learning and advancement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1">
                      <ChevronDown size={16} />
                    </span>
                    <span className="text-gray-700">
                      Foster a collaborative environment that values every team member
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-700">
                We treat each patient with kindness, empathy, and respect, recognizing their unique needs.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in healthcare delivery and continuous improvement.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
              <p className="text-gray-700">
                We collaborate effectively across disciplines to provide coordinated, comprehensive care.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and approaches to enhance patient outcomes and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="relative bg-blue-600">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Exceptional Care for a Healthier Tomorrow
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8">
              At MediCare Hospital, we combine advanced medical technology with 
              compassionate care to provide the best healthcare experience for our patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition">
                Our Services
              </button>
              <button className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition">
                Find a Doctor
              </button>
            </div>
          </div>
        </div>
      </section>


  <Footer/>
    </div>
  );
}
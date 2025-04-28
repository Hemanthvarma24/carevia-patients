"use client"


import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationMenuSlider from '@/components/aboutmenu';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import eventone from "@/assets/home/eventone.jpg";
import eventtwo from "@/assets/home/events.jpg";
import eventthree from "@/assets/home/healthtrip.jpg";
import eventfour from "@/assets/home/health.jpg";

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample news and events data
  const items = [
    {
      id: 1,
      type: 'news',
      title: 'New Cancer Treatment Center Opening',
      date: 'April 20, 2025',
      image: eventone,
      excerpt: 'Our hospital is proud to announce the opening of a state-of-the-art cancer treatment center that will serve our community with cutting-edge care.',
      category: 'Facility Updates'
    },
    {
      id: 2,
      type: 'event',
      title: 'Free Health Screening Day',
      date: 'May 15, 2025',
      image: eventtwo,
      excerpt: 'Join us for our annual free health screening day. Services include blood pressure checks, glucose testing, and basic health consultations.',
      category: 'Community Outreach'
    },
    {
      id: 3,
      type: 'news',
      title: 'Dr. Sarah Johnson Joins Cardiology Team',
      date: 'April 10, 2025',
      image: eventthree,
      excerpt: 'We are pleased to welcome Dr. Sarah Johnson, a board-certified cardiologist with over 15 years of experience, to our medical team.',
      category: 'Staff Updates'
    },
    {
      id: 4,
      type: 'event',
      title: 'Diabetes Management Workshop',
      date: 'May 22, 2025',
      image: eventfour,
      excerpt: 'Learn effective strategies for managing diabetes with our expert endocrinologists. Registration required.',
      category: 'Education'
    },
    {
      id: 5,
      type: 'news',
      title: 'Hospital Recognized for Patient Safety Excellence',
      date: 'March 30, 2025',
      image: eventtwo,
      excerpt: 'Our hospital has received the prestigious Patient Safety Excellence Award for the third consecutive year.',
      category: 'Awards'
    },
    {
      id: 6,
      type: 'event',
      title: 'Blood Drive',
      date: 'June 5, 2025',
      image: eventone,
      excerpt: 'Partner with us to help save lives. Our quarterly blood drive will be held in the main lobby from 9am to 4pm.',
      category: 'Community Outreach'
    }
  ];

  // Filter items based on active tab
  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.type === activeTab);

  return (
      <><Navbar /><NavigationMenuSlider /><div className="min-h-screen bg-gray-50 mb-14">
          



          <main>
              {/* Hero Section */}
              <div className="bg-white text-white">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                      <div className="text-center">
                          <h1 className="text-3xl md:text-4xl text-black font-bold mb-2">News & Events</h1>
                          <p className="text-blue-400 max-w-2xl mx-auto">Stay updated with the latest news and upcoming events at City General Hospital</p>
                      </div>
                  </div>
              </div>

              {/* Content */}
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-8">
                      <div className="flex justify-center sm:justify-start space-x-4">
                          <button
                              onClick={() => setActiveTab('all')}
                              className={`pb-4 text-sm font-medium ${activeTab === 'all'
                                      ? 'border-b-2 border-blue-600 text-blue-600'
                                      : 'text-gray-500 hover:text-gray-700'}`}
                          >
                              All
                          </button>
                          <button
                              onClick={() => setActiveTab('news')}
                              className={`pb-4 text-sm font-medium ${activeTab === 'news'
                                      ? 'border-b-2 border-blue-600 text-blue-600'
                                      : 'text-gray-500 hover:text-gray-700'}`}
                          >
                              News
                          </button>
                          <button
                              onClick={() => setActiveTab('event')}
                              className={`pb-4 text-sm font-medium ${activeTab === 'event'
                                      ? 'border-b-2 border-blue-600 text-blue-600'
                                      : 'text-gray-500 hover:text-gray-700'}`}
                          >
                              Events
                          </button>
                      </div>
                  </div>

                  {/* News/Events Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden transition-transform duration-200 hover:transform hover:scale-105">
                              <Image
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-48 object-cover" />
                              <div className="p-6">
                                  <div className="flex justify-between items-center mb-2">
                                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.type === 'event' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                          {item.type === 'event' ? 'Event' : 'News'}
                                      </span>
                                      <span className="text-sm text-gray-500">{item.date}</span>
                                  </div>
                                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                  <div className="flex justify-between items-center">
                                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                          {item.category}
                                      </span>
                                      <Link href={`/news-events/${item.id}`}>
                                          <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                              Read more →
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-12 flex justify-center">
                      <nav className="inline-flex rounded-md shadow">
                          <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                              Previous
                          </a>
                          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-gray-50">
                              1
                          </a>
                          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                              2
                          </a>
                          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                              3
                          </a>
                          <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                              Next
                          </a>
                      </nav>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="mt-16 bg-blue-50 rounded-lg p-6 md:p-8">
                      <div className="md:flex md:items-center md:justify-between">
                          <div className="md:w-2/3">
                              <h3 className="text-xl font-semibold text-blue-800 mb-2">Subscribe to Our Newsletter</h3>
                              <p className="text-blue-600 mb-4 md:mb-0">Get the latest news and event notifications delivered directly to your inbox.</p>
                          </div>
                          <div className="md:w-1/3">
                              <div className="flex">
                                  <input
                                      type="email"
                                      placeholder="Enter your email"
                                      className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                                      Subscribe
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>

      
          <Footer/>
      </div></>
  );
}
"use client"

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faMapMarkerAlt, 
  faStar as faStarSolid,
  faChevronLeft,
  faChevronRight,
  faCheckCircle,
  faTimes,
  faUserMd,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

// Define types for our data structures
interface TimeSlot {
  id: number;
  from: string;
  to: string;
}

interface CalendarDay {
  day: number;
  date: Date;
  dayName: string;
  isToday: boolean;
}

interface CardDetails {
  name: string;
  number: string;
  month: string;
  year: string;
  cvv: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  imageUrl?: string;
}

export default function BookAppointment() {
  const [activeTab, setActiveTab] = useState<string>('time-date');
  const [selectedDate, setSelectedDate] = useState<CalendarDay | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: ''
  });
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  
  // Current date for calendar
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  
  // Doctor information
  const selectedDoctor: Doctor = {
    id: 1,
    name: 'Dr. Darren Elder',
    specialty: 'Cardiologist',
    rating: 4,
    location: 'Florida, USA'
  };
  
  // Time slots
  const timeSlots: TimeSlot[] = [
    { id: 1, from: '9:00 AM', to: '10:00 AM' },
    { id: 2, from: '10:00 AM', to: '11:00 AM' },
    { id: 3, from: '11:00 AM', to: '12:00 PM' },
    { id: 4, from: '2:00 PM', to: '3:00 PM' },
    { id: 5, from: '3:00 PM', to: '4:00 PM' },
    { id: 6, from: '4:00 PM', to: '5:00 PM' }
  ];

  // Generate dates for the current month view
  useEffect(() => {
    const generateCalendarDays = () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      // Create an array of date objects for the current month
      const days: CalendarDay[] = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        days.push({
          day: i,
          date: date,
          dayName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][date.getDay()],
          isToday: isToday(date)
        });
      }
      
      setCalendarDays(days);
    };
    
    generateCalendarDays();
  }, [currentMonth]);

  // Check if date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };

  // Functions to navigate between months
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };

  // Function to handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to handle date selection
  const handleDateSelect = (day: CalendarDay) => {
    setSelectedDate(day);
  };

  // Function to handle time slot selection
  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // Function to proceed to next tab
  const handleContinue = () => {
    if (activeTab === 'time-date' && selectedDate && selectedTimeSlot) {
      setActiveTab('checkout');
    } else if (activeTab === 'checkout') {
      setActiveTab('payment');
    }
  };

  // Handle card detail changes
  const handleCardDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  // Handle form submission
  const handlePaymentSubmit = () => {
    // Check if all required fields are filled
    const { name, number, month, year, cvv } = cardDetails;
    if (name && number && month && year && cvv && termsAccepted) {
      // Show success toast
      setShowToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
        // Reset form and go back to first tab for a new appointment
        resetForm();
      }, 3000);
    }
  };

  // Reset form after successful payment
  const resetForm = () => {
    setActiveTab('time-date');
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setCardDetails({
      name: '',
      number: '',
      month: '',
      year: '',
      cvv: ''
    });
    setTermsAccepted(false);
  };

  // Close toast manually
  const closeToast = () => {
    setShowToast(false);
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get month and year display
  const monthYearDisplay = (): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return currentMonth.toLocaleDateString('en-US', options);
  };

  // Check if all payment details are filled
  const isPaymentFormValid = (): boolean => {
    const { name, number, month, year, cvv } = cardDetails;
    return Boolean(name && number && month && year && cvv && termsAccepted);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/appointments" passHref>
            <Button className="flex items-center text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 shadow-sm px-4 py-2 rounded-md">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Appointments
            </Button>
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg relative pb-16">
          {/* Success Toast */}
          {showToast && (
            <div className="fixed top-4 right-4 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>Payment successful! Your appointment has been fixed.</span>
              </div>
              <Button onClick={closeToast} className="ml-4 text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          )}

          {/* Tabbar with improved spacing */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex space-x-4 py-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <Button
                onClick={() => handleTabChange('time-date')}
                className={`py-3 px-6 whitespace-nowrap rounded-md bg-[#f2f3f5] focus:outline-none ${activeTab === 'time-date'
                  ? 'text-black border-b-2 border-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                Time and Date
              </Button>
              <Button
                onClick={() => handleTabChange('checkout')}
                disabled={!selectedDate || !selectedTimeSlot}
                className={`py-3 px-6 whitespace-nowrap rounded-md bg-[#f2f3f5] focus:outline-none ${activeTab === 'checkout'
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : (!selectedDate || !selectedTimeSlot) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Checkout
              </Button>
              <Button
                onClick={() => handleTabChange('payment')}
                disabled={activeTab !== 'checkout' && activeTab !== 'payment'}
                className={`py-3 px-6 whitespace-nowrap rounded-md bg-[#f2f3f5] focus:outline-none ${activeTab === 'payment'
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : (activeTab !== 'checkout' && activeTab !== 'payment') ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Payment
              </Button>
            </div>
          </div>

          {/* Tab Content with improved spacing */}
          <div className="p-6">
            {/* Time and Date Tab */}
            {activeTab === 'time-date' && (
              <div className="space-y-8">
                {/* Month Selector */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                  <Button
                    onClick={goToPreviousMonth}
                    className="p-2 text-gray-500 bg-[#f2f3f5] hover:text-blue-600 rounded-full"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                  </Button>
                  <span className="text-lg font-medium">{monthYearDisplay()}</span>
                  <Button
                    onClick={goToNextMonth}
                    className="p-2 text-gray-500 bg-[#f2f3f5] hover:text-blue-600 rounded-full"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                  </Button>
                </div>

                {/* Full Month View */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <div className="grid grid-cols-7 gap-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                      <div key={index} className="text-center text-xs text-gray-500 font-medium py-2">
                        {day}
                      </div>
                    ))}

                    {/* Empty cells for days before the 1st of the month */}
                    {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() }).map((_, i) => (
                      <div key={`empty-start-${i}`} className="text-center py-2"></div>
                    ))}

                    {/* Calendar days */}
                    {calendarDays.map((day, index) => (
                      <div
                        key={`day-${index}`}
                        onClick={() => handleDateSelect(day)}
                        className={`text-center py-2 text-sm cursor-pointer rounded-full ${selectedDate && selectedDate.day === day.day
                          ? 'bg-blue-600 text-white'
                          : day.isToday
                            ? 'border border-blue-500 text-blue-600'
                            : 'hover:bg-gray-100'}`}
                      >
                        {day.day}
                      </div>
                    ))}

                    {/* Empty cells for days after the end of the month */}
                    {Array.from({ length: (42 - calendarDays.length - new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()) % 7 }).map((_, i) => (
                      <div key={`empty-end-${i}`} className="text-center py-2"></div>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Available Time Slots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.id}
                        onClick={() => handleTimeSlotSelect(slot)}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedTimeSlot && selectedTimeSlot.id === slot.id
                          ? 'border-blue-600 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium">Time Slot {slot.id}</span>
                          <span className="text-gray-500">
                            <FontAwesomeIcon icon={faClock} />
                          </span>
                        </div>
                        <div className="flex justify-between space-x-4">
                          <div className="w-1/2">
                            <label className="block text-sm text-gray-500 mb-1">From</label>
                            <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-50">
                              {slot.from}
                            </div>
                          </div>
                          <div className="w-1/2">
                            <label className="block text-sm text-gray-500 mb-1">To</label>
                            <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-50">
                              {slot.to}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Button */}
                <Button
                  onClick={handleContinue}
                  disabled={!selectedDate || !selectedTimeSlot}
                  className={`w-full py-4 px-6 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!selectedDate || !selectedTimeSlot
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Checkout Tab */}
            {activeTab === 'checkout' && (
              <div className="space-y-8">
                {/* Doctor Info with Specialty */}
                <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-50 px-6 py-4 border-b">
                    <h4 className="font-medium text-lg text-blue-800">Specialist Information</h4>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faUserMd} className="text-blue-600 w-10 h-10" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl">{selectedDoctor.name}</h4>
                        <div className="text-blue-600 font-medium text-md mt-1">
                          {selectedDoctor.specialty}
                        </div>
                        <div className="flex text-yellow-400 my-2">
                          {[...Array(selectedDoctor.rating)].map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStarSolid} className="w-5 h-5" />
                          ))}
                          {[...Array(5 - selectedDoctor.rating)].map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStarRegular} className="w-5 h-5" />
                          ))}
                          <span className="ml-2 text-gray-600 text-sm">(47)</span>
                        </div>
                        <div className="text-gray-600 text-sm">
                          <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            {selectedDoctor.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <h5 className="font-medium text-lg">Booking Summary</h5>
                  </div>

                  {/* Appointment Details */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Specialist</span>
                        <span className="font-medium text-blue-700">
                          {selectedDoctor.name} ({selectedDoctor.specialty})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date</span>
                        <span className="font-medium">
                          {selectedDate ? formatDate(selectedDate.date) : 'Not selected'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time</span>
                        <span className="font-medium">
                          {selectedTimeSlot ? `${selectedTimeSlot.from} - ${selectedTimeSlot.to}` : 'Not selected'}
                        </span>
                      </div>
                      <div className="border-t pt-4 mt-4"></div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Consultation Fee</span>
                        <span className="font-medium">$100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Booking Fee</span>
                        <span className="font-medium">$10</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total and Continue Button */}
                <Button
                  onClick={handleContinue}
                  className="w-full flex justify-between py-4 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>Total - $110</span>
                  <span>Continue to Payment</span>
                </Button>
              </div>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div className="space-y-8">
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <h5 className="font-medium text-lg">Payment Information</h5>
                  </div>

                  <div className="p-6">
                    {/* Credit Card Option */}
                    <label className="flex items-center justify-between p-4 border rounded-lg mb-6 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center">
                        <input type="radio" name="payment-method" value="credit-card" defaultChecked className="mr-4" />
                        <span className="font-medium">Credit Card</span>
                      </div>
                      <div className="h-8 w-12 bg-blue-100 rounded"></div>
                    </label>

                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={cardDetails.name}
                          onChange={handleCardDetailChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="number"
                          value={cardDetails.number}
                          onChange={handleCardDetailChange}
                          placeholder="1234 5678 9876 5432"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>

                      <div className="flex space-x-6">
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Month <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="month"
                            value={cardDetails.month}
                            onChange={handleCardDetailChange}
                            placeholder="MM"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Year <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="year"
                            value={cardDetails.year}
                            onChange={handleCardDetailChange}
                            placeholder="YY"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardDetailChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </form>
                  </div>
                </div>

                {/* PayPal Option */}
                <div className="border rounded-lg p-6 shadow-sm">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                      <input type="radio" name="payment-method" value="paypal" className="mr-4" />
                      <span className="font-medium">Paypal</span>
                    </div>
                    <div className="h-8 w-20 bg-blue-100 rounded"></div>
                  </label>
                </div>

                {/* Appointment Summary in Payment Tab */}
                <div className="border rounded-lg p-6 bg-blue-50">
                  <h5 className="font-medium text-blue-800 mb-4">Appointment Summary</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Specialist:</span>
                      <span className="font-medium">{selectedDoctor.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Specialty:</span>
                      <span className="font-medium">{selectedDoctor.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Date:</span>
                      <span className="font-medium">{selectedDate ? formatDate(selectedDate.date) : 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Time:</span>
                      <span className="font-medium">{selectedTimeSlot ? `${selectedTimeSlot.from} - ${selectedTimeSlot.to}` : 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t mt-3">
                      <span className="font-medium">Total Amount:</span>
                      <span className="font-bold text-blue-700">$110</span>
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start mt-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="mt-1 mr-3" />
                  <span className="text-gray-700">
                    I have read and accept <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                  </span>
                </label>

                {/* Confirm and Pay Button */}
                <Button
                  onClick={handlePaymentSubmit}
                  disabled={!isPaymentFormValid()}
                  className={`w-full py-4 px-6 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isPaymentFormValid()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Confirm and Pay
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
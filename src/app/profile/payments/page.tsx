"use client"

import { useState } from 'react';
import { CreditCard, Landmark, Calendar, User, CheckCircle, X } from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/header';

export default function MedicalPaymentPage() {
  const [activeTab, setActiveTab] = useState('payment');
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPaymentSuccess(true);
    }, 1500);
  };

  const closeSuccessModal = () => {
    setShowPaymentSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans mb-16">
        <Navbar/>
    

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Invoice Header */}
          <div className="bg-gray-100 p-4 md:p-6 border-b">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Medical Invoice #INV-2025-0423</h2>
                <p className="text-gray-600 mt-1">Due Date: April 30, 2025</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                  Pending Payment
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b">
            <div className="flex">
              <button
                className={`px-4 py-3 font-medium ${activeTab === 'details' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('details')}
              >
                Invoice Details
              </button>
              <button
                className={`px-4 py-3 font-medium ${activeTab === 'payment' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('payment')}
              >
                Make Payment
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-6">
            {activeTab === 'details' ? (
              <div>
                {/* Patient Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Patient Information</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p><span className="font-medium">Patient Name:</span> John Doe</p>
                    <p><span className="font-medium">Patient ID:</span> PAT-12345</p>
                    <p><span className="font-medium">Visit Date:</span> April 15, 2025</p>
                  </div>
                </div>

                {/* Invoice Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Invoice Details</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 font-medium">Description</th>
                          <th className="p-3 font-medium">Category</th>
                          <th className="p-3 font-medium text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3">Emergency Room Visit</td>
                          <td className="p-3">Hospital</td>
                          <td className="p-3 text-right">$1,200.00</td>
                        </tr>
                        <tr>
                          <td className="p-3">X-Ray Examination</td>
                          <td className="p-3">Hospital</td>
                          <td className="p-3 text-right">$350.00</td>
                        </tr>
                        <tr>
                          <td className="p-3">Dr. Smith Consultation</td>
                          <td className="p-3">Doctor&lsquo;s Fee</td>
                          <td className="p-3 text-right">$275.00</td>
                        </tr>
                        <tr>
                          <td className="p-3">Prescription Medication</td>
                          <td className="p-3">Medical</td>
                          <td className="p-3 text-right">$85.00</td>
                        </tr>
                        <tr>
                          <td className="p-3">Laboratory Tests</td>
                          <td className="p-3">Medical</td>
                          <td className="p-3 text-right">$190.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-50">
                          <td className="p-3 font-bold" colSpan={2}>Subtotal</td>
                          <td className="p-3 text-right font-bold">$2,100.00</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3" colSpan={2}>Insurance Coverage (70%)</td>
                          <td className="p-3 text-right text-green-600">-$1,470.00</td>
                        </tr>
                        <tr className="bg-gray-100">
                          <td className="p-3 font-bold text-lg" colSpan={2}>Total Due</td>
                          <td className="p-3 text-right font-bold text-lg">$630.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Insurance Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Insurance Information</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p><span className="font-medium">Insurance Provider:</span> HealthGuard Insurance</p>
                    <p><span className="font-medium">Policy Number:</span> HGI-987654321</p>
                    <p><span className="font-medium">Coverage:</span> 70% of eligible expenses</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
                
                {/* Payment Summary */}
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Invoice #INV-2025-0423</p>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">Total Due: $630.00</h4>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <p className="text-sm text-gray-600">Due Date</p>
                      <p className="font-medium">April 30, 2025</p>
                    </div>
                  </div>
                </div>
                
                {/* Payment Form */}
                <form onSubmit={handlePayment}>
                  <div className="space-y-6">
                    {/* Payment Method */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="border border-blue-400 bg-blue-50 rounded-md p-3 flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="paymentMethod" id="credit" className="h-4 w-4" defaultChecked />
                          <label htmlFor="credit" className="flex-1 cursor-pointer flex items-center">
                            <CreditCard size={20} className="text-blue-500 mr-2" />
                            <span>Credit Card</span>
                          </label>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3 flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="paymentMethod" id="bank" className="h-4 w-4" />
                          <label htmlFor="bank" className="flex-1 cursor-pointer flex items-center">
                            <Landmark size={20} className="text-gray-500 mr-2" />
                            <span>Bank Transfer</span>
                          </label>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3 flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="paymentMethod" id="paypal" className="h-4 w-4" />
                          <label htmlFor="paypal" className="flex-1 cursor-pointer flex items-center">
                            <span className="font-bold text-blue-600 mr-1">Pay</span>
                            <span className="font-bold text-blue-800">Pal</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Credit Card Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label htmlFor="cardName" className="block text-gray-700 font-medium mb-2">Cardholder Name</label>
                        <div className="relative">
                          <User size={18} className="text-gray-500 absolute left-3 top-3" />
                          <input 
                            type="text" 
                            id="cardName" 
                            placeholder="John Doe" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
                        <div className="relative">
                          <CreditCard size={18} className="text-gray-500 absolute left-3 top-3" />
                          <input 
                            type="text" 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="expiry" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                        <div className="relative">
                          <Calendar size={18} className="text-gray-500 absolute left-3 top-3" />
                          <input 
                            type="text" 
                            id="expiry" 
                            placeholder="MM/YY" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                        <input 
                          type="text" 
                          id="cvv" 
                          placeholder="123" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Billing Details */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Billing Address</h4>
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div className="md:col-span-3">
                          <input 
                            type="text" 
                            placeholder="Address Line 1" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-3">
                          <input 
                            type="text" 
                            placeholder="Address Line 2 (Optional)" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <input 
                            type="text" 
                            placeholder="City" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <input 
                            type="text" 
                            placeholder="State" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <input 
                            type="text" 
                            placeholder="Zip Code" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Pay $630.00'}
                      </button>
                    </div>
                    
                    {/* Payment Notes */}
                    <div className="text-sm text-gray-600 text-center">
                      <p>Your payment information is secure and encrypted</p>
                      <p className="mt-1">Questions? Call our billing department at (555) 123-4567</p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
      
      
      {/* Payment Success Modal */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" 
              onClick={closeSuccessModal}
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-4">
                Your payment of $630.00 for invoice #INV-2025-0423 has been processed successfully.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                A receipt has been sent to your email address.
              </p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
                onClick={closeSuccessModal}
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
"use client";

import { useState } from "react";
import Head from "next/head";
import {
  CreditCard,
  Calendar,
  User,
  Lock,
  ChevronDown,
  X,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function Payments() {
  const [activeTab, setActiveTab] = useState("pay");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const transactions = [
    {
      id: "TXN78945612",
      date: "15 Apr 2025",
      amount: "₹2,499.00",
      status: "Completed",
      method: "UPI",
    },
    {
      id: "TXN78945524",
      date: "10 Apr 2025",
      amount: "₹1,299.00",
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: "TXN78944412",
      date: "02 Apr 2025",
      amount: "₹3,599.00",
      status: "Completed",
      method: "Debit Card",
    },
    {
      id: "TXN78933612",
      date: "28 Mar 2025",
      amount: "₹999.00",
      status: "Failed",
      method: "UPI",
    },
    {
      id: "TXN78922612",
      date: "15 Mar 2025",
      amount: "₹4,999.00",
      status: "Completed",
      method: "Net Banking",
    },
  ];

  const handlePayment = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowPaymentSuccess(true);
    setTimeout(() => {
      setShowPaymentSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Payments | Your App</title>
          <meta
            name="description"
            content="Manage and make payments securely"
          />
        </Head>

        {/* Payment Success Notification */}
        {showPaymentSuccess && (
          <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex items-center z-50 max-w-sm">
            <CheckCircle className="mr-2" size={20} />
            <div>
              <p className="font-medium">Payment Successful!</p>
              <p className="text-sm">Your transaction has been processed.</p>
            </div>
            <button
              onClick={() => setShowPaymentSuccess(false)}
              className="ml-auto"
            >
              <X size={18} />
            </button>
          </div>
        )}

        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("pay")}
                  className={`${
                    activeTab === "pay"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Make a Payment
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`${
                    activeTab === "history"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Transaction History
                </button>
              </nav>
            </div>

            {/* Make a Payment */}
            {activeTab === "pay" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Payment Form */}
                <div className="md:col-span-8 bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Secure Payment Gateway
                    </h2>

                    {/* Payment Methods Selector */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedPaymentMethod("card")}
                          className={`flex items-center justify-center py-3 px-4 border rounded-md ${
                            selectedPaymentMethod === "card"
                              ? "bg-indigo-50 border-indigo-500"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <CreditCard
                            size={18}
                            className={`${
                              selectedPaymentMethod === "card"
                                ? "text-indigo-500"
                                : "text-gray-500"
                            } mr-2`}
                          />
                          <span
                            className={`${
                              selectedPaymentMethod === "card"
                                ? "text-indigo-700"
                                : "text-gray-700"
                            } text-sm font-medium`}
                          >
                            Card
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPaymentMethod("upi")}
                          className={`flex items-center justify-center py-3 px-4 border rounded-md ${
                            selectedPaymentMethod === "upi"
                              ? "bg-indigo-50 border-indigo-500"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <span
                            className={`${
                              selectedPaymentMethod === "upi"
                                ? "text-indigo-700"
                                : "text-gray-700"
                            } text-sm font-medium`}
                          >
                            UPI
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPaymentMethod("netbanking")}
                          className={`flex items-center justify-center py-3 px-4 border rounded-md ${
                            selectedPaymentMethod === "netbanking"
                              ? "bg-indigo-50 border-indigo-500"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <span
                            className={`${
                              selectedPaymentMethod === "netbanking"
                                ? "text-indigo-700"
                                : "text-gray-700"
                            } text-sm font-medium`}
                          >
                            Net Banking
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPaymentMethod("wallet")}
                          className={`flex items-center justify-center py-3 px-4 border rounded-md ${
                            selectedPaymentMethod === "wallet"
                              ? "bg-indigo-50 border-indigo-500"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <span
                            className={`${
                              selectedPaymentMethod === "wallet"
                                ? "text-indigo-700"
                                : "text-gray-700"
                            } text-sm font-medium`}
                          >
                            Wallet
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Card Payment Form */}
                    {selectedPaymentMethod === "card" && (
                      <form onSubmit={handlePayment}>
                        <div className="mb-4">
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Card Number
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="cardNumber"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                              placeholder="1234 5678 9012 3456"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <CreditCard className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label
                              htmlFor="expiryDate"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Expiry Date
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="expiryDate"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                                placeholder="MM/YY"
                              />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="cvv"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              CVV
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="cvv"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                                placeholder="123"
                              />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="nameOnCard"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Name on Card
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="nameOnCard"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                              placeholder="John Doe"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            id="saveCard"
                            name="saveCard"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="saveCard"
                            className="ml-2 block text-sm text-gray-700"
                          >
                            Save card for future payments
                          </label>
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Pay Now
                          </button>
                        </div>
                      </form>
                    )}

                    {/* UPI Payment */}
                    {selectedPaymentMethod === "upi" && (
                      <form onSubmit={handlePayment}>
                        <div className="mb-6">
                          <label
                            htmlFor="upiId"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            UPI ID
                          </label>
                          <input
                            type="text"
                            id="upiId"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="yourname@upi"
                          />
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Pay Now
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Net Banking */}
                    {selectedPaymentMethod === "netbanking" && (
                      <form onSubmit={handlePayment}>
                        <div className="mb-6">
                          <label
                            htmlFor="bank"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Select Bank
                          </label>
                          <div className="relative">
                            <select
                              id="bank"
                              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                              <option>State Bank of India</option>
                              <option>HDFC Bank</option>
                              <option>ICICI Bank</option>
                              <option>Axis Bank</option>
                              <option>Kotak Mahindra Bank</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Continue to Bank
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Wallet */}
                    {selectedPaymentMethod === "wallet" && (
                      <form onSubmit={handlePayment}>
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Wallet
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                              "Paytm",
                              "PhonePe",
                              "Amazon Pay",
                              "Mobikwik",
                              "Freecharge",
                            ].map((wallet) => (
                              <div
                                key={wallet}
                                className="flex items-center border rounded-md p-3 cursor-pointer hover:border-indigo-500"
                              >
                                <input
                                  id={wallet}
                                  name="wallet"
                                  type="radio"
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <label
                                  htmlFor={wallet}
                                  className="ml-2 block text-sm text-gray-700"
                                >
                                  {wallet}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Pay Now
                          </button>
                        </div>
                      </form>
                    )}

                    <div className="mt-6 flex items-center">
                      <Lock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">
                        All payments are secure and encrypted
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invoice Summary */}
                <div className="md:col-span-4">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">
                        Invoice Summary
                      </h2>
                      <div className="border-t border-gray-200 pt-4">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Invoice Number
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              INV-2023-8721
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Issue Date
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              April 15, 2025
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Due Date
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              April 30, 2025
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Premium Plan
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              ₹1,999.00
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Add-on Services
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              ₹499.00
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Tax (GST 18%)
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              ₹449.82
                            </dd>
                          </div>
                          <div className="py-3 flex justify-between">
                            <dt className="text-lg font-bold text-gray-900">
                              Total
                            </dt>
                            <dd className="text-lg font-bold text-indigo-600">
                              ₹2,947.82
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download Invoice PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Transaction History */}
            {activeTab === "history" && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Transaction History
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Transaction ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Payment Method
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {transaction.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transaction.method}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  transaction.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                              >
                                View
                              </a>
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Receipt
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to{" "}
                          <span className="font-medium">5</span> of{" "}
                          <span className="font-medium">12</span> results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                        >
                          <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            aria-current="page"
                            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          >
                            1
                          </a>
                          <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          >
                            2
                          </a>
                          <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                          >
                            3
                          </a>
                          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                            ...
                          </span>
                          <a
                            href="#"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          >
                            8
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

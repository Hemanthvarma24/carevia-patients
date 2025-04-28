"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, Info, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import loginpic from "@/assets/login-banner.png"

export default function VerifyOtpPage() {
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [contactType, setContactType] = useState<"phone" | "email">("phone")
  const router = useRouter()
  const otpRefs = useRef<Array<HTMLInputElement | null>>([])

  // Initialize refs for OTP inputs
  useEffect(() => {
    otpRefs.current = otpRefs.current.slice(0, otpDigits.length)
  }, [otpDigits.length])

  // Get contact info from localStorage
  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber")
    const email = localStorage.getItem("email")

    if (phoneNumber) {
      setContactInfo(phoneNumber)
      setContactType("phone")
    } else if (email) {
      setContactInfo(email)
      setContactType("email")
    } else {
      // If no contact info is found, redirect back to signup
      router.push("/signup")
    }

    // Simulate receiving OTP for demo purposes
    setMessage("Demo OTP: 1234")
  }, [router])

  // Handle OTP input changes and auto-focus to next input
  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d*$/.test(value)) return

    const newOtpDigits = [...otpDigits]
    newOtpDigits[index] = value.slice(0, 1) // Only take the first character

    setOtpDigits(newOtpDigits)

    // Auto focus to next input when a digit is entered
    if (value && index < otpDigits.length - 1 && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1]?.focus()
    }

    // Clear error when user starts typing
    if (error) {
      setError("")
    }
  }

  // Handle backspace key for OTP inputs
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // If backspace is pressed and current input is empty, focus on previous input
    if (e.key === "Backspace" && !otpDigits[index] && index > 0 && otpRefs.current[index - 1]) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste event for OTP inputs
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content contains only digits
    if (!/^\d+$/.test(pastedData)) return

    // Use only the first 4 digits or fill as many as possible
    const digits = pastedData.slice(0, 4).split("")
    const newOtpDigits = [...otpDigits]

    digits.forEach((digit, index) => {
      if (index < otpDigits.length) {
        newOtpDigits[index] = digit
      }
    })

    setOtpDigits(newOtpDigits)

    // Focus on the next empty input or the last one if all filled
    const nextEmptyIndex = newOtpDigits.findIndex((d) => !d)
    if (nextEmptyIndex !== -1 && otpRefs.current[nextEmptyIndex]) {
      otpRefs.current[nextEmptyIndex]?.focus()
    } else if (otpRefs.current[otpDigits.length - 1]) {
      otpRefs.current[otpDigits.length - 1]?.focus()
    }
  }

  const handleSubmitOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fullOtp = otpDigits.join("")
    if (!fullOtp || fullOtp.length !== 4) {
      setError("Please enter a valid 4-digit OTP")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      // In production, replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, accept "1234" as valid OTP
      if (fullOtp === "1234") {
        // Store user info in localStorage
        localStorage.setItem("isAuthenticated", "true")

        // Navigate to profile setup page
        router.push("/profile-setup")
      } else {
        setError("Invalid OTP. Please try again.")
      }
    } catch (error) {
      console.error("Error verifying OTP:", error)
      setError("Failed to verify OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      // In production, replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setMessage("OTP resent successfully. Demo OTP: 1234")
    } catch (error) {
      console.error("Error resending OTP:", error)
      setError("Failed to resend OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Ref callback functions
  const setOtpRef = (index: number) => (el: HTMLInputElement | null) => {
    otpRefs.current[index] = el
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center mb-6">
              <Link href="/signup" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-semibold text-center text-blue-500 flex-1 pr-5">OTP Verification</h1>
            </div>

            <div className="w-58 h-58 mx-auto mb-6 relative">
              <Image
                src={loginpic}
                alt="OTP Verification"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="w-full text-center mb-6">
              <p className="text-sm text-gray-500">
                {contactType === "phone"
                  ? `Enter the 4-digit code we sent to ${contactInfo.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`
                  : `Enter the 4-digit code we sent to ${contactInfo}`}
              </p>
            </div>

            <form onSubmit={handleSubmitOTP} className="w-full space-y-6">
              <div className="flex justify-center gap-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={setOtpRef(index)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-14 h-14 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={isLoading}
                  />
                ))}
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {message && (
                <Alert variant="default" className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-500" />
                  <AlertDescription className="text-blue-700">{message}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full bg-[#1b598f]" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Didn&lsquo;t receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="font-medium text-primary hover:underline"
                    disabled={isLoading}
                  >
                    Resend
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

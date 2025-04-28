"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  User,
  CreditCard,
  Settings,
  Share2,
  LogOut,
  ChevronRight,
  HelpCircle,
} from "lucide-react"

import Navbar from "@/components/header"
import Footer from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import profile from "@/assets/patients/patient10.jpg" 

export default function ProfilePage() {
  const [user] = useState({
    name: "Sarah Johnson",
    email: "SarahJohnson2009@gmail.com",
    avatar: profile, 
    memberSince: "May 2022",
  })

  return (
    <div className="min-h-screen bg-gray-50 mb-6">
      <Navbar />
      <main className="max-w-md mx-auto bg-white min-h-screen shadow-lg rounded-t-none rounded-b-xl overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-5 border-b bg-white sticky top-0 z-10 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">My Profile</h1>
        </header>

        {/* Profile Section */}
        <div className="relative">
          <div className="h-20 bg-gray-100"></div>

          <div className="px-6 pb-6 pt-14 flex flex-col items-center border-b relative">
            {/* Avatar */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                  <AvatarImage
                    src={user.avatar.src || "/placeholder.svg"}
                    alt={`${user.name}'s profile picture`}
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xl font-semibold">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                  <span className="sr-only">Change profile picture</span>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center mb-4">
              <h2 className="font-semibold text-xl text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{user.email}</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">Joined on {user.memberSince}</span>
              </div>
            </div>

            <Link href="/profile/info">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-4 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all"
              >
                Edit Profile
              </Button>
            </Link>
          </div>

          {/* Account Section */}
          <div className="p-5 pt-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider px-2 mb-3">Account</h3>
              <Card className="overflow-hidden border-gray-200 shadow-sm">
                <nav className="flex flex-col">
                  <MenuItem
                    icon={<User className="h-5 w-5 text-blue-500" />}
                    label="Personal Information"
                    description="Update your personal details"
                    href="/profile/info"
                  />
                  <MenuItem
                    icon={<CreditCard className="h-5 w-5 text-purple-500" />}
                    label="Payment History"
                    description="View your payment records"
                    href="/profile/payments"
                  />
                  <MenuItem
                    icon={<Settings className="h-5 w-5 text-gray-500" />}
                    label="Account Settings"
                    description="Manage your account preferences"
                    href="/profile/settings"
                  />
                  <MenuItem
                    icon={<Share2 className="h-5 w-5 text-orange-500" />}
                    label="Share App"
                    description="Invite friends to join"
                    href="/profile/share"
                    lastItem
                  />
                </nav>
              </Card>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider px-2 mb-3">Support</h3>
              <Card className="overflow-hidden border-gray-200 shadow-sm">
                <MenuItem
                  icon={<HelpCircle className="h-5 w-5 text-blue-500" />}
                  label="Help Center"
                  description="Get help with your account"
                  href="/help"
                  lastItem
                />
              </Card>
            </div>

            {/* Logout Section */}
            <div>
              <Card className="overflow-hidden border-gray-200 shadow-sm">
                <MenuItem
                  icon={<LogOut className="h-5 w-5 text-red-500" />}
                  label="Logout"
                  description="Sign out of your account"
                  href="/signup"
                  lastItem
                  className="hover:bg-red-50"
                />
              </Card>
            </div>
          </div>
        </div>
      </main>
      <div className="py-6"></div>
      <Footer />
    </div>
  )
}

// MenuItem Component
function MenuItem({
  icon,
  label,
  description,
  href,
  lastItem = false,
  className = "",
}: {
  icon: React.ReactNode
  label: string
  description?: string
  href: string
  lastItem?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between py-4 px-4 text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors ${
        !lastItem ? "border-b border-gray-100" : ""
      } ${className} group`}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <span className="font-medium">{label}</span>
          {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-transform" />
    </Link>
  )
}

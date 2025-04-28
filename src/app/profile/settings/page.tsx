"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Moon, Sun, Bell, Globe, Shield, Eye, EyeOff, Smartphone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Footer from "@/components/footer"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [language, setLanguage] = useState("english")
  const [biometricLogin, setBiometricLogin] = useState(false)
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-5 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-5 space-y-6">
          {/* Appearance */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Appearance</CardTitle>
              <CardDescription>Customize how the app looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {darkMode ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-gray-500">Choose your preferred language</p>
                  </div>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications on your device</p>
                  </div>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Security</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-gray-500">Update your account password</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4 rotate-180" />
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Biometric Login</p>
                    <p className="text-sm text-gray-500">Use fingerprint or face ID to login</p>
                  </div>
                </div>
                <Switch checked={biometricLogin} onCheckedChange={setBiometricLogin} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {showBalance ? (
                    <Eye className="h-5 w-5 text-gray-600" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-600" />
                  )}
                  <div>
                    <p className="font-medium">Show Balance</p>
                    <p className="text-sm text-gray-500">Display account balance in the app</p>
                  </div>
                </div>
                <Switch checked={showBalance} onCheckedChange={setShowBalance} />
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">About</CardTitle>
              <CardDescription>App information and legal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/terms"
                className="block py-3 px-1 text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
              >
                <p className="font-medium">Terms of Service</p>
              </Link>
              <Link
                href="/privacy"
                className="block py-3 px-1 text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
              >
                <p className="font-medium">Privacy Policy</p>
              </Link>
              <div className="py-3 px-1">
                <p className="font-medium">Version</p>
                <p className="text-sm text-gray-500">2.1.0</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

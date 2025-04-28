"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Copy, Share, Twitter, Facebook, Linkedin, Mail, MessageCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import Footer from "@/components/footer"

export default function ShareAppPage() {
  const [appLink] = useState("https://yourapp.com/share/app")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Fix the toast call to use the correct API
    toast.success("Copied!", {
      description: "Link copied to clipboard!",
    })
  }

  const shareApp = (platform: string) => {
    // Fix the toast call to use the correct API
    toast.success("Shared!", {
      description: `Shared to ${platform}`,
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this app!",
        text: "I thought you might like this app.",
        url: appLink,
      }).catch((err) => {
        console.error("Error sharing:", err)
        // Fix the toast call to use the correct API
        toast.error("Share failed", {
          description: "Unable to share. Try copying the link instead.",
        })
      })
    } else {
      copyToClipboard(appLink)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-40 to-indigo-50">
      <header className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Share App</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-12">
        <div className="p-5 space-y-6">
          {/* Share Card */}
          <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-200 overflow-hidden shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-800">Share with Friends</CardTitle>
              <CardDescription>Share this app with your friends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => shareApp("Twitter")}
                >
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => shareApp("Facebook")}
                >
                  <Facebook className="h-5 w-5 text-[#4267B2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => shareApp("LinkedIn")}
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => shareApp("Email")}
                >
                  <Mail className="h-5 w-5 text-gray-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => shareApp("Messages")}
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Share Link */}
          <Card className="shadow-sm border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 bg-gray-50">
              <CardTitle className="text-lg flex items-center">
                <Share className="h-5 w-5 mr-2 text-blue-600" />
                Share Link
              </CardTitle>
              <CardDescription>Copy and share app link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <Input 
                  value={appLink} 
                  readOnly 
                  className="bg-gray-50 focus:ring-2 focus:ring-blue-200" 
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50"
                  onClick={() => copyToClipboard(appLink)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleShare}
              >
                <Share className="h-4 w-4 mr-2" />
                Share App
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
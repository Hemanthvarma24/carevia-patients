"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "../ui/button"

export default function SearchArea() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching doctors for:", searchQuery)

    // Redirect using Next.js router (supports basePath)
    router.push("/search-doctor")
  }

  return (
    <div className="search-area bg-white rounded-lg shadow-lg p-4">
      <form onSubmit={handleSearch}>
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Doctors by Name, Location, or Hospital"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#00ad9c] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Search Now
          </Button>
        </div>
      </form>
    </div>
  )
}

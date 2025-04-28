"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  MapPin,
  Clock,
  ChevronRight,
  MoreVertical,
  Filter,
  Plus,
  ArrowUpDown,
  Building2,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "@/components/header"
import Footer from "@/components/footer"
import NavigationMenuSlider from "@/components/aboutmenu"
import floorone from "@/assets/home/clinic.jpg";
import floortwo from "@/assets/home/doctors-nurse-walking-corridor.jpg";
import floorthree from "@/assets/home/empty-hallway-background.jpg";
import floorfour from "@/assets/home/gynecological-room-hospital.jpg";

export default function HospitalFacilities() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Sample facility data
  const allFacilities = [
    {
      id: 1,
      name: "Emergency Department",
      location: "Building A, Floor 1",
      status: "Operational",
      lastMaintenance: "Apr 10, 2025",
      nextMaintenance: "Jul 10, 2025",
      type: "Critical Care",
      building: "A",
      image: floorone,
    },
    {
      id: 2,
      name: "Radiology Center",
      location: "Building B, Floor 2",
      status: "Maintenance",
      lastMaintenance: "Apr 18, 2025",
      nextMaintenance: "Apr 25, 2025",
      type: "Diagnostic",
      building: "B",
      image: floortwo,
    },
    {
      id: 3,
      name: "ICU Wing",
      location: "Building A, Floor 3",
      status: "Operational",
      lastMaintenance: "Apr 5, 2025",
      nextMaintenance: "Jul 5, 2025",
      type: "Critical Care",
      building: "A",
      image: floorfour,
    },
    {
      id: 4,
      name: "Laboratory",
      location: "Building C, Floor 1",
      status: "Operational",
      lastMaintenance: "Apr 12, 2025",
      nextMaintenance: "Jul 12, 2025",
      type: "Diagnostic",
      building: "C",
      image: floorthree,
    },
    {
      id: 5,
      name: "Surgical Wing",
      location: "Building B, Floor 3",
      status: "Limited",
      lastMaintenance: "Apr 15, 2025",
      nextMaintenance: "May 15, 2025",
      type: "Critical Care",
      building: "B",
      image: floorone,
    },
    {
      id: 6,
      name: "Cafeteria",
      location: "Building D, Floor 1",
      status: "Operational",
      lastMaintenance: "Apr 8, 2025",
      nextMaintenance: "Jul 8, 2025",
      type: "Support",
      building: "D",
      image: floortwo,
    },
    {
      id: 7,
      name: "Pharmacy",
      location: "Building A, Floor 1",
      status: "Operational",
      lastMaintenance: "Apr 3, 2025",
      nextMaintenance: "Jul 3, 2025",
      type: "Support",
      building: "A",
      image: floorfour,
    },
    {
      id: 8,
      name: "MRI Suite",
      location: "Building B, Floor 2",
      status: "Operational",
      lastMaintenance: "Apr 7, 2025",
      nextMaintenance: "Jul 7, 2025",
      type: "Diagnostic",
      building: "B",
      image: floortwo,
    },
    {
      id: 9,
      name: "Pediatric Ward",
      location: "Building C, Floor 2",
      status: "Limited",
      lastMaintenance: "Apr 14, 2025",
      nextMaintenance: "May 14, 2025",
      type: "Patient Care",
      building: "C",
      image: floorone,
    },
  ]

  // Filter facilities based on active tab and search query
  const filteredFacilities = allFacilities
    .filter((facility) => {
      if (activeTab === "all") return true
      if (activeTab === "operational") return facility.status === "Operational"
      if (activeTab === "maintenance") return facility.status === "Maintenance"
      if (activeTab === "limited") return facility.status === "Limited"
      return true
    })
    .filter(
      (facility) =>
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.type.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "status") return a.status.localeCompare(b.status)
      if (sortBy === "location") return a.location.localeCompare(b.location)
      if (sortBy === "maintenance") return new Date(a.nextMaintenance).getTime() - new Date(b.nextMaintenance).getTime()
      return 0
    })

  // Count facilities by status
  const operationalCount = allFacilities.filter((f) => f.status === "Operational").length
  const maintenanceCount = allFacilities.filter((f) => f.status === "Maintenance").length
  const limitedCount = allFacilities.filter((f) => f.status === "Limited").length

  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Operational":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Operational
          </Badge>
        )
      case "Maintenance":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Maintenance
          </Badge>
        )
      case "Limited":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Limited
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            {status}
          </Badge>
        )
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <NavigationMenuSlider />

      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Header with Statistics */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Facilities Management</h1>
              <p className="text-gray-500">Monitor and manage all hospital facilities</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilterModal(true)}
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              <Button size="sm" className="flex items-center gap-1">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Facility</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Facilities</p>
                    <h3 className="text-2xl font-bold">{allFacilities.length}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Operational</p>
                    <h3 className="text-2xl font-bold">{operationalCount}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Maintenance</p>
                    <h3 className="text-2xl font-bold">{maintenanceCount}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Limited</p>
                    <h3 className="text-2xl font-bold">{limitedCount}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Tabs */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search facilities..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort by</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="maintenance">Next Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All ({allFacilities.length})
              </TabsTrigger>
              <TabsTrigger value="operational" className="text-xs sm:text-sm">
                Operational ({operationalCount})
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="text-xs sm:text-sm">
                Maintenance ({maintenanceCount})
              </TabsTrigger>
              <TabsTrigger value="limited" className="text-xs sm:text-sm">
                Limited ({limitedCount})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Facilities Grid */}
        {filteredFacilities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <Card key={facility.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3">{getStatusBadge(facility.status)}</div>
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{facility.name}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit details</DropdownMenuItem>
                        <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                        <DropdownMenuItem>View history</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Mark unavailable</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Last maintenance: {facility.lastMaintenance}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <RefreshCw className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Next scheduled: {facility.nextMaintenance}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary flex items-center gap-1">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Building2 className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No facilities found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              No facilities match your current search criteria. Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </main>

      <Footer />

      {/* Filter Dialog */}
      <Dialog open={showFilterModal} onOpenChange={setShowFilterModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Filter Facilities</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-6 px-1 py-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Facility Type</h3>
                <div className="space-y-2">
                  {["Critical Care", "Diagnostic", "Patient Care", "Support"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} />
                      <label
                        htmlFor={`type-${type}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Status</h3>
                <div className="space-y-2">
                  {["Operational", "Maintenance", "Limited"].map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox id={`status-${status}`} />
                      <label
                        htmlFor={`status-${status}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Building</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select building" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Buildings</SelectItem>
                    <SelectItem value="A">Building A</SelectItem>
                    <SelectItem value="B">Building B</SelectItem>
                    <SelectItem value="C">Building C</SelectItem>
                    <SelectItem value="D">Building D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Maintenance Schedule</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-500">From</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-500">To</label>
                    <Input type="date" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter className="flex justify-between sm:justify-end gap-2">
            <Button variant="outline" onClick={() => setShowFilterModal(false)}>
              Cancel
            </Button>
            <Button type="submit">Apply Filters</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

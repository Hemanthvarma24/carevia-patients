"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CalendarCheck, BookOpen, Users, User } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#00ad9c] z-10 rounded-t-2xl shadow-lg py-3">
      <div className="mx-auto max-w-md flex justify-between px-6">
        {[
          { href: "/dashboard", icon: <Home className="h-6 w-6" /> },
          { href: "/appointments", icon: <CalendarCheck className="h-6 w-6" /> },
          { href: "/health-resources", icon: <BookOpen className="h-6 w-6" /> },
          { href: "/about-us", icon: <Users className="h-6 w-6" /> },
          { href: "/profile", icon: <User className="h-6 w-6" /> },
        ].map(({ href, icon }, index) => {
          const active = isActive(href)

          return (
            <Link key={index} href={href}>
  <div className="relative flex items-center justify-center w-14 h-14">
    <div
      className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
        active
          ? "bg-white text-[#00ad9c] -mt-10 z-20"
          : "text-white z-0"
      }`}
    >
      {icon}
    </div>
    {active && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[#00ad9c] rounded-t-full z-10" />
    )}
  </div>
</Link>
          )
        })}
      </div>
    </div>
  )
}

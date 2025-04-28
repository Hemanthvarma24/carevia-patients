"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface NavbarProps {
  notificationCount?: number;
}

export default function Navbar({ notificationCount = 0 }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (menuOpen) setMenuOpen(false);
    if (popoverOpen) setPopoverOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false);
      }

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node) &&
        notificationsOpen
      ) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, notificationsOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Sample notifications for the dropdown
  const notificationItems = [
    {
      id: 1,
      message: "Reminder: Appointment with Dr. Ruby Perrin tomorrow at 4:30 PM",
      time: "1 hour ago",
    },
    {
      id: 2,
      message: "Time to take your evening medication",
      time: "3 hours ago",
    },
    {
      id: 3,
      message: "Your lab results are now available",
      time: "Yesterday",
    },
  ];

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#1b598f] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-white">
          <div className="flex justify-end">
            <Button
              onClick={() => setMenuOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
              variant="ghost"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Top Navbar */}
      <div className="navbar bg-[#02998c] shadow-sm sticky rounded-sm top-0 z-30">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="text-2xl font-medium text-left text-white">
            Carevia
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button
                onClick={toggleNotifications}
                className="p-2 focus:outline-none relative"
                aria-label="Notifications"
                variant="ghost"
              >
                <Bell className="h-6 w-6 text-white" />
                {notificationCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full"
                    variant="destructive"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div
                  ref={notificationsRef}
                  className="absolute right-0 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                      <Link
                        href="/notifications"
                        className="text-xs text-blue-600"
                        onClick={() => setNotificationsOpen(false)}
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notificationItems.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-3 border-b border-gray-100 hover:bg-gray-50"
                      >
                        <p className="text-sm text-gray-800">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 text-center border-t border-gray-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-blue-600 w-full"
                      onClick={() => setNotificationsOpen(false)}
                    >
                      Mark All as Read
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

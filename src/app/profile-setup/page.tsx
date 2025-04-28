"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Upload } from "lucide-react";
import Image from "next/image";

export default function ProfileSetup() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [, setProfilePic] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setPreviewUrl(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate submission logic
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      console.error("Profile update error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-8 px-4">
      <div className="w-full max-w-sm">
        {/* Back Button & Title */}
        <div className="flex items-center mb-8 relative">
          <button
            onClick={() => router.back()}
            className="absolute left-0 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1b598f]"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold w-full text-center">Profile Setup</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-[#1b598f]">
                {previewUrl ? (
                  <Image
                    src={previewUrl} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Upload className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <label 
                htmlFor="profile-pic" 
                className="absolute bottom-0 right-0 bg-[#1b598f] rounded-full p-2 cursor-pointer hover:bg-[#1b598f]/80 transition-colors"
              >
                <Upload className="h-4 w-4 text-white" />
              </label>
              <input 
                type="file" 
                id="profile-pic" 
                accept="image/*" 
                className="hidden" 
                onChange={handleProfilePicChange}
              />
            </div>
            <label htmlFor="profile-pic" className="text-sm font-medium text-[#1b598f] cursor-pointer">
              Upload Profile Picture
            </label>
          </div>

          {/* Input Fields */}
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b598f] text-base"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b598f] text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b598f] text-base"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-700">
              Add Status
            </label>
            <input
              type="text"
              id="status"
              placeholder="Enter your status"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b598f] text-base"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-[#1b598f] text-white rounded-lg hover:bg-[#1b598f]/80 transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1b598f]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

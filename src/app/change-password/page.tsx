'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import illustration from "@/assets/login-banner.png";
import { Button } from '@/components/ui/button';
import Navbar from '@/components/header';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add logic to handle password change (e.g. API call)
    alert('Password changed successfully!');
  };

  return (
    <><Navbar /><div className="flex flex-col items-center justify-between w-full h-screen px-4 py-6 bg-gray-100 fixed inset-0">
      {/* Top Section with Back Button */}
      <div className="w-full mt-[70px]">
        <Button
          onClick={() => router.back()}
          className="text-2xl text-gray-700 hover:text-gray-900"
          aria-label="Go back"
        >
          ←
        </Button>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Illustration - Reduced size */}
        <div className="mb-4">
          <Image
            src={illustration}
            alt="Illustration"
            width={250}
            height={250}
            priority
            className="object-contain" />
        </div>

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          DOCC<span className="text-black">URE</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white shadow focus:outline-none"
              required />
            <div className="absolute right-4 top-2 text-gray-500">
              🔒
            </div>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white shadow focus:outline-none"
              required />
            <div className="absolute right-4 top-2 text-gray-500">
              🔒
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-2 rounded-full bg-blue-800 text-white font-semibold hover:bg-blue-900 transition-colors"
          >
            CHANGE PASSWORD
          </Button>
        </form>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-600 mt-4">
        Go back to login?{' '}
        <span
          className="text-black font-medium cursor-pointer hover:underline"
          onClick={() => router.push('/signup')}
        >
          Login Now!
        </span>
      </p>
    </div></>
  );
}
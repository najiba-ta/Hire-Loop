"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ShieldKeyhole, ArrowLeft } from "@gravity-ui/icons";

export default function UnauthorizedPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-900/20 blur-[140px]" />
      </div>

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-purple-500/20 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 shadow-[0_0_60px_rgba(139,92,246,0.15)]">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
            <ShieldKeyhole className="h-12 w-12 text-purple-400" />
          </div>

          {/* Error Code */}
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-black tracking-tight text-white">
              401
            </h1>

            <div className="mx-auto mt-4 h-[2px] w-28 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            <h2 className="mt-6 text-3xl font-bold text-white">
              Access Denied
            </h2>

            <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              You don&apos;t have permission to access this resource.
              Your account may not have the required role or privileges
              needed to view this page.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/"
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold"
            >
              Dashboard
            </Button>

            <Button
              as={Link}
              href="/login"
              size="lg"
              variant="bordered"
              className="border-purple-500/40 text-purple-300"
              startContent={<ArrowLeft />}
            >
              Sign In Again
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Error Code: 401 • Authentication Required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Welcome to Interview Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A powerful platform for managing and conducting interviews efficiently
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">Streamline Your Interview Process</h2>
            <p className="text-muted-foreground mb-6">
              Our platform helps you schedule, conduct, and review interviews with ease.
              Join us to transform your hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Get Started
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-6 flex justify-center">
            <div className="max-w-sm w-full">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

// This is a simulated login state for Task 2 (no backend/database yet).
// In Task 4 (optional), this will be replaced with a real Better Auth session.
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false to test logged-out view
  const [userName] = useState("Zeeshan");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 px-4 text-center">
      {isLoggedIn ? (
        <>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {userName}!
          </h1>
          <p className="max-w-md text-gray-600">
            You are logged in (simulated for now). This message will later
            come from a real session once Better Auth is connected.
          </p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="rounded-lg bg-gray-800 px-5 py-2 text-white transition hover:bg-gray-700"
          >
            Log out (simulated)
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to My App
          </h1>
          <p className="max-w-md text-gray-600">
            Please log in or create an account to continue.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
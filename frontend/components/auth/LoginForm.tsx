"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid email or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* X Logo */}
      <div className="mb-8">
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white mb-8">Sign in to X</h1>

        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Floating label input — Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="
                peer w-full bg-transparent border border-gray-700 rounded-md
                px-3 pt-5 pb-2 text-white text-base
                focus:outline-none focus:border-sky-500
                transition-colors duration-200
              "
            />
            <label
              htmlFor="email"
              className="
                absolute left-3 top-3.5 text-gray-500 text-base pointer-events-none
                transition-all duration-200
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-500
                peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
              "
            >
              Phone, email, or username
            </label>
          </div>

          {/* Floating label input — Password */}
          <div className="relative">
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="
                peer w-full bg-transparent border border-gray-700 rounded-md
                px-3 pt-5 pb-2 text-white text-base
                focus:outline-none focus:border-sky-500
                transition-colors duration-200
              "
            />
            <label
              htmlFor="password"
              className="
                absolute left-3 top-3.5 text-gray-500 text-base pointer-events-none
                transition-all duration-200
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-sky-500
                peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs
              "
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="
              w-full bg-white text-black font-bold py-3 rounded-full text-base
              hover:bg-gray-200 transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-4">
          <button className="w-full border border-gray-700 text-white font-semibold py-3 rounded-full text-base hover:bg-white/5 transition-colors duration-200">
            Forgot password?
          </button>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-sky-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

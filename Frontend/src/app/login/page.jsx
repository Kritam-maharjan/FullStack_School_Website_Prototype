"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    alert("LOGIN SUCCESSFUL");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 flex items-center justify-center px-6 py-12">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-cyan-100 p-8"
      >
        {/* Logo */}

        <div className="flex justify-center mb-5">
          <Image
            src="/images/School.png"
            alt="School Logo"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>

        {/* Title */}

        <h1 className="text-3xl font-bold text-center text-cyan-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to continue to EG School
        </p>

        {/* Email */}

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}

        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
            required
            minLength="8"
            pattern="(?=.*[!@#$%^&*()-+])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
            title="Must contain uppercase, lowercase, number and special character."
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-xs text-gray-500 mt-2">
            Minimum 8 characters including uppercase, lowercase, number and
            special character.
          </p>
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between my-6">

          <label className="flex items-center gap-2 cursor-pointer">

            <input
              type="checkbox"
              className="checkbox checkbox-info checkbox-sm"
            />

            <span className="text-gray-700">
              Remember me
            </span>

          </label>

          <Link
            href="/forgot-password"
            className="text-cyan-600 hover:text-cyan-800 font-medium transition"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Button */}

        <button
          type="submit"
          className="btn w-full bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-xl text-lg transition duration-300"
        >
          Login
        </button>

        {/* Register */}

        <p className="text-center mt-6 text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-600 hover:text-cyan-800 font-semibold"
          >
            Register Here
          </Link>
        </p>

      </form>

    </section>
  );
};

export default Login;

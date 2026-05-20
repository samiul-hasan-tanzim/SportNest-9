"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-emerald-100 px-6">

            <div className="relative max-w-xl w-full text-center">

                <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-200/40 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-200/40 blur-3xl rounded-full"></div>

                <div className="relative backdrop-blur-xl bg-white/70 border border-white/60 rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-12">

                    <div className="flex justify-center mb-8 animate-pulse">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-20 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 5a2 2 0 100-4 2 2 0 000 4zM6 22l3-7 3 2 2-3 3 2 1-3"
                            />
                        </svg>
                    </div>

                    <h1 className="text-6xl font-black bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        404
                    </h1>

                    <h2 className="text-xl font-semibold text-gray-700 mt-4">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 mt-3 leading-relaxed">
                        Looks like the page you&apos;re searching for has left the field.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-8 px-8 py-3 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                    >
                        Back To Home
                    </Link>

                </div>
            </div>
        </div>
    );
}
"use client";

import { ArrowLeft, TriangleExclamation } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">

            {/* Background Blur Effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />

            <div className="relative w-full max-w-3xl">

                {/* Glass Card */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 md:p-14 text-center">

                    {/* Icon */}
                    <div className="mx-auto mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-100 to-orange-100 shadow-inner">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                            <TriangleExclamation size={34} />
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                        Something Went Wrong
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Oops! Error Occurred
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                        An unexpected problem occurred while loading this page.
                        Please try again or go back to continue exploring the platform.
                    </p>

                    {/* Error Message */}
                    {error?.message && (
                        <div className="mt-8 rounded-2xl border border-red-100 bg-red-50/70 px-5 py-4 text-sm text-red-500 font-medium shadow-sm">
                            {error.message}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">

                        <Button
                            onClick={() => reset()}
                            size="lg"
                            className="h-14 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-emerald-200 hover:scale-[1.02] transition-all duration-300"
                        >
                            Try Again
                        </Button>

                        <Link href="/">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="h-14 px-8 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition-all"
                            >
                                <ArrowLeft />
                                Back To Home
                            </Button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;
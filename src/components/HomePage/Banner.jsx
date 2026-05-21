"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/banner.jpg')" }}
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Book Your Perfect <span className="text-emerald-400">Sports Facility</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                    Discover football turfs, badminton courts, swimming lanes and more.
                    Reserve your slot instantly with SportNest.
                </p>

                <div className="max-w-xl mx-auto mb-8">
                    <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">

                        <input
                            type="text"
                            placeholder="Search facilities..."
                            className="flex-1 px-4 py-3 bg-transparent outline-none text-white placeholder-gray-300"
                        />

                        <button className="px-6 md:px-7 py-5 md:p-3 bg-emerald-500 hover:bg-emerald-600 transition flex items-center gap-2">
                            <FaSearch />
                            <p className="hidden md:block">Search</p>
                        </button>

                    </div>
                </div>

                <Link href="/facilities">
                    <button className="px-8 py-3 rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 font-semibold text-white shadow-lg hover:scale-105 transition">
                        Explore Facilities
                    </button>
                </Link>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-3xl mx-auto">

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <h3 className="text-2xl font-bold text-emerald-400">50+</h3>
                        <p className="text-sm text-gray-300">Facilities</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <h3 className="text-2xl font-bold text-emerald-400">10+</h3>
                        <p className="text-sm text-gray-300">Sports Types</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <h3 className="text-2xl font-bold text-emerald-400">5K+</h3>
                        <p className="text-sm text-gray-300">Bookings</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <h3 className="text-2xl font-bold text-emerald-400">24/7</h3>
                        <p className="text-sm text-gray-300">Availability</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;
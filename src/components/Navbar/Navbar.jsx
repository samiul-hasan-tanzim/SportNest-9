"use client";
import { useState } from "react";
import Link from "next/link";
import logo from '../../../public/assets/logo.png'
import { FaUserCircle, FaCalendarCheck, FaPlusCircle, FaFutbol, FaSignOutAlt, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";

export default function Navbar({ logout }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-600">
                            <Image src={logo} width={50} height={50} alt="logo" /><span>SportNest</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
                        <Link href="/facilities" className="text-gray-700 hover:text-green-600 font-medium">All Facilities</Link>
                        <Link href="/my-bookings" className="text-gray-700 hover:text-green-600 font-medium">My Bookings</Link>
                        <Link href="/add-facility" className="text-gray-700 hover:text-green-600 font-medium">Add Facility</Link>
                        <Link href="/manage-facilities" className="text-gray-700 hover:text-green-600 font-medium">Manage My Facilities</Link>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 border border-slate-200 hover:border-green-400 px-3 py-2 rounded-2xl transition-all duration-300 bg-white hover:shadow-md">
                                <Image src={logo} width={40} height={40} alt="logo" />
                                <div className="text-left">
                                    <p className="text-sm font-semibold text-slate-800">Demo User</p>
                                    <p className="text-xs text-slate-500">Sports Enthusiast</p>
                                </div>
                                <FaChevronDown className={`text-slate-500 mt-1 transition-transform duration-200 ${profileOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="bg-green-50 px-5 py-4 border-b border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <Image src={logo} width={50} height={50} alt="logo" />
                                            <div>
                                                <h3 className="font-bold text-slate-800">Demo User</h3>
                                                <p className="text-sm text-slate-500">demo@sportnest.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <Link href="/my-bookings" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-700 hover:bg-green-50 transition"><FaCalendarCheck className="text-green-500" /><span className="font-medium">My Bookings</span></Link>
                                        <Link href="/add-facility" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-700 hover:bg-green-50 transition"><FaPlusCircle className="text-green-500" /><span className="font-medium">Add Facility</span></Link>
                                        <Link href="/manage-facilities" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-700 hover:bg-green-50 transition"><FaFutbol className="text-green-500" /><span className="font-medium">Manage Facilities</span></Link>
                                        <div className="my-2 border-t border-slate-100"></div>
                                        <button onClick={() => { setProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition"><FaSignOutAlt /><span className="font-medium">Logout</span></button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none text-2xl">
                            {
                                mobileMenuOpen ? <FaTimes /> : <FaBars />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 space-y-1 px-2 pb-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">Home</Link>
                        <Link href="/facilities" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">All Facilities</Link>
                        <Link href="/my-bookings" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">My Bookings</Link>
                        <Link href="/add-facility" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">Add Facility</Link>
                        <Link href="/manage-facilities" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50">Manage My Facilities</Link>
                        <button onClick={() => { setMobileMenuOpen(false) }} className="block w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 rounded-md transition">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
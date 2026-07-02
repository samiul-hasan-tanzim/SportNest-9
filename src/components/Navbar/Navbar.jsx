"use client";
import { useState } from "react";
import Link from "next/link";
import logo from '../../../public/assets/logo.png'
import { FaCalendarCheck, FaPlusCircle, FaFutbol, FaSignOutAlt, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, Switch } from "@heroui/react";
import { Moon, Sun } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const router = useRouter();

    const { theme, setTheme } = useTheme();

    const { data: session } = authClient.useSession()
    const user = session?.user

    const linkClass = (path) =>
        `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 overflow-hidden
   ${pathname === path
            ? `
      text-green-700 bg-green-50
      before:content-['']
      before:block
      before:absolute
      before:inset-0
      before:bg-[url("/assets/logo.svg")]
      before:bg-no-repeat
      before:bg-right
      before:bg-contain
      before:opacity-25
      before:animate-[slideLeft_0.6s_ease_forwards]
      `
            : "text-gray-700 hover:text-green-600 hover:bg-green-50"
        }`;

    const dropdownLinkClass = (path) =>
        `relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
  ${pathname === path
            ? `
      text-green-700 bg-green-50
      before:content-['']
      before:block
      before:absolute
      before:inset-0
      before:bg-[url("/assets/logo.svg")]
      before:bg-no-repeat
      before:bg-right
      before:bg-contain
      before:opacity-20
      before:animate-[slideRight_0.6s_ease_forwards]
      `
            : "text-slate-700 hover:bg-green-50"
        }`;



    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-600">
                            <Image src={logo} width={50} height={50} alt="logo" />
                            <span className="font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-teal-500 transition-transform duration-200 hover:scale-105">
                                SportNest
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-2 items-center">
                        <Link href="/" className={`${linkClass("/")}  relative z-10 text-gray-700 hover:text-green-600 font-extrabold`}>Home</Link>
                        <Link href="/facilities" className={`${linkClass("/facilities")}  relative z-10 text-gray-700 hover:text-green-600 font-extrabold`}>All Facilities</Link>
                        {
                            user && (
                                <div className="space-x-2">
                                    <Link href="/my-bookings" className={`${linkClass("/my-bookings")}  relative z-10 text-gray-700 hover:text-green-600 font-extrabold`}>My Bookings</Link>
                                    <Link href="/add-facility" className={`${linkClass("/add-facility")}  relative z-10 text-gray-700 hover:text-green-600 font-extrabold`}>Add Facility</Link>
                                    <Link href="/manage-facilities" className={`${linkClass("/manage-facilities")}  relative z-10 text-gray-700 hover:text-green-600 font-extrabold`}>Manage My Facilities</Link>
                                </div>
                            )
                        }
                    </div>

                    {/* Profile Dropdown */}
                    {
                        user ? (
                            <div className="hidden md:flex items-center">
                                <div className="relative">
                                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 border border-slate-200 hover:border-green-400 px-3 py-2 rounded-2xl transition-all duration-300 bg-white hover:shadow-md">
                                        <Avatar>
                                            <Avatar.Image alt="John Doe" src={user?.image} />
                                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-800">{user?.name}</p>
                                            <p className="text-xs text-slate-500">Sports Enthusiast</p>
                                        </div>
                                        <FaChevronDown className={`text-slate-500 mt-1 transition-transform duration-200 ${profileOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>

                                    {profileOpen && (
                                        <div className="absolute right-0 mt-3 w-70 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                                            <div className="bg-green-50 px-5 py-4 border-b border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <Avatar.Image alt="John Doe" src={user?.image} />
                                                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                                                    </Avatar>
                                                    <div>
                                                        <h3 className="font-bold text-slate-800">{user?.name}</h3>
                                                        <p className="text-sm text-slate-500 ">{user?.email}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                                                <span className="text-sm font-medium text-slate-700">Theme</span>

                                                <Switch defaultSelected size="lg" onChange={() => setTheme(theme === "dark" ? "Light" : "Dark")}>
                                                    {({ isSelected }) => (
                                                        <Switch.Control>
                                                            <Switch.Thumb>
                                                                <Switch.Icon>
                                                                    {isSelected ? (
                                                                        <Sun className="size-3 text-inherit opacity-100" />
                                                                    ) : (
                                                                        <Moon className="size-3 text-inherit opacity-70" />
                                                                    )}
                                                                </Switch.Icon>
                                                            </Switch.Thumb>
                                                        </Switch.Control>
                                                    )}
                                                </Switch>
                                            </div>
                                            <div className="p-2">
                                                <Link href="/my-bookings" onClick={() => setProfileOpen(false)} className={dropdownLinkClass("/my-bookings")}><FaCalendarCheck className="text-green-500 relative z-10" /><span className="font-medium relative z-10">My Bookings</span></Link>
                                                <Link href="/add-facility" onClick={() => setProfileOpen(false)} className={dropdownLinkClass("/add-facility")}><FaPlusCircle className="text-green-500 relative z-10" /><span className="font-medium relative z-10">Add Facility</span></Link>
                                                <Link href="/manage-facilities" onClick={() => setProfileOpen(false)} className={dropdownLinkClass("/manage-facilities")}><FaFutbol className="text-green-500 relative z-10" /><span className="font-medium relative z-10">Manage Facilities</span></Link>
                                                <div className="my-2 border-t border-slate-100"></div>
                                                <button onClick={() => { authClient.signOut(); router.push('/login'); setProfileOpen(false); toast.success('Logout Successfull') }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition"><FaSignOutAlt /><span className="font-medium">Logout</span></button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <Link href="/login">
                                <button className="hidden md:block cursor-pointer px-5 py-2 rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
                                    Login
                                </button>
                            </Link>
                        )
                    }

                    {/* Mobile Hamburger */}
                    {
                        user ? (
                            <div className="md:hidden flex gap-5 items-center">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none text-2xl">
                                    {
                                        mobileMenuOpen ? <FaTimes /> : <FaBars />
                                    }
                                </button>
                            </div>
                        ) :
                            <div className="md:hidden flex gap-5 items-center">
                                <Link href="/login">
                                    <button className="cursor-pointer px-5 py-2 rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
                                        Login
                                    </button>
                                </Link>
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none text-2xl">
                                    {
                                        mobileMenuOpen ? <FaTimes /> : <FaBars />
                                    }
                                </button>
                            </div>
                    }
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 px-2 pb-4">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">

                            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700">
                                <FaFutbol className="text-green-500" /> Home
                            </Link>

                            <Link href="/facilities" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700">
                                <FaFutbol className="text-green-500" /> All Facilities
                            </Link>

                            {user && (
                                <>
                                    <Link href="/my-bookings" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700">
                                        <FaCalendarCheck className="text-green-500" /> My Bookings
                                    </Link>

                                    <Link href="/add-facility" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700">
                                        <FaPlusCircle className="text-green-500" /> Add Facility
                                    </Link>

                                    <Link href="/manage-facilities" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700">
                                        <FaFutbol className="text-green-500" /> Manage Facilities
                                    </Link>

                                    <div className="border-t border-slate-100" />
                                    <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">Theme</span>

                                        <Switch defaultSelected size="lg" onChange={() => setTheme(theme === "dark" ? "Light" : "Dark")}>
                                            {({ isSelected }) => (
                                                <Switch.Control>
                                                    <Switch.Thumb>
                                                        <Switch.Icon>
                                                            {isSelected ? (
                                                                <Sun className="size-3 text-inherit opacity-100" />
                                                            ) : (
                                                                <Moon className="size-3 text-inherit opacity-70" />
                                                            )}
                                                        </Switch.Icon>
                                                    </Switch.Thumb>
                                                </Switch.Control>
                                            )}
                                        </Switch>
                                    </div>

                                    <button onClick={() => { authClient.signOut(); setMobileMenuOpen(false); router.push("/login"); toast.success('Logout Successfull') }} className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50">
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
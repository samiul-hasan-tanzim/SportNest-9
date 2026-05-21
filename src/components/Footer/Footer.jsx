import { FaFacebookF, FaTwitter, FaInstagram, FaFutbol } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/logo.png'

const Footer = () => {
    return (
        <footer className="relative bg-linear-to-r from-green-950 via-green-900 to-green-950 text-gray-300">

            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-400 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-white text-xl font-bold">
                        <Image src={logo} width={50} height={50} alt="logo" />
                        <span className="font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-teal-500 transition-transform duration-200 hover:scale-105">
                            SportNest
                        </span>
                    </div>

                    <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                        Easily book your favorite sports facilities anytime, anywhere.
                        Find available courts, schedule games, and enjoy sports with your friends.
                    </p>

                    <div className="flex gap-4 mt-6 justify-center sm:justify-start">
                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <a href=""><FaFacebookF /></a>
                        </div>

                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <a href=""><FaTwitter /></a>
                        </div>

                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <a href=""><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/" className="hover:text-green-400 transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/facilities" className="hover:text-green-400 transition">
                                Facilities
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-bookings" className="hover:text-green-400 transition">
                                Booking
                            </Link>
                        </li>

                        <li>
                            <Link href="/login" className="hover:text-green-400 transition">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="text-white font-semibold mb-4">Popular Facilities</h3>

                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-green-400 cursor-pointer transition">
                            Football Turf
                        </li>

                        <li className="hover:text-green-400 cursor-pointer transition">
                            Badminton Court
                        </li>

                        <li className="hover:text-green-400 cursor-pointer transition">
                            Cricket Ground
                        </li>

                        <li className="hover:text-green-400 cursor-pointer transition">
                            Indoor Basketball
                        </li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="text-white font-semibold mb-4">
                        Get Booking Updates
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 max-w-sm mx-auto sm:mx-0">
                        Subscribe to get latest facility updates and offers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none bg-green-800 text-sm focus:outline-none"
                        />

                        <button className="bg-green-500 px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-white hover:bg-green-400 transition">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-green-800 text-center text-sm py-6 text-gray-400">
                © {new Date().getFullYear()} SportNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
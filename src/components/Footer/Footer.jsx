import { FaFacebookF, FaTwitter, FaInstagram, FaFutbol } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="relative bg-linear-to-r from-green-950 via-green-900 to-green-950 text-gray-300">

            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-400 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center gap-2 text-white text-xl font-bold">
                        <FaFutbol className="text-green-400" />
                        SportBook
                    </div>

                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Easily book your favorite sports facilities anytime, anywhere.
                        Find available courts, schedule games, and enjoy sports with your friends.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <FaFacebookF />
                        </div>

                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <FaTwitter />
                        </div>

                        <div className="p-2 bg-green-800 hover:bg-green-600 rounded-full cursor-pointer transition">
                            <FaInstagram />
                        </div>
                    </div>
                </div>

                <div>
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
                            <Link href="/booking" className="hover:text-green-400 transition">
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

                <div>
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

                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Get Booking Updates
                    </h3>

                    <p className="text-sm text-gray-400 mb-4">
                        Subscribe to get latest facility updates and offers.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-l-md bg-green-800 text-sm focus:outline-none"
                        />

                        <button className="bg-green-500 px-4 py-2 rounded-r-md text-white hover:bg-green-400 transition">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-green-800 text-center text-sm py-6 text-gray-400">
                © {new Date().getFullYear()} SportBook. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
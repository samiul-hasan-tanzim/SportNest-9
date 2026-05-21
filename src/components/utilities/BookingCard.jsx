"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaStar, FaUsers, FaHeart } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

const BookingCard = ({ booking }) => {
    // console.log(booking)
    const { _id, facility_id, name, location, image, rating, facility_type, date, timeSlot, capacity, price, total_price, status } = booking;

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col lg:flex-row">

            <div className="relative lg:w-[320px] h-55">

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-101 transition duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                    {facility_type}
                </span>

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    <FaHeart className="text-red-500 text-sm" />
                </button>

                <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-lg flex items-center gap-1 shadow text-sm font-semibold">
                    <FaStar className="text-yellow-500" />
                    {rating}
                </div>

            </div>

            <div className="flex-1 p-6">

                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {name}
                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">

                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-emerald-500" />
                        {location}
                    </p>

                    <p className="flex items-center gap-2">
                        <FaUsers className="text-emerald-500" />
                        {capacity} Players
                    </p>

                </div>

                <div className="flex gap-3 flex-wrap">

                    <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <FaClock className="text-gray-500" />
                        {timeSlot}
                    </span>

                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm">
                        {new Date(date).toDateString()}
                    </span>

                </div>

            </div>

            <div className="lg:w-55 border-t lg:border-t-0 lg:border-l p-6 flex flex-col justify-between">

                <div className="text-right">

                    <p className="text-sm text-gray-500">Total Price</p>

                    <p className="text-2xl font-bold text-emerald-600">
                        ৳ {total_price}
                    </p>

                </div>

                <span
                    className={`self-end px-3 py-1 rounded-full text-xs font-medium ${status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                >
                    {status}
                </span>

                <div className="flex flex-col gap-2">

                    <Link href={`/facilities/${facility_id}`}>
                        <button className="w-full py-2 rounded-lg border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition duration-500 font-medium">
                            View Details
                        </button>
                    </Link>

                    <DeleteModal booking={booking} />

                </div>

            </div>

        </div>
    );
};

export default BookingCard;
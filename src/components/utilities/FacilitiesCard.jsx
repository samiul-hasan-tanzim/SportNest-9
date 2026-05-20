"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaUsers, FaStar, FaClock, FaFutbol } from "react-icons/fa";

const FacilitiesCard = ({ facilities }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const start = (currentPage - 1) * itemsPerPage;
    const currentFacilities = facilities.slice(start, start + itemsPerPage);

    const totalPages = Math.ceil(facilities.length / itemsPerPage);

    return (
        <div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {currentFacilities.map((facility) => (
                    <div
                        key={facility._id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >

                        <div className="relative h-56 overflow-hidden">

                            <Image
                                src={facility.image}
                                alt={facility.name}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-md flex items-center gap-1 text-sm font-medium">
                                <FaStar className="text-yellow-500" />
                                {facility.rating}
                            </div>

                        </div>

                        <div className="p-5">

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {facility.name}
                            </h3>

                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                <FaFutbol className="text-emerald-500" />
                                {facility.facility_type}
                            </p>

                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                <FaMapMarkerAlt className="text-emerald-500" />
                                {facility.location}
                            </p>

                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                <FaUsers className="text-emerald-500" />
                                {facility.maximum_player}
                            </p>

                            <p className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <FaClock className="text-emerald-500" />
                                {facility.opening_time} - {facility.closing_time}
                            </p>

                            <div className="flex justify-between items-center">

                                <p className="text-emerald-600 font-bold">
                                    ৳ {facility.price_per_hour}/hr
                                </p>

                                <Link href={`/facilities/${facility._id}`}>
                                    <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm">
                                        Book Now
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* pagination */}

            <div className="flex justify-center mt-12 gap-2 flex-wrap">

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg border
                ${currentPage === page
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white hover:bg-emerald-50"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

            </div>

        </div>
    );
};

export default FacilitiesCard;
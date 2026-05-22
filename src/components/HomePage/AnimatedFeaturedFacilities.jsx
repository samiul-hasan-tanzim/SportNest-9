'use client'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFutbol, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedFeaturedFacilities = ({ slicedData }) => {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                viewport={{ once: true }} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Featured <span className="text-emerald-500">Facilities</span>
                </h2>

                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Discover top-rated sports facilities and book your slot instantly.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {slicedData.map((facility) => (

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        key={facility._id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <div className="h-52 overflow-hidden">
                            <Image
                                src={facility.image}
                                alt={facility.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5">

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {facility.name}
                            </h3>

                            <p className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <FaFutbol className="text-emerald-500" />
                                <span className="font-medium">Type:</span> {facility.facility_type}
                            </p>

                            <p className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <FaMapMarkerAlt className="text-emerald-500" />
                                <span className="font-medium">Location:</span> {facility.location}
                            </p>

                            <p className="flex items-center gap-2 text-emerald-600 font-semibold mb-4">
                                <FaMoneyBillWave />
                                ৳ {facility.price_per_hour} / hour
                            </p>
                            <Link href={`/facilities/${facility._id}`}>
                                <button className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition flex items-center justify-center gap-2">
                                    Book Now
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </Link>

                        </div>

                    </motion.div>

                ))}

            </div>

        </div>
    );
};

export default AnimatedFeaturedFacilities;
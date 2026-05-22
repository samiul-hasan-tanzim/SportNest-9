'use client'
import { FaBolt, FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChoose = () => {
    return (
        <section className="py-20 bg-linear-to-r from-green-50 to-green-500/5">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-800"
                    >
                        Why Choose <span className="text-emerald-500">SportNest</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-500 mt-3 max-w-2xl mx-auto"
                    >
                        SportNest makes it easy to discover and book top sports facilities
                        near you with just a few clicks.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <motion.div
                        whileHover={{
                            rotateX: 10,
                            rotateY: 5,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: 0.2, duration: 0.6
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow hover:font-bold text-center">
                        <motion.div
                            animate={{ y: -10 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaBolt className="text-emerald-500 text-3xl mx-auto mb-4" />
                        </motion.div>
                        <h3 className="font-semibold text-lg mb-2">Instant Booking</h3>
                        <p className="text-gray-500 text-sm">
                            Reserve your favorite sports facility within seconds.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            rotateX: 10,
                            rotateY: 5,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: 0.2, duration: 0.6
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow hover:font-bold text-center">
                        <motion.div
                            animate={{ y: -10 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaShieldAlt className="text-emerald-500 text-3xl mx-auto mb-4" />
                        </motion.div>
                        <h3 className="font-semibold text-lg mb-2">Verified Facilities</h3>
                        <p className="text-gray-500 text-sm">
                            All listed facilities are verified for quality and safety.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            rotateX: 10,
                            rotateY: 5,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: 0.2, duration: 0.6
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow hover:font-bold text-center">

                        <motion.div
                            animate={{ y: -10 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaClock className="text-emerald-500 text-3xl mx-auto mb-4" />
                        </motion.div>
                        <h3 className="font-semibold text-lg mb-2">Flexible Slots</h3>
                        <p className="text-gray-500 text-sm">
                            Choose from multiple time slots that fit your schedule.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            rotateX: 10,
                            rotateY: 5,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: 0.2, duration: 0.6
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow hover:font-bold text-center">

                        <motion.div
                            animate={{ y: -10 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaUsers className="text-emerald-500 text-3xl mx-auto mb-4" />
                        </motion.div>
                        <h3 className="font-semibold text-lg mb-2">Community Players</h3>
                        <p className="text-gray-500 text-sm">
                            Join thousands of sports lovers booking daily.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
'use client'
import { FaFutbol, FaTableTennis, FaSwimmer, FaBasketballBall } from "react-icons/fa";
import { motion } from "framer-motion";

const SportsCategories = () => {
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
                    viewport={{ once: true }} className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Popular Sports
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Explore facilities for your favorite sports.
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
                    viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 text-center cursor-pointer">
                        <FaFutbol className="text-emerald-500 text-4xl mx-auto mb-4" />
                        <h3 className="font-semibold">Football</h3>
                    </div>

                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 text-center cursor-pointer">
                        <FaTableTennis className="text-emerald-500 text-4xl mx-auto mb-4" />
                        <h3 className="font-semibold">Badminton</h3>
                    </div>

                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 text-center cursor-pointer">
                        <FaSwimmer className="text-emerald-500 text-4xl mx-auto mb-4" />
                        <h3 className="font-semibold">Swimming</h3>
                    </div>

                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 text-center cursor-pointer">
                        <FaBasketballBall className="text-emerald-500 text-4xl mx-auto mb-4" />
                        <h3 className="font-semibold">Basketball</h3>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default SportsCategories;
import { FaBolt, FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";

const WhyChoose = () => {
    return (
        <section className="py-20 bg-linear-to-r from-green-50 to-green-500/5">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Why Choose <span className="text-emerald-500">SportNest</span>
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        SportNest makes it easy to discover and book top sports facilities
                        near you with just a few clicks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <FaBolt className="text-emerald-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Instant Booking</h3>
                        <p className="text-gray-500 text-sm">
                            Reserve your favorite sports facility within seconds.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <FaShieldAlt className="text-emerald-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Verified Facilities</h3>
                        <p className="text-gray-500 text-sm">
                            All listed facilities are verified for quality and safety.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <FaClock className="text-emerald-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Flexible Slots</h3>
                        <p className="text-gray-500 text-sm">
                            Choose from multiple time slots that fit your schedule.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                        <FaUsers className="text-emerald-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Community Players</h3>
                        <p className="text-gray-500 text-sm">
                            Join thousands of sports lovers booking daily.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
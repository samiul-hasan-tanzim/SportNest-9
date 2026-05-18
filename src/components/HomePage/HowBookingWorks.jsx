import { FaSearch, FaCalendarCheck, FaFutbol } from "react-icons/fa";

export default function HowBookingWorks() {
    const steps = [
        {
            icon: <FaSearch className="text-3xl text-green-600" />,
            title: "Find Your Facility",
            description:
                "Browse and explore different sports facilities near you. Check availability, pricing, and features easily.",
        },
        {
            icon: <FaCalendarCheck className="text-3xl text-green-600" />,
            title: "Choose Date & Time",
            description:
                "Select your preferred date and time slot that fits your schedule and confirm availability instantly.",
        },
        {
            icon: <FaFutbol className="text-3xl text-green-600" />,
            title: "Confirm Booking",
            description:
                "Complete your booking and get ready to enjoy your game with your friends or team.",
        },
    ];

    return (
        <section className="py-20 bg-linear-to-b from-green-50 to-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">
                        How Booking Works
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Booking your favorite sports facility is quick and simple.
                    </p>
                </div>

                <div className="relative">

                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-green-200"></div>

                    <div className="grid md:grid-cols-3 gap-10 relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-8 text-center relative hover:shadow-2xl transition"
                            >
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
                                    {index + 1}
                                </div>

                                <div className="mb-4 flex justify-center">
                                    <div className="bg-green-100 p-4 rounded-full">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
import Link from "next/link";
import { FaArrowRight, FaFutbol, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

const tempData = [
    {
        id: "1",
        name: "Greenfield Football Turf",
        facility_type: "Football",
        location: "Dhaka, Bangladesh",
        price_per_hour: 500,
        capacity: 22,
        image: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdbukjj6eu5tsf.cloudfront.net%2fsidearm.sites%2fgreenfieldhs.sidearmsports.com%2fimages%2f2023%2f10%2f3%2fghsstadiumvision2020.jpg&type=webp"
    },
    {
        id: "2",
        name: "Ace Badminton Court",
        facility_type: "Badminton",
        location: "Chittagong, Bangladesh",
        price_per_hour: 200,
        capacity: 4,
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1170&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Bluewave Swimming Pool",
        facility_type: "Swimming",
        location: "Sylhet, Bangladesh",
        price_per_hour: 400,
        capacity: 10,
        image: "https://steptodown.com/istock-downloader/images/steptodown.com212749.jpg"
    },
    {
        id: "4",
        name: "Pro Tennis Court",
        facility_type: "Tennis",
        location: "Rajshahi, Bangladesh",
        price_per_hour: 300,
        capacity: 4,
        image: "https://images.unsplash.com/photo-1774599467191-04e2c399a117?q=80&w=1631&auto=format&fit=crop"
    },
    {
        id: "5",
        name: "City Arena Basketball Court",
        facility_type: "Basketball",
        location: "Khulna, Bangladesh",
        price_per_hour: 350,
        capacity: 10,
        image: "https://danielsensfond.dk/wp-content/uploads/2022/03/GettyImages-1205546287-scaled_1920x1280_acf_cropped-1.jpg"
    },
    {
        id: "6",
        name: "Peak Climbing Gym",
        facility_type: "Climbing",
        location: "Dhaka, Bangladesh",
        price_per_hour: 250,
        capacity: 6,
        image: "https://plus.unsplash.com/premium_photo-1663036257816-7ec9aa328d07?q=80&w=1172&auto=format&fit=crop"
    }
]

const FeaturedFacilities = () => {
    return (
        <section className="py-20 bg-linear-to-r from-blue-500/5 to-blue-500/7">

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Featured <span className="text-emerald-500">Facilities</span>
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Discover top-rated sports facilities and book your slot instantly.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {tempData.map((facility) => (

                        <div
                            key={facility.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.name}
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
                                <Link href={`/facility/${facility.id}`}>
                                    <button className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition flex items-center justify-center gap-2">
                                        Book Now
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default FeaturedFacilities;
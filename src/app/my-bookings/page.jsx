import BookingCard from "@/components/utilities/BookingCard";
import { auth } from "@/lib/auth";
import { bookingData } from "@/lib/fetchingData/data";
import { headers } from "next/headers";
import Link from "next/link";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const bookings = await bookingData(user?.email);
    const total = bookings.reduce((sum, booking) => sum + booking.total_price, 0);

    return (
        <div className="bg-linear-to-b from-emerald-50 via-white to-emerald-100 px-6 min-h-[70vh]">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 mb-10">
                        My Bookings
                    </h1>
                    <h2 className="text-2xl text-gray-800 mb-10">
                        Total: ৳<span className="font-bold">{total}</span>
                    </h2>
                </div>

                {bookings?.length > 0 ? (

                    <div className="space-y-6">
                        {bookings.map((booking) => (
                            <BookingCard key={booking._id} booking={booking} />
                        ))}
                    </div>

                ) : (

                    <div className="flex flex-col items-center justify-center text-center py-24 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg">

                        {/* icon */}
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                            📅
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800">
                            No Bookings Yet
                        </h2>

                        <p className="text-gray-500 mt-2 max-w-sm">
                            You haven’t booked any facility yet. Start exploring and reserve your favorite sports venue.
                        </p>

                        <Link
                            href="/facilities"
                            className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition"
                        >
                            Browse Facilities
                        </Link>

                    </div>

                )}

            </div>

        </div>
    );
};

export default MyBookingsPage;
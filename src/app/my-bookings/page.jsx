import BookingCard from "@/components/utilities/BookingCard";
import { auth } from "@/lib/auth";
import { bookingData } from "@/lib/fetchingData/data";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const bookings = await bookingData(user?.email);

    const statusColor = (status) => {
        if (status === "confirmed") return "bg-green-100 text-green-600";
        if (status === "cancelled") return "bg-red-100 text-red-600";
        return "bg-yellow-100 text-yellow-700";
    };

    return (
        <div className="max-w-6xl mx-auto px-5 py-16">

            <h1 className="text-3xl font-bold text-gray-800 mb-10">
                My Bookings
            </h1>

            <div className="space-y-6">
                {bookings.map((booking) => (
                    <BookingCard key={booking._id} booking={booking} />
                ))}
            </div>

        </div>
    );
};

export default MyBookingsPage;
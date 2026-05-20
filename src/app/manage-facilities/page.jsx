import DeleteFacilitie from "@/components/utilities/DeleteFacilitie";
import UpdateFacilities from "@/components/utilities/UpdateFacilities";
import { auth } from "@/lib/auth";
import { addedFacilitiesData } from "@/lib/fetchingData/data";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const ManageFacilitiesPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const facilities = await addedFacilitiesData(user?.id);

    return (
        <div className="bg-linear-to-b from-emerald-50 via-white to-emerald-100 px-6 min-h-[70vh]">
            <div className="min-h-screen py-16 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="mb-12 text-center md:text-left">
                        <h1 className="text-4xl font-black bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Manage My Facilities
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Update or remove your sports facilities
                        </p>
                    </div>

                    {facilities?.length > 0 ? (

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                            {facilities.map((facility) => (
                                <div
                                    key={facility._id}
                                    className="relative w-full max-w-90 h-120 rounded-[32px] overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.02]"
                                >

                                    <Image
                                        src={facility.image}
                                        alt={facility.name}
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end">

                                        <div className="backdrop-blur-xs bg-black/10 rounded-sl p-4 border border-white/5 space-y-4">

                                            <div>
                                                <h3 className="text-2xl font-semibold text-white tracking-wide">
                                                    {facility.name}
                                                </h3>

                                                <p className="text-sm text-gray-300/90 font-light mt-1 line-clamp-2">
                                                    Located at {facility.location}. Premium arena perfect for matches, training, and tournaments.
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">

                                                <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                                                    ⭐ {facility.rating} ({facility.facility_type})
                                                </span>

                                                <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                                                    ৳{facility.price_per_hour}/hr
                                                </span>

                                            </div>

                                            <div className="flex gap-2 pt-1">
                                                <UpdateFacilities facility={facility} />
                                                <DeleteFacilitie facility={facility} />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>

                    ) : (

                        <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-3xl shadow-lg border border-gray-200">

                            <div className="text-6xl mb-4">
                                🏟️
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-800">
                                No Facilities Added
                            </h2>

                            <p className="text-gray-500 mt-2 max-w-md">
                                You haven&apos;t added any sports facility yet. Start by creating one and allow users to book it.
                            </p>

                            <Link
                                href="/add-facility"
                                className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition"
                            >
                                Add Facility
                            </Link>

                        </div>

                    )}

                </div>

            </div>
        </div>
    );
};

export default ManageFacilitiesPage;
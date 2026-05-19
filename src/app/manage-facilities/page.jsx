import UpdateFacilities from "@/components/utilities/UpdateFacilities";
import { auth } from "@/lib/auth";
import { addedFacilitiesData } from "@/lib/fetchingData/data";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";


const ManageFacilitiesPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user

    const facilities = await addedFacilitiesData(user?.id)

    return (
        <div className="min-h-screen bg-[#f3f3f3] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-black bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Manage My Facilities
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Update or remove your sports facilities
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {facilities.map((facility) => (
                        <div
                            key={facility._id}
                            className="relative w-full max-w-90 h-120 rounded-[32px] overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.02]"
                        >
                            {/* Full-bleed Background Image */}
                            <Image
                                src={facility.image}
                                alt={facility.name}
                                fill
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* The Gradient Dark Overlay & Blur Panel at the bottom */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end">

                                {/* Inner Glassmorphism Content Area */}
                                <div className="backdrop-blur-xs bg-black/10 rounded-sl p-4 border border-white/5 space-y-4">

                                    {/* Title & Location */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white tracking-wide">
                                            {facility.name}
                                        </h3>
                                        <p className="text-sm text-gray-300/90 font-light mt-1 line-clamp-2">
                                            Located at {facility.location}. Premium arena perfect for matches, training, and tournaments.
                                        </p>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                                            ⭐ 4.8 ({facility.facility_type})
                                        </span>
                                        <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                                            ৳{facility.price_per_hour}/hr
                                        </span>
                                    </div>

                                    {/* Action Buttons styled like the 'Reserve Now' element */}
                                    <div className="flex gap-2 pt-1">
                                        <UpdateFacilities facility={facility} />

                                        <Button
                                            variant="flat"
                                            className="h-12 w-12 min-w-12 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center border border-red-500/30"
                                        >
                                            <TrashBin className="w-5 h-5" />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageFacilitiesPage;
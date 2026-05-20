import FacilitiesCard from "@/components/utilities/FacilitiesCard";
import FacilitySearchBar from "@/components/utilities/FacilitySearchBar";
import { allFacilitiesData } from "@/lib/fetchingData/data";

const FacilitiesPage = async ({ searchParams }) => {
    const searchResults = await searchParams

    const facilities = await allFacilitiesData(searchResults?.searchQuery || '');

    return (
        <div className="bg-linear-to-b from-emerald-50 via-white to-emerald-100 px-6 min-h-[70vh]">

            <div className="max-w-7xl mx-auto px-5 py-16">

                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Explore Sports Facilities
                    </h1>

                    <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                        Find and book the best sports facilities near you.
                        Search for football fields, badminton courts, cricket grounds and more.
                    </p>
                </div>

                <FacilitySearchBar />

                {
                    facilities.length > 0 ? (
                        <FacilitiesCard facilities={facilities} />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">

                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-emerald-100 mb-5">
                                🔍
                            </div>

                            <h3 className="text-xl font-semibold text-gray-700">
                                No Facilities Found
                            </h3>

                            <p className="text-gray-500 mt-2 max-w-md">
                                We couldn&apos;t find any facilities matching your search.
                                Try searching with a different sport, location, or keyword.
                            </p>
                            {/* 
                            <Link
                                href="/facilities"
                                className="mt-6 px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
                            >
                                Reset Search
                            </Link> */}

                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default FacilitiesPage;
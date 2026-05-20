import FacilitiesCard from "@/components/utilities/FacilitiesCard";
import { allFacilitiesData } from "@/lib/fetchingData/data";

const FacilitiesPage = async () => {
    const facilities = await allFacilitiesData();

    return (
        <div className="bg-linear-to-b from-emerald-50 via-white to-emerald-100 px-6 min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-5 py-16">
                <FacilitiesCard facilities={facilities} />
            </div>
        </div>
    );
};

export default FacilitiesPage;
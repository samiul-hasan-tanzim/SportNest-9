import FacilitiesCard from "@/components/utilities/FacilitiesCard";
import { allFacilitiesData } from "@/lib/fetchingData/data";

const FacilitiesPage = async () => {
    const facilities = await allFacilitiesData();

    return (
        <div className="max-w-7xl mx-auto px-5 py-16">
            <FacilitiesCard facilities={facilities} />
        </div>
    );
};

export default FacilitiesPage;
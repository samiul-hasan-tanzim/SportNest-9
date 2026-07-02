import FacilitiesDetailsCard from "@/components/utilities/FacilitiesDetailsCard";
import { singleFacilitiesData } from "@/lib/fetchingData/data";


const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const facility = await singleFacilitiesData(id);

    return (
        <div className="bg-linear-to-b from-emerald-50 via-white to-emerald-100 px-6 min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-8 py-12">

                <FacilitiesDetailsCard facility={facility} />

            </div>
        </div>
    );
};

export default DetailsPage;
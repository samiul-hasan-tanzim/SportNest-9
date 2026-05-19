import FacilitiesDetailsCard from "@/components/utilities/FacilitiesDetailsCard";
import { singleFacilitiesData } from "@/lib/fetchingData/data";


const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const facility = await singleFacilitiesData(id);

    return (
        <div className="max-w-7xl mx-auto px-5 py-12">

            <FacilitiesDetailsCard facility={facility} />

        </div>
    );
};

export default DetailsPage;
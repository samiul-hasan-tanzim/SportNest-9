import { allFacilitiesData } from "@/lib/fetchingData/data";
import AnimatedFeaturedFacilities from "./AnimatedFeaturedFacilities";

const FeaturedFacilities = async () => {
    const featuredData = await allFacilitiesData()
    const slicedData = featuredData.slice(0, 6);

    return (
        <section className="py-20 bg-linear-to-r from-blue-500/5 to-blue-500/7">

            <AnimatedFeaturedFacilities slicedData={slicedData} />

        </section>
    );
};

export default FeaturedFacilities;
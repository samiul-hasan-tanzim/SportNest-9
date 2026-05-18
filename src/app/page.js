import Banner from "@/components/HomePage/Banner";
import FeaturedFacilities from "@/components/HomePage/FeaturedFacilities";
import HowBookingWorks from "@/components/HomePage/HowBookingWorks";
import SportsCategories from "@/components/HomePage/SportsCategories";
import WhyChoose from "@/components/HomePage/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChoose />
      <FeaturedFacilities />
      <SportsCategories />
      <HowBookingWorks />
    </div>
  );
}

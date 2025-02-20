import Background from "@/components/Background";
import Coupons from "@/components/Coupons";
import Features from "@/components/Features";
import HotelForm from "@/components/HotelForm";
import MainNavbar from "@/components/MainNavbar";
import SubFeatures from "@/components/SubFeatures";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div className="p-6">
      <Background />
      <div className="relative w-full">
        <MainNavbar />
      </div>

      <div className="relative text-3xl text-center text-white font-bold mt-8">
        From Southeast Asia to the World, All Yours.
      </div>

      <div className="mt-4">
        <Features />
        <SubFeatures />
        <HotelForm />
        <Trust />
      </div>
      <div className="relative w-full md:bottom-[-13vh]">
        <Coupons />
      </div>
    </div>
  );
}

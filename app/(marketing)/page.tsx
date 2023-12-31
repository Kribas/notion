import { Button } from "@/components/ui/button";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";
import Footer from "./_components/Footer";

export default function MarketingPager23W() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-1 items-center justify-center flex-col md:justify-start text-center gap-y-8 p-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}

import { Hero } from "@/components";
import { OurChannels } from "@/components/our-channels";
import { Offers } from "@/components/offers";
import { OurServices } from "@/components/our-services";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Hero />
      <OurServices />
      <Offers />
      <OurServices />
      <OurChannels />
    </div>
  );
}

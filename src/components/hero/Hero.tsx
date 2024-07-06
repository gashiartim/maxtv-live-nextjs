import { type FC } from "react";
import { Image } from "@/components/ui";
import heroBannerImg from "@/assets/home/hero-1.jpg";

type HeroItemProps = {};

export const HeroItem: FC<HeroItemProps> = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="Hero Banner Image"
          src={heroBannerImg}
          className="w-full h-full"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
      <div className="container bg-red-500 z-10">test</div>
    </div>
  );
};

type HeroProps = {};

export const Hero: FC<HeroProps> = () => {
  return (
    <div className="w-full">
      <HeroItem />
    </div>
  );
};

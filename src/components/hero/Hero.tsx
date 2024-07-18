"use client";
import { type FC } from "react";
import { Button, Image } from "@/components/ui";
import heroBannerImg from "@/assets/home/hero-1.jpg";
import Icon from "@/components/icon/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      {/* content::: */}
      <div className="container z-10 relative">
        <div className="text-primary uppercase text-sm font-semibold mb-5">
          Best Mobile TV Experience
        </div>
        <h1 className="text-7xl font-semibold capitalize w-full max-w-3xl">
          Watch your <br /> favorite on the go.
        </h1>
        <div className="mt-10">
          <div className="flex items-end gap-1">
            <span className=" font-medium">€</span>
            <div className="text-4xl font-semibold">99</div>
            <div>/ Month</div>
          </div>
        </div>
        <p className="text-primary font-medium capitalize">
          The best TV experience.
        </p>
        <div className="flex gap-10 items-center mt-10">
          <Button size="lg" className="rounded-full">
            Get Started
          </Button>
          <div className="flex items-center gap-3">
            <div className="h-[44px] w-[44px] rounded-full bg-white flex items-center justify-center">
              <Icon type="phone" className="h-6 w-6 text-primary" />
            </div>
            <div className="text-white">
              <p className="text-xs font-medium">Give us a call</p>
              <div className="font-semibold text-lg">+383 43 232 332</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type HeroProps = {};

export const Hero: FC<HeroProps> = () => {
  return (
    <Carousel
      className="w-full h-full relative"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="w-full">
          <HeroItem />
        </CarouselItem>
        <CarouselItem>
          <HeroItem />
        </CarouselItem>
        <CarouselItem>
          <HeroItem />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute z-10 top-0 w-full inset-0 container 2xl:max-w-[90%] flex items-center justify-between">
        <CarouselPrevious className="static bg-transparent hover:bg-primary hover:border-primary hover:text-white w-14 h-14" />
        <CarouselNext className="static bg-transparent hover:bg-primary hover:border-primary hover:text-white w-14 h-14" />
      </div>
    </Carousel>
  );
};

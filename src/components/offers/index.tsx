import { type FC } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionLayout } from "../section-layout";
import { Button } from "../ui";
import Icon from "../icon/Icon";

type OfferProps = {};

export const Offer: FC<OfferProps> = () => {
  return (
    <div className="w-full max-w-[350px] relative h-max">
      <div className="h-[80px] bg-primary rounded-t-full mx-auto w-full max-w-[90%] -mb-5 flex justify-center">
        <div className="uppercase font-semibold text-lg text-white mt-4">
          Promo
        </div>
      </div>
      <div className="h-full bg-primary-foreground rounded-[40px] relative z-[1] overflow-hidden">
        <div className="flex items-center justify-center py-10 uppercase border-b">
          <div className="text-secondary-foreground font-bold">
            <div className="flex text-6xl font-bold items-start">
              <span>150</span> <span className="text-sm mt-1.5">MBPS</span>
            </div>
            <span className="text-sm">Premium Package</span>
          </div>
        </div>
        <div className="py-6 border-b">
          <ul className="text-secondary-foreground mx-auto w-max flex flex-col gap-3 text-sm font-medium">
            <li className="flex items-center gap-1.5">
              <Icon type="check-circle" className="w-5 h-5 text-primary" />
              <span>100 Mbps youtube</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Icon type="check-circle" className="w-5 h-5 text-primary" />
              <span>Connect Multiple Users</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Icon type="check-circle" className="w-5 h-5 text-primary" />
              <span>Wifi Router & Prevention</span>
            </li>
          </ul>
        </div>

        <div className="py-6 px-9 border-b text-center">
          <p className="text-secondary-foreground font-semibold text-[13px]">
            <span className="text-primary">5%</span> VAT Included Installation
            Charge: 1500 TK
          </p>
        </div>
        <div className="bg-blue-600 p-8 flex justify-center">
          <div className="font-medium text-sm">
            <span className="text-xl font-semibold">$</span>{" "}
            <span className="font-bold text-5xl">250</span>{" "}
            <span className="font-medium">/ PER MONTH</span>
          </div>
        </div>
      </div>
      <div className="h-[80px] bg-primary rounded-b-full mx-auto w-full max-w-[90%] -mt-5 flex justify-center items-center">
        <div className="font-semibold text-base text-white mt-4">
          Get Started
        </div>
      </div>
    </div>
  );
};

type OffersProps = {};

export const Offers: FC<OffersProps> = () => {
  return (
    <div className="w-full bg-blue-600/20 relative text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-[1]"></div>

      <SectionLayout className="container grid grid-cols-12 w-full relative z-[2]">
        <div className="col-span-4 flex flex-col justify-center">
          <SectionTitle
            className="!items-start"
            label="IPTV"
            title={
              <>
                Discount Up to <span className="text-primary">30%</span> For New
                Members
              </>
            }
            description="Get the best IPTV experience with our premium plans."
            options={{ titleClassName: "max-w-[400px]" }}
          />
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full"></div>
              <p className="text-sm font-medium max-w-32">
                Reliable Multichannel TV
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full"></div>
              <p className="text-sm font-medium max-w-32">
                Reliable Multichannel TV
              </p>
            </div>
          </div>
          <Button className="mt-10 w-max" size="lg">
            Learn More
          </Button>
        </div>
        <div className="col-span-8 gap-5 flex justify-end">
          <Offer />
          <Offer />
        </div>
      </SectionLayout>
    </div>
  );
};

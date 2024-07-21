import { type FC } from "react";
import { SectionTitle } from "../ui/section-title";
import { ServiceCard } from "./ServiceCard";

type OurServicesProps = {};

export const OurServices: FC<OurServicesProps> = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="container py-24">
        <SectionTitle
          label="Our Services"
          title="Services we're offering"
          className="mb-10"
        />
        <div className="lg:grid lg:grid-cols-4 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

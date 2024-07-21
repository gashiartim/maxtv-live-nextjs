import { type FC } from "react";
import Icon from "@/components/icon/Icon";

type ServiceCardProps = {};

export const ServiceCard: FC<ServiceCardProps> = () => {
  return (
    <div className="h-[273px] w-full relative text-foreground shadow-sm rounded-lg p-5 bg-white">
      <span>Hello World!!!</span>
      <div className="absolute inset-0 p-8 flex items-start flex-col justify-end">
        <Icon type="cart" className="w-9 h-9 text-primary" />
        <div className="font-bold mt-4 text-lg w-full lg:max-w-[80%]">
          Fiber line & Broadband line
        </div>
      </div>
    </div>
  );
};

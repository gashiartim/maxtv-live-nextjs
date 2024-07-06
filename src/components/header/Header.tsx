import { type FC } from "react";
import { Logo } from "@/components/logo/Logo";
import { Navigation } from "@/components/navigation/Navigation";
import Icon from "@/components/icon/Icon";
import { Socials } from "@/components/socials/Socials";
import { LanguageSelect } from "@/components";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="container pt-3 text-secondary-foreground absolute z-10 mx-auto inset-x-0">
      <div className="bg-primary text-white flex items-center justify-between lg:px-10 py-3 rounded-full w-[90%] mx-auto relative z-[1] text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Icon type="email" className="w-4 h-4" />
            <span>maxtv@contact.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon type="phone" className="w-4 h-4" />
            <span>+38343000000</span>
          </div>
        </div>
        <Socials />
      </div>
      <div className="flex items-center justify-between bg-white px-10 pb-8 pt-[48px] rounded-full -mt-4">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-5">
          <Icon type="cart" className="text-black w-5 h-5" />
          {/* <div className="text-sm font-medium flex items-center gap-x-1">
            English
            <Icon type="chevron" className="w-5 h-5" />
          </div> */}
          <LanguageSelect />
        </div>
      </div>
      <div className="flex flex-col gap-y-[1px] mt-[1px]">
        <div className="bg-white w-[80%] mx-auto h-[1px]"></div>
        <div className="bg-white w-[70%] mx-auto h-[1px]"></div>
        <div className="bg-white w-[90%] mx-auto h-[1px]"></div>
      </div>
    </header>
  );
};

import { type FC } from "react";
import Icon, { IconType } from "@/components/icon/Icon";
import Link from "next/link";

export type TSocialLink = {
  name: string;
  href: string;
  icon: IconType;
};

export const SOCIAL_LINKS: TSocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: "instagram",
  },
];

type SocialsProps = {};

export const Socials: FC<SocialsProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {SOCIAL_LINKS.map(({ name, href, icon }) => (
        <Link key={name} href={href}>
          <Icon type={icon} className="w-4 h-4" />
        </Link>
      ))}
    </div>
  );
};

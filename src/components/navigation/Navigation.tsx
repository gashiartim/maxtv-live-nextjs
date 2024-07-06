"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type FC } from "react";

export type TNavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: TNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

type NavigationProps = {};

export const Navigation: FC<NavigationProps> = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="text-secondary-foreground">
      <ul className="flex items-center gap-10 capitalize font-semibold">
        {NAV_ITEMS.map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                "hover:opacity-80 duration-75 ease-in-out   ",
                {
                  "text-primary": isActive(item.href),
                }
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

import Link from "next/link";
import { type FC } from "react";

type LogoProps = {};

export const Logo: FC<LogoProps> = () => {
  return (
    <Link href="/" className="text-3xl font-bold">
      <span className="text-primary">Max</span>
      <span className="text-secondary-foreground">TV</span>
    </Link>
  );
};

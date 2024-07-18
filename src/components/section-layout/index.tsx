import classNames from "classnames";
import { ReactNode, type FC } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
};

export const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("container py-24", className)}>{children}</div>
  );
};

import { type FC } from "react";

type IconProps = {
  className?: string;
};

export const CloseIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2L13.3137 13.3137"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.3135 2L1.99977 13.3137"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

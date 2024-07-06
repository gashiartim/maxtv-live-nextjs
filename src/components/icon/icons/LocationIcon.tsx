import { type FC } from "react";

type LocationIconProps = {};

export const LocationIcon: FC<LocationIconProps> = (props) => {
  return (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.81111C0 3.60884 4.06776 0.5 8 0.5C11.9322 0.5 16 3.60884 16 8.81111C16 14.3282 8.64612 22.0316 8.33271 22.3568C8.24471 22.4487 8.12471 22.5 8 22.5C7.87529 22.5 7.75529 22.4487 7.66729 22.3568C7.35388 22.0316 0 14.3282 0 8.81111ZM5.17676 8.81126C5.17676 10.429 6.44311 11.7446 8.00029 11.7446C9.55746 11.7446 10.8238 10.429 10.8238 8.81126C10.8238 7.19353 9.55746 5.87793 8.00029 5.87793C6.44311 5.87793 5.17676 7.19353 5.17676 8.81126Z"
        fill="#01426C"
      />
    </svg>
  );
};

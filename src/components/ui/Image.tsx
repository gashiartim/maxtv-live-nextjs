import { type FC } from "react";
import {
  default as NextImage,
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image";
import classNames from "classnames";
import comingSoonImg from "@/assets/shared/coming-soon.png";

type ImageProps = {
  wrapperClassName?: string;
  src?: StaticImageData | string;
} & Omit<NextImageProps, "src">;

export const Image: FC<ImageProps> = ({
  wrapperClassName,
  className,
  src = comingSoonImg,
  ...props
}) => {
  const imageWrapperClassNames = classNames(
    "relative w-full h-full",
    wrapperClassName
  );
  const imageClassNames = classNames(
    "w-full object-cover object-center h-full",
    className
  );

  return (
    <div className={imageWrapperClassNames}>
      <NextImage
        src={src}
        placeholder="blur"
        {...props}
        className={imageClassNames}
      />
    </div>
  );
};

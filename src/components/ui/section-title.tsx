import classNames from "classnames";
import { ReactNode, type FC } from "react";

type SectionTitleProps = {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
  options?: {
    labelClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  };
};

export const SectionTitle: FC<SectionTitleProps> = ({
  label,
  options,
  className,
  title,
  description,
}) => {
  return (
    <div
      className={classNames("flex flex-col items-center gap-y-3", className)}
    >
      <div className={classNames("text-sm uppercase", options?.labelClassName)}>
        {label}
      </div>
      <div
        className={classNames(
          "font-semibold text-4xl",
          options?.titleClassName
        )}
      >
        {title}
      </div>
      {description && (
        <p
          className={classNames(
            "text-sm text-center",
            options?.descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

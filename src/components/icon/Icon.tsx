import { SVGProps, memo, type FC } from "react";
import {
  ArrowIcon,
  BestToolsAndTechIcon,
  BestWaysOfWorkingIcon,
  CartIcon,
  ChevronIcon,
  CloseIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  LogoIcon,
  MenuIcon,
  PhoneIcon,
  RightArrowIcon,
  SettingsIcon,
  TwitterIcon,
  NetflixIcon,
  CheckCircleIcon,
} from "./icons";

export type IconType =
  | "logo"
  | "rightArrow"
  | "netflix"
  | "settings"
  | "arrow"
  | "chevron"
  | "close"
  | "menu"
  | "best_tools_tech"
  | "best_ways_of_working"
  | "phone"
  | "email"
  | "location"
  | "cart"
  | "facebook"
  | "instagram"
  | "twitter"
  | "check-circle";

const icons: Record<IconType, FC<Omit<IconProps, "type">>> = {
  logo: LogoIcon,
  netflix: NetflixIcon,
  rightArrow: RightArrowIcon,
  settings: SettingsIcon,
  arrow: ArrowIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  menu: MenuIcon,
  best_tools_tech: BestToolsAndTechIcon,
  best_ways_of_working: BestWaysOfWorkingIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  cart: CartIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  "check-circle": CheckCircleIcon,
};

type IconProps = {
  type: IconType;
  className?: string;
  onClick?: () => void;
} & Partial<SVGProps<SVGSVGElement>>;

const Icon: FC<IconProps> = ({ type, ...props }) => {
  const Component = icons[type];

  return <Component {...props} />;
};

export default memo(Icon);

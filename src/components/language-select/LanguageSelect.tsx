import { type FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

type LanguageSelectProps = {};

export const LanguageSelect: FC<LanguageSelectProps> = () => {
  return (
    <Select defaultValue="shqip">
      <SelectTrigger className="w-[80px] border-none p-0 py-0 text-sm font-medium flex items-center gap-x-1 h-5">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="shqip">Shqip</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="deutsch">Deustch</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

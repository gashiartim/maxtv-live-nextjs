import { type FC } from "react";
import { SectionLayout } from "@/components/section-layout";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/fade-in";
import { Button, Image } from "@/components/ui";
import Icon from "../icon/Icon";

type OurChannelsProps = {};

export const OurChannels: FC<OurChannelsProps> = () => {
  return (
    <div className="bg-white w-full">
      <SectionLayout>
        <SectionTitle
          label="Channels"
          title="Our Channels"
          description="We offer a wide range of channels, from sports to entertainment, to news and more."
          className="mb-10"
        />

        <FadeIn>
          <div className="grid grid-cols-8 h-[644px] gap-3">
            <div className="col-span-2 flex flex-col gap-y-3">
              <div className="h-[394px] rounded-[4px] overflow-hidden">
                <Image
                  src="/action-movies-1.webp"
                  alt="Image 1"
                  wrapperClassName="w-full h-full"
                  width={300}
                  height={394}
                  blurDataURL="/action-movies-1.webp"
                />
              </div>
              <div className="h-[238px] rounded-[4px] overflow-hidden">
                <Image
                  src="/music-1.webp"
                  width={300}
                  height={238}
                  blurDataURL="/music-1.webp"
                  alt="Image 2"
                  wrapperClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-y-3">
              <div className="h-[238px] w-full flex gap-x-3">
                <div className="w-full rounded-[4px] overflow-hidden">
                  <Image
                    src="/documentary-1.jpg"
                    blurDataURL="/documentary-1.jpg"
                    width={300}
                    height={238}
                    alt="Image 3"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="w-full rounded-[4px] overflow-hidden">
                  <Image
                    src="/news-1.jpg"
                    blurDataURL="/news-1.jpg"
                    width={300}
                    height={238}
                    alt="Image 4"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full h-[394px] rounded-[4px] overflow-hidden">
                <Image
                  src="/champions-league-1.png"
                  blurDataURL="/champions-league-1.png"
                  width={600}
                  height={394}
                  alt="Image 5"
                  wrapperClassName="w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-y-3">
              <div className="h-[394px] rounded-[4px] overflow-hidden">
                <Image
                  src="/box.jpg"
                  blurDataURL="/box.jpg"
                  width={300}
                  height={394}
                  alt="Image 6"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <div className="h-[238px] rounded-[4px] overflow-hidden">
                <Image
                  src="/cartoons.jpg"
                  blurDataURL="/cartoons.jpg"
                  width={300}
                  height={238}
                  alt="Image 7"
                  wrapperClassName="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center mt-[48px]">
            <Button variant="outline" size="sm" className="group">
              Check our Gallery
              <Icon
                type="arrow"
                className="text-primary group-hover:text-white"
              />
            </Button>
          </div> */}
        </FadeIn>
      </SectionLayout>
    </div>
  );
};

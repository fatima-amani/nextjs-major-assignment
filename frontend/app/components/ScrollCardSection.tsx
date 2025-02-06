import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ScrollCard1 from "./ScrollCard1";
import ScrollCard2 from "./ScrollCard2";


interface ScrollCardData {
  img: string;
  title: string;
  detail: string;
  stock: boolean;
  price: number;
  qty:number
}

interface ScrollCardSectionProps {
  scrollCards: ScrollCardData[];
}

export default function ScrollCardSection({ scrollCards }: ScrollCardSectionProps) {
  return (
    <div className="flex justify-between items-center flex-wrap">

      <div className="w-[35.9375rem] h-[25.125rem] bg-[#292C2D] pt-5 pl-5 pr-5 mt-5">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-[1.5625rem] font-medium leading-[2.34375rem] text-left text-white font-[Poppins]">
                Popular Dishes
              </div>
              <div>
                <a
                  href="/dishes"
                  className="font-[Poppins] text-[1rem] font-normal leading-6 text-right text-[#FAC1D9] underline decoration-solid"
                >
                  See All
                </a>
              </div>
            </div>

            {/* Scrollable Area */}
            <ScrollArea className="h-[18rem] w-full rounded-md ">
              <div className="p-2 space-y-4">
                {scrollCards.length > 0 ? (
                  scrollCards.map((dish, index) => (
                    <React.Fragment key={index}>
                      <ScrollCard1 dish={dish} />
                    </React.Fragment>
                  ))
                ) : (
                  <p className="text-center text-white">No popular dishes available.</p>
                )}
              </div>
            </ScrollArea>
          </div>


          <div className="w-[35.9375rem] h-[25.125rem] bg-[#292C2D] pt-5 pl-5 pr-5 mt-5">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-[1.5625rem] font-medium leading-[2.34375rem] text-left text-white font-[Poppins]">
                Popular Dishes
              </div>
              <div>
                <a
                  href="/dishes"
                  className="font-[Poppins] text-[1rem] font-normal leading-6 text-right text-[#FAC1D9] underline decoration-solid"
                >
                  See All
                </a>
              </div>
            </div>

            {/* Scrollable Area */}
            <ScrollArea className="h-[18rem] w-full rounded-md ">
              <div className="p-2 space-y-4">
                {scrollCards.length > 0 ? (
                  scrollCards.map((dish, index) => (
                    <React.Fragment key={index}>
                      <ScrollCard2 dish={dish} />
                    </React.Fragment>
                  ))
                ) : (
                  <p className="text-center text-white">No popular dishes available.</p>
                )}
              </div>
            </ScrollArea>
          </div>
    </div>
  );
}

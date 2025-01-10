"use client";

import {
  Heart,
  MapPin,
  Wifi,
  PocketIcon as Pool,
  Building2,
  Star,
  ExternalLink,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";
import cardImage from "../public/assets/image.png";
import dextopCardImage from "../public/assets/dextop-image.png";
import locationIcon from "../public/assets/location.png";
import swimIcon from "../public/assets/SwimmingPool.png";
import wifiIcon from "../public/assets/WifiHigh.png";
import cityIcon from "../public/assets/city.png";
import thumbIcon from "../public/assets/thumb_up.png";

const hotelImages = [cardImage, cardImage, cardImage, cardImage];

export default function HotelCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="flex flex-col items-center">
      {/* Mobile Card */}
      <Card className="md:hidden overflow-hidden max-w-[337px] rounded-[16px] px-2 pt-2 pb-[12px]">
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {hotelImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-[16px]">
                    <Image
                      src={image}
                      alt={`Room view ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={320}
                      height={200}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" /> */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <div className="flex flex-row gap-2 bg-[#9E9E9E59] bg-opacity-[0.35] rounded-[18px] min-w-[54px] px-[5px] py-[5px]">
                {hotelImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      current === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
          <button className="absolute right-4 top-4 z-10 bg-[#9E9E9E59] bg-opacity-[0.35] rounded-full p-2">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="card-content">
          <div className="flex items-start justify-between mb-[12px] mt-4">
            <h2 className="text[16px] font-airbnbCereal font-airbnbCereal-bold leading-[21px]">
              Hotel Golden Palace, Puri
            </h2>
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            {/* <MapPin className="w-4 h-4 color-blue" /> */}
            <Image src={locationIcon} alt="location" width={16} height={16} />
            <span className="text-[14px] font-airbnbCereal font-airbnbCereal-small leading-[18px]">
              VIP Rd, City, Puri, Odisha 752001
            </span>
          </div>

          <div className="flex items-center gap-1 text-[12] font-airbnbCereal font-airbnbCereal-small text-primary-blue mb-4">
            <button className="hover:underline">View property in map</button>
            <ExternalLink className="w-4 h-4" />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-1 text-sm">
              {/* <Wifi className="w-4 h-4" /> */}
              <Image src={wifiIcon} alt="wifi" width={16} height={16} />
              <span>Free Wifi</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {/* <Pool className="w-4 h-4" /> */}
              <Image src={swimIcon} alt="swim" width={16} height={16} />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {/* <Building2 className="w-4 h-4" /> */}
              <Image src={cityIcon} alt="city" width={16} height={16} />
              <span>City View</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-[12px] font-airbnbCereal-small font-airbnbCereal bg-[#E1E1E159] bg-opacity-[.35] rounded-[7px] px-[6px] py-[4px]">
              <Image
                src={thumbIcon}
                alt="like"
                width={16}
                height={16}
                className="mr-[6px]"
              />
              <span className="text-[16px] text-[#000] font-airbnbCereal font-airbnbCereal-medium leading-[20.83px]">4.5</span>
              <span className="text-[16px] text-[#626262] font-airbnbCereal font-airbnbCereal-small leading-[20.83px] ml-1">(23 Reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-[16px] font-airbnbCereal font-airbnbCereal-bold text-primary-blue">
                ₹31,440.87
              </span>
              <span className="text-[16px] font-airbnbCereal font-airbnbCereal-small text-primary-grey">
                /3 nights
              </span>
            </div>
            <Button className="font-airbnbCereal font-airbnbCereal-medium leading-[18px] rounded-[4px] bg-white text-primary-blue border border-[#5054D9]">
              Choose Room
            </Button>
          </div>
        </div>
      </Card>

      {/* Desktop Card */}
      <Card className="hidden md:flex w-[1088px] h-[246px] mx-auto rounded-[16px] p-4 relative">
        {/* Left Image Section */}
        {/* <div className="w-[335px] h-[216px] relative overflow-hidden rounded-[16px]">
          <Image
            src={hotelImages[0]}
            alt="Room view"
            className="w-full h-full object-cover"
          />
          <button className="absolute right-4 top-4 bg-black/35 rounded-full p-2">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div> */}
        <div className="w-[335px] h-[216px] relative overflow-hidden rounded-[16px]">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {hotelImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="w-[335px] h-[216px] relative overflow-hidden rounded-[16px]">
                    <Image
                      src={image}
                      alt={`Room view ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={320}
                      height={200}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" /> */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <div className="flex flex-row gap-2 bg-[#9E9E9E59] bg-opacity-[0.35] rounded-[18px] min-w-[54px] px-[5px] py-[5px]">
                {hotelImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      current === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
          <button className="absolute right-4 top-4 z-10 bg-[#9E9E9E59] bg-opacity-[0.35] rounded-full p-2">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Middle Content Section */}
        <div className="flex-1 pl-6">
          <div className="flex  flex-row gap-[16px] mb-4 items-center">
            <div className="text-[24px] font-airbnbCereal font-airbnbCereal-bold leading-[31px]">
              Hotel Golden Palace, Puri
            </div>
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
          </div>

          <div className="text-[14px] text-[#626262] font-airbnbCereal font-airbnbCereal-small leading-[18px] mb-4">
            VIP Rd, Puri, Odisha-752002
          </div>

          <div className="flex items-center gap-1  mb-4">
            <div className="mr-2 text-[12px] text-primary-blue font-airbnbCereal font-airbnbCereal-bold leadin-[15.6px] hover:underline">View property in map</div>
            <ExternalLink className="w-4 h-4" />
            <span className="ml-4 text-[12px] text-[#424242] font-airbnbCereal font-airbnbCereal-medium leading-[15.6px]">📍 34.32 KM from center</span>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-1 text-sm">
              {/* <Wifi className="w-4 h-4" /> */}
              <Image src={wifiIcon} alt="wifi" width={16} height={16} />
              <span>Free Wifi</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {/* <Pool className="w-4 h-4" /> */}
              <Image src={swimIcon} alt="swim" width={16} height={16} />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {/* <Building2 className="w-4 h-4" /> */}
              <Image src={cityIcon} alt="city" width={16} height={16} />
              <span>City View</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-[12px] font-airbnbCereal-small font-airbnbCereal bg-[#E1E1E159] bg-opacity-[.35] rounded-[7px] px-[6px] py-[4px]">
              <Image
                src={thumbIcon}
                alt="like"
                width={16}
                height={16}
                className="mr-[6px]"
              />
                   <span className="text-[16px] text-[#000] font-airbnbCereal font-airbnbCereal-medium leading-[20.83px]">4.5</span>
                   <span className="text-[16px] text-[#626262] font-airbnbCereal font-airbnbCereal-small leading-[20.83px] ml-1">(23 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute right-[220px] top-4 bottom-4 w-[1px] bg-[#E2E8F0]" />

        {/* Right Price Section */}
        <div className="w-[200px] text-right flex flex-col ">
          <div className="flex gap-2 ml-auto mb-[16px]">
            <Badge className="bg-[#B8BBFF40] bg-opacity-[.25] text-[#5054D9] hover:bg-[#EEF4FF] font-normal px-3">
              Best
            </Badge>
            <Badge className="bg-[#FFD18140] bg-opacity-[.25] text-[#F99F1D] hover:bg-[#FFF7ED] font-normal px-3">
              Cheapest
            </Badge>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-[14px] text-[#64748B] line-through">
              ₹34,440.87
            </div>
            <div className="text-[24px] font-bold text-[#3538CD]">
              ₹31,440.87
            </div>
          </div>
          <div className="text-[12px] text-[#64748B]">
            Includes Taxes & Charges
          </div>
          <div className="text-[14px] mt-2">3 nights</div>
          <div className="text-[14px] text-[#64748B] mb-4">
            2 Adult, 2 Child
          </div>
          <Button className="font-airbnbCereal font-airbnbCereal-medium leading-[18px] rounded-[4px] bg-white text-primary-blue border border-[#5054D9]">
            Choose Room
          </Button>
        </div>
      </Card>
    </section>
  );
}

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
    <section className="container mx-auto px-4 py-20 flex flex-col items-center">
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
            <h2 className="text[16px] font-airbnbCereal font-airbnbCereal-bold leading-[21px]">Hotel Golden Palace, Puri</h2>
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
            <MapPin className="w-4 h-4 color-blue" />
            <span className="text[14px] font-airbnbCereal font-airbnbCereal-small leading-[18px]">VIP Rd, City, Puri, Odisha 752001</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-blue-600 mb-4">
            <ExternalLink className="w-4 h-4" />
            <button className="hover:underline">View property in map</button>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-1 text-sm">
              <Wifi className="w-4 h-4" />
              <span>Free Wifi</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Pool className="w-4 h-4" />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Building2 className="w-4 h-4" />
              <span>City View</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-sm">
              <span className="font-semibold text-base">4.5</span>
              <span className="text-muted-foreground ml-1">(23 Reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-2xl font-bold">₹31,440.87</span>
              <span className="text-sm text-muted-foreground">/3 nights</span>
            </div>
            <Button className="rounded-full">Choose Room</Button>
          </div>
        </div>
      </Card>

      {/* Desktop Card */}
      <Card className="hidden md:flex">
        <div className="w-1/3 relative">
          <Image
            src={hotelImages[0]}
            alt="Room view"
            className="w-full h-full object-cover"
            width={335}
            height={216}
          />
          <button className="absolute right-4 top-4">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
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
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-50"
                  >
                    Best
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-50 text-orange-700 hover:bg-orange-50"
                  >
                    Cheapest
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>VIP Rd, Puri, Odisha-752002</span>
                <span className="text-sm">34.32 KM from center</span>
              </div>

              <div className="flex items-center gap-1 text-sm text-blue-600 mb-4">
                <ExternalLink className="w-4 h-4" />
                <button className="hover:underline">
                  View property in map
                </button>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm">
                  <Wifi className="w-4 h-4" />
                  <span>Free Wifi</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Pool className="w-4 h-4" />
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>City View</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm">
                  <span className="font-semibold text-base">4.5</span>
                  <span className="text-muted-foreground ml-1">
                    (23 Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="w-48 flex flex-col items-end">
              <div className="text-right mb-1">
                <div className="text-sm text-muted-foreground line-through">
                  ₹34,440.87
                </div>
                <div className="text-2xl font-bold">₹31,440.87</div>
                <div className="text-xs text-muted-foreground">
                  Includes Taxes & Charges
                </div>
                <div className="text-sm mb-2">3 nights</div>
                <div className="text-sm text-muted-foreground">
                  2 Adult, 2 Child
                </div>
              </div>
              <Button className="w-full rounded-full">Choose Room</Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

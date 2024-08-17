import * as React from "react";
import { CarouselCards } from "../home/sections/carousel-cards";

const Page = async () => {
  return (
    <main>
      <div className="flex items-center justify-center mt-6">
        <CarouselCards></CarouselCards>
      </div>
    </main>
  );
};

export default Page;

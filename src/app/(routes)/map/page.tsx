import * as React from "react";
import NaverMap from "./components/naver-map";
// import { CarouselCards } from "./sections/carousel-cards";

const Page = async () => {
  return (
    <main>
      <div className="flex items-center justify-center mt-6">
        This is Map Page
      </div>
      <NaverMap></NaverMap>
    </main>
  );
};

export default Page;

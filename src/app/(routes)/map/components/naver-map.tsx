"use client"

import * as React from "react";
import Script from "next/script";

// import { CarouselCards } from "./sections/carousel-cards";

const NaverMap = () => {

  console.log("NaverMap !")

  React.useEffect( ()=> {

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
  });

  },[])

  return (
    <div>
      <div id="map" className="w-full h-[400px]"></div>
    </div>
  );
};

export default NaverMap;

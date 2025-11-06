import React from "react";
import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={100}>
        <p className="font-bold">
          Lorem sit, amet consectetur adipisicing elit. Dignissimos autem, dicta
          voluptatibus maxime beatae nemo?
        </p>
      </Marquee>
    </div>
  );
}

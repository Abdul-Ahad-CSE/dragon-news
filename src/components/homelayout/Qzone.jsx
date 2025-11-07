import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";

export default function Qzone() {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-3">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playgroundImg} alt="" />
        <img src={bgImg} alt="" />
      </div>
    </div>
  );
}

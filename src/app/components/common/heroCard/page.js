import React from "react";
import Image from "next/image";
import Tick from "./tick.svg";

const Card = (props) => {
  return (
    <div className="border-gray-800 border w-fit p-3 bg-black rounded-2xl">
      <Image src={props.image} alt="Workflow" width={200} height={200} />
      <div className="flex mt-2">
        <h1 className="text-white text-xl">{props.name}</h1>
        <Image
          src={Tick}
          alt="Workflow"
          width={18}
          height={18}
          className="ml-1"
        />
      </div>
      <h1 className="text-gray-600">{props.nickname}</h1>
      <button
        type="button"
        className="relative rounded-full mt-2 bg-gray-900 p-1 text-gray-400 text-xs hover:text-white w-20 h-6"
      >
        Finance
      </button>
      <button
        type="button"
        className="relative rounded-full ml-1 mt-2 bg-gray-900 p-1 text-gray-400 text-xs hover:text-white w-20 h-6"
      >
        Technology
      </button>
    </div>
  );
};

export default Card;

import React from "react";
import SecondaryContainer from "./SecondaryContainer";
import GeminiInput from "./GeminiInput";
import yoga2 from "../utils/assets/yoga2.jpg";

const DoYogaWithAi = () => {
    return (
      <div className="bg-[#8FDDE7] min-h-screen w-full">
        {/* <img
          className="hideen lg:block object-none object-right-top -mt-40"
          src={yoga2}
          alt="background"
        /> */}
        <GeminiInput />
        <SecondaryContainer />
      </div>
    );
};

export default DoYogaWithAi;

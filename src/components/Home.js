import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import yoga1 from "../utils/assets/yoga1.jpg";


const Home = () => {
    return (
      <div className="w-full h-full">
        <img
          className="hidden lg:block object-cover w-full max-h-full"
          src={yoga1}
          alt="background"
        />
        <MainContainer />
      </div>
    );
};

export default Home;

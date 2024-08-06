import React from "react";

const MainContainer = () => {
  return (
    <div className="bg-[#96b9be] w-full h-screen flex justify-center">
      <div className="w-full max-w-3xl mt-10">
        <h1 className="text-center text-3xl text-white font-semibold py-4">Yoga with Gemini AI</h1>
        <form className="bg-white p-8 shadow-md rounded-lg flex items-center">
          <input
            className="w-10/12 py-3 px-4 mr-2 border border-gray-400 rounded-lg"
            type="text"
            placeholder="Start Yoga"
          />
          <button className="w-2/12 py-3 px-4 text-white bg-[#4f6366] rounded-lg">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainContainer;

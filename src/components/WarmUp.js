import React from "react";

const WarmUp = () => {
  return (
    <div className="lg:absolute text-white w-full lg:w-6/12 lg:right-0 px-10 py-5">
      <h1 className="font-semibold text-2xl text-gray-600">
        A Simple Warm-Up for Your Daily Yoga Practice
      </h1>
      <h2 className="font-semibold text-xl text-gray-600 my-5">
        A proper warm-up is essential to prevent injuries and enhance
        performance. It increases your heart rate, blood flow, and muscle
        temperature, preparing your body for physical activity.
      </h2>
      <h2 className="font-semibold text-lg text-red-500">Listen to your body. If something hurts, stop.</h2>
      <h2 className="font-semibold text-lg text-red-500">Breathe deeply throughout the warm-up.</h2>
      <h2 className="font-semibold text-lg text-gray-600 my-5">
        Here's a basic warm-up routine you can follow:
      </h2>
      <div className="flex items-baseline my-2">
        <p className="font-semibold text-xl underline text-gray-600 mr-2">
          Body Stretches
        </p>
        <span className="text-gray-600 text-lg font-semibold">
          {" "}
          (2-3 minutes):{" "}
        </span>
      </div>

      <div className="flex items-baseline  my-2 ">
        <p className="font-semibold text-lg text-gray-600 mr-2">Neck rolls:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Gently roll your head in both directions.
        </span>
      </div>
      <div className="flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600  mr-2">
          Shoulder shrugs:
        </p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Raise your shoulders towards your ears, then relax.
        </span>
      </div>
      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">Arm circles:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Larger circles with your arms.
        </span>
      </div>
      <div className="grid grid-flow-col items-baseline my-2">
        <p className=" font-semibold text-lg text-gray-600 mr-2">
          Torso twists:
        </p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Stand with feet shoulder-width apart and gently twist your upper body
          from side to side.
        </span>
      </div>
      <div className="grid grid-flow-col  items-baseline my-2 ">
        <p className="font-semibold text-lg text-gray-600 mr-2">Hip circles:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Stand with feet shoulder-width apart and circle your hips in both
          directions.
        </span>
      </div>

      <div className="flex items-center my-2">
        <p className="font-semibold text-xl underline text-gray-600 mr-2">
          Gentle Cardio
        </p>
        <p className="text-gray-600 text-lg font-semibold"> (1-2 minutes): </p>
      </div>

      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">
          Marching in place:
        </p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Start slowly and gradually increase your pace.
        </span>
      </div>
      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">Butt kicks:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Bring your heels towards your buttocks as you march in place.
        </span>
      </div>
      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">Arm circles:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Circle your arms forward and backward.
        </span>
      </div>
      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">High knees:</p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Lift your knees towards your chest as you march in place.
        </span>
      </div>
      <div className=" flex items-baseline my-2">
        <p className="font-semibold text-lg text-gray-600 mr-2">
          Jumping jacks:
        </p>
        <span className="text-gray-600 text-md font-semibold">
          {" "}
          Start slowly and gradually increase the pace.
        </span>
      </div>
    </div>
  );
};

export default WarmUp;

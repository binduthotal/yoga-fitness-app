import React from "react";
import { useSelector } from "react-redux";
import useFetchYogaApi from "../utils/useFetchYogaApi";

const SecondaryContainer = () => {
  useFetchYogaApi();

  const yogaPosesApi = useSelector(
    (store) => store.yogaApiresults.yogaApiResult
  );

  const result = useSelector((store) => store.geminiResults.yogaNames);

  return (
    result && (
      <div className=" bg-[#3CACAE] rounded-lg mt-10 lg:mx-10 px-5 py-5  ">
        <h1 className="text-xl font-semibold">Results: </h1>
        {result?.map((value) => {
          const pose = yogaPosesApi?.find(
            (pose) =>
              pose.sanskrit_name_adapted.toLowerCase() ===
              value.sanskritName?.toLowerCase()
          );
          return (
            <div
              key={value.name}
              className=" shadow-lg shadow-black grid md:grid-cols-6 items-center gap-x-10 bg-white my-5 px-5 py-4 rounded-2xl"
            >
              <div className="md:col-span-5">
                <div className="mb-2">
                  <div className="flex justify-start items-baseline mb-2">
                    <label className="mr-2 font-semibold">Name:</label>
                    <p>{value.name}</p>
                  </div>
                  {value.sanskritName && (
                    <div className="flex justify-start items-baseline  mb-2">
                      <label className="mr-2 font-semibold">
                        Sanskrit Name:{" "}
                      </label>
                      <p>{value.sanskritName}</p>
                    </div>
                  )}

                  <div className="flex justify-start items-baseline  mb-2">
                    <label className="mr-2 font-semibold">Description: </label>
                    <p>{value.description}</p>
                  </div>
                  <div className="flex justify-start items-baseline  mb-2">
                    <label className="mr-2 font-semibold">How to do: </label>
                    <p className="flex-1">{value.howToDo}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex justify-center">
                {pose ? (
                  <img
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                    src={pose.url_png}
                    alt={value.sanskritName}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default SecondaryContainer;

import React, { useRef, useState } from "react";
import { model } from "../utils/geminiModel";
import { useDispatch, useSelector } from "react-redux";
import { addGeminiResults } from "../reduxStore/geminiResultSlice";

const GeminiInput = () => {
  const input = useRef(null);
  const [level, setLevel] = useState("Beginner");
  const dispatch = useDispatch();

  const handlePrompt = async (e) => {
    e.preventDefault();
    // const prompt =
    //   "Act as a yoga and fitness instructor and suggest some yoga asana names based on the query : " +
    //   input.current.value +
    //   "for" +
    //   level +
    //   "give only 5 movie names, comma seperated";

    const prompt = `Based on the query: "${input.current.value}" for the level: "${level}",
    - provide only 5 recommendations. 
    - If the query is about yoga, list 5 yoga asanas. 
    - If the query is about diet, list 5 diet foods. 
    - For yoga queries, each response should be json file with array of objects include:
    - 'name': The name of the yoga asanain english.
    - 'sanskritName':  The name of the yoga asanain sanskrit with no special character.
    - 'description': A brief description of the asana.
    - 'howToDo': Instructions on how to perform the asana.
    If the query is about diet, each response object should include:
    - 'name': The name of the diet food.
    - 'description': A brief description of the food and its benefits.
    - 'howToDo': Instructions on how to incorporate the food into a weight loss plan.
    Ensure the response is relevant to the type of query.Do not use delimiters.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    
    const yogaNames = JSON.parse(text);
    dispatch(addGeminiResults(yogaNames));
  };

  return (
    <div className="sm:w-7/12 px-3 mx-auto pt-10">
      <h1 className="text-center text-3xl text-white font-semibold py-4">
        Yoga with Gemini AI
      </h1>

      <div
        onSubmit={handlePrompt}
        className="bg-white p-8 shadow-md rounded-lg "
      >
        <p className="text-sm text-gray-400 font-sans mb-2">
          Type your concern here like Yoga for Lower Back Pain, Digestive
          issues, Stress, Peace etc
        </p>
        <form className="grid gap-3 sm:flex sm:items-center">
          <input
            ref={input}
            className="sm:w-10/12 py-3 px-4 mr-2 border border-gray-400 rounded-lg text-lg font-semibold"
            type="text"
            placeholder="Start Yoga"
          />
          <select
            className="sm:w-min py-3 px-4 mr-2 border border-gray-400 rounded-lg text-lg font-semibold"
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button className="sm:w-2/12 py-3 px-4 text-white bg-[#4f6366] rounded-lg font-semibold text-lg">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiInput;

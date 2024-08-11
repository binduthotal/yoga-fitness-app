import React, { useRef } from 'react';
import { model } from '../utils/geminiModel';

const GeminiInput = () => {

  const input = useRef(null);
  
  const handlePrompt = async (e) => {
    e.preventDefault();
    const prompt = input.current.value;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    
  }

  return (
      <div className="w-6/12 mx-auto">
        <h1 className="text-center text-3xl text-white font-semibold py-4">
          Yoga with Gemini AI
        </h1>
        <form onSubmit={handlePrompt} className="bg-white p-8 shadow-md rounded-lg flex items-center">
          <input
          ref={input}
            className="w-10/12 py-3 px-4 mr-2 border border-gray-400 rounded-lg text-lg font-semibold"
            type="text"
            placeholder="Start Yoga"
          />
          <button className="w-2/12 py-3 px-4 text-white bg-[#4f6366] rounded-lg font-semibold text-lg">
            Go
          </button>
        </form>
      </div>
  );
}

export default GeminiInput;

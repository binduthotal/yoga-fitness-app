import { GEMINI_API_KEY } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default genAI;

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

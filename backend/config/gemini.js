import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(promt) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: "promt",
  });
  return response.text;
}

export default main;

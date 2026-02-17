import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStrategicInsight = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are a Chief Strategy Officer at a top tier management consulting firm giving a presentation on Zomato.
        Keep answers concise, insightful, and strategic. 
        Focus on unit economics, contribution margins, and competitive landscape.
        
        User Query: ${query}
      `,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Fast response for presentation flow
      }
    });
    return response.text || "Unable to generate insight at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI Insight currently unavailable. Please check API Key.";
  }
};

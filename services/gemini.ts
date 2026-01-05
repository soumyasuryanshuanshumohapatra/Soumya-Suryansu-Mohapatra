
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client using the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface RecommendationResponse {
  dish: string;
  reason: string;
  pairing: string;
}

export const getFoodRecommendation = async (mood: string): Promise<RecommendationResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `I'm at 'Squad Restro And Cafe' in Cuttack. I'm feeling ${mood}. Recommend a dish from a typical premium Indian-Continental restro-cafe menu.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dish: { type: Type.STRING },
            reason: { type: Type.STRING },
            pairing: { type: Type.STRING },
          },
          required: ["dish", "reason", "pairing"],
        },
      },
    });

    // Extracting text output from GenerateContentResponse using the .text property.
    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
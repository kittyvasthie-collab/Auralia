import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MODELS, SYSTEM_INSTRUCTION } from "../constants";

// Initialize the client
// CRITICAL: process.env.API_KEY is assumed to be available
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Creates a new chat session with system instructions
 */
export const createChatSession = (modelId: string = MODELS.CHAT_FAST): Chat => {
  return ai.chats.create({
    model: modelId,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

/**
 * Sends a message to the model and yields chunks for streaming
 */
export async function* sendMessageStream(
  chat: Chat,
  message: string
): AsyncGenerator<string, void, unknown> {
  try {
    const resultStream = await chat.sendMessageStream({ message });

    for await (const chunk of resultStream) {
      // Cast to correct type as per guidelines
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error in stream:", error);
    throw error;
  }
}

/**
 * Generates an image based on a prompt
 */
export const generateImage = async (
  prompt: string,
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4" = "1:1"
): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image (Nano Banana) as default image generator
    const response = await ai.models.generateContent({
      model: MODELS.IMAGE_GEN,
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
        },
      },
    });

    // Iterate through parts to find the image (as per guidelines)
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    throw error;
  }
};

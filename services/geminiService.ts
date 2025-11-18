import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual simpático e rústico da "Padaria do Seu Antonio".
O endereço é Rua Bonfim, número 899. O telefone é 99 99999999.
Responda como se fosse um padeiro experiente, usando termos acolhedores.
Sugira combinações de pães, queijos e vinhos se perguntarem.
Seja breve e útil. O estilo da padaria é rústico mas moderno.
Nossos produtos principais são pães artesanais, bolos caseiros e café fresco.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!API_KEY) {
    return "Desculpe, meu sistema está em manutenção (Chave API ausente).";
  }

  try {
    // Convert simple history to Gemini format if needed, or just use simple generateContent for single turn
    // For simplicity in this stateless demo, we will just pass the current message with system instruction context implicitly via systemInstruction config.
    
    const model = 'gemini-2.5-flash';
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster chat response
      }
    });

    return response.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tive um pequeno problema no forno. Tente novamente em instantes.";
  }
};

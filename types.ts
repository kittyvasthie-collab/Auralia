import { GenerateContentResponse } from "@google/genai";

export enum AppMode {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  TOURISM = 'TOURISM',
  CONTACT = 'CONTACT',
  CHAT = 'CHAT',
  IMAGE = 'IMAGE',
}

export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: number;
  isLoading?: boolean;
  image?: string;
}

export interface ImageGenerationConfig {
  prompt: string;
  aspectRatio: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
  model: string;
}

export interface GeneratedImage {
  id: string;
  data: string; // base64
  prompt: string;
  timestamp: number;
}
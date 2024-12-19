import { useState } from 'react';
import { AIService } from '../services/AIService';

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const aiService = AIService.getInstance();

  const askQuestion = async (prompt: string, service: 'openai' | 'anthropic' = 'openai') => {
    setLoading(true);
    setError(null);
    try {
      const response = service === 'openai' 
        ? await aiService.askOpenAI(prompt)
        : await aiService.askAnthropic(prompt);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
      return null;
    }
  };

  const generateSpeech = async (text: string) => {
    setLoading(true);
    setError(null);
    try {
      const audioUrl = await aiService.textToSpeech(text);
      setLoading(false);
      return audioUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
      return null;
    }
  };

  return {
    askQuestion,
    generateSpeech,
    loading,
    error
  };
}
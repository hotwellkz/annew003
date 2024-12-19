import { AI_CONFIG } from '../lib/ai-config';

export class AIService {
  private static instance: AIService;
  
  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async askOpenAI(prompt: string): Promise<string> {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_CONFIG.openai.apiKey}`
        },
        body: JSON.stringify({
          model: AI_CONFIG.openai.model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new Error('Failed to get response from OpenAI');
    }
  }

  async askAnthropic(prompt: string): Promise<string> {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': AI_CONFIG.anthropic.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: AI_CONFIG.anthropic.model,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 1000
        })
      });

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('Anthropic Error:', error);
      throw new Error('Failed to get response from Anthropic');
    }
  }

  async textToSpeech(text: string): Promise<string> {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': AI_CONFIG.elevenlabs.apiKey
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      const audioBlob = await response.blob();
      return URL.createObjectURL(audioBlob);
    } catch (error) {
      console.error('ElevenLabs Error:', error);
      throw new Error('Failed to convert text to speech');
    }
  }
}
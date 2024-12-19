import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { useAI } from '../../hooks/useAI';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const suggestedQuestions = [
  'Какие основные навыки нужны бизнес-аналитику?',
  'Как начать карьеру бизнес-аналитика?',
  'Какие инструменты использует бизнес-аналитик?'
];

export default function SuggestedQuestions() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { askQuestion } = useAI();
  const { tokens } = useAuth();

  const handleAskQuestion = async (q: string) => {
    if (tokens < 5) {
      alert('Недостаточно токенов');
      return;
    }

    setIsLoading(true);
    try {
      const response = await askQuestion(q);
      if (response) {
        setAnswer(response);
      }
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 mt-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Задайте вопрос по уроку..."
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 pr-12"
            />
            <button
              onClick={() => handleAskQuestion(question)}
              disabled={!question.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white disabled:opacity-50"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => handleAskQuestion(q)}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{q}</span>
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center py-8">
          <LoadingSpinner />
        </div>
      )}

      {answer && (
        <div className="bg-gray-800/50 rounded-lg p-6 prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
}
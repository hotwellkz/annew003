import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Play, Pause, Brain, Sparkles, Volume2, Volume1, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useAI } from '../hooks/useAI';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import LessonTest from '../components/lesson/LessonTest';
import LoadingSpinner from '../components/lesson/LoadingSpinner';
import SuggestedQuestions from '../components/lesson/SuggestedQuestions';
import LessonProgress from '../components/lesson/LessonProgress';
import { formatLessonContent } from '../utils/lessonFormatter';

export default function Lesson() {
  const { id } = useParams();
  const [lessonContent, setLessonContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [showVoiceButtons, setShowVoiceButtons] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isButtonPulsing, setIsButtonPulsing] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { askQuestion, generateSpeech } = useAI();
  const { tokens } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsButtonPulsing(true);
      setTimeout(() => setIsButtonPulsing(false), 1000);
    }, 15000);

    return () => clearInterval(pulseInterval);
  }, []);

  const startLesson = async () => {
    setIsLoading(true);
    const prompt = "Расскажи подробно как будто ты преподаватель и преподаеш урок на тему: Кто такой бизнес-аналитик? Основные роли и обязанности, Ключевые навыки и инструменты, Примеры задач";
    
    try {
      const response = await askQuestion(prompt);
      if (response) {
        setLessonContent(formatLessonContent(response));
        setShowVoiceButtons(true);
      }
    } catch (error) {
      console.error('Error starting lesson:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const playFreeVoice = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(lessonContent);
      utterance.lang = 'ru-RU';
      
      if (isPaused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.speak(utterance);
      }
      setIsPaused(false);
    }
  };

  const playPremiumVoice = async () => {
    setIsVoiceLoading(true);
    try {
      const url = await generateSpeech(lessonContent);
      if (url) {
        setAudioUrl(url);
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.play();
        }
      }
    } catch (error) {
      console.error('Error generating premium voice:', error);
    } finally {
      setIsVoiceLoading(false);
    }
  };

  const togglePause = () => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPaused(!isPaused);
    } else {
      if (isPaused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const finishLesson = () => {
    // Here you would typically update the lesson status in your backend
    navigate('/program');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumbs />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Урок 1.1: Кто такой бизнес-аналитик?
          </h1>
          
          <LessonProgress currentStep={lessonContent ? 2 : 1} totalSteps={4} />

          <button
            onClick={startLesson}
            className={`group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 mb-8 ${
              isButtonPulsing ? 'animate-pulse' : ''
            }`}
          >
            <Brain className="w-6 h-6" />
            <span>Начать урок</span>
          </button>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <LoadingSpinner />
              <p className="mt-4 text-xl">Готовлю урок...</p>
            </div>
          )}

          {lessonContent && (
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: lessonContent }} />
              </div>

              {showVoiceButtons && (
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={isPaused ? togglePause : playFreeVoice}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
                  >
                    {isPaused ? (
                      <Play className="w-5 h-5" />
                    ) : (
                      <Volume1 className="w-5 h-5" />
                    )}
                    <span>{isPaused ? 'Продолжить' : 'Озвучить бесплатно'}</span>
                  </button>

                  <button
                    onClick={isPaused ? togglePause : playPremiumVoice}
                    disabled={tokens < 48}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                      tokens >= 48
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {isVoiceLoading ? (
                      <LoadingSpinner small />
                    ) : isPaused ? (
                      <Play className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                    <span>
                      {isPaused
                        ? 'Продолжить'
                        : `Озвучить красивым голосом (48 токенов)`}
                    </span>
                  </button>

                  {!isPaused && (audioRef.current?.playing || window.speechSynthesis.speaking) && (
                    <button
                      onClick={togglePause}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
                    >
                      <Pause className="w-5 h-5" />
                      <span>Пауза</span>
                    </button>
                  )}
                </div>
              )}

              <SuggestedQuestions />
              <LessonTest />

              <button
                onClick={finishLesson}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all mt-12"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Завершить урок</span>
              </button>
            </div>
          )}

          <audio ref={audioRef} className="hidden" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
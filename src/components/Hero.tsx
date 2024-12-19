import React from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Курс Бизнес Аналитик с персональным ИИ учителем
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Освойте профессию бизнес-аналитика с поддержкой искусственного интеллекта 24/7
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/program')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Начать обучение
            </button>
            <button
              onClick={() => navigate('/program')}
              className="bg-transparent border-2 border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Узнать программу
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-400">выпускников уже работают</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400">поддержка ИИ учителя</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">6 мес</h3>
              <p className="text-gray-400">до первого оффера</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
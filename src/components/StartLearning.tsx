import React from 'react';
import { Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StartLearning() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Бесплатный старт</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Начни обучение прямо сейчас
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Получи доступ к первому модулю курса бесплатно и убедись в качестве обучения
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 transform hover:scale-[1.02] transition-all">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <Rocket className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстрый старт в профессии</h3>
                    <p className="text-gray-400">Начни осваивать навыки бизнес-аналитика уже сегодня</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/program')}
                  className="group w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Начать бесплатно</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-semibold">
                    1
                  </div>
                  <p className="text-gray-300">Доступ к первому модулю</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-semibold">
                    2
                  </div>
                  <p className="text-gray-300">Поддержка ИИ-наставника</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-semibold">
                    3
                  </div>
                  <p className="text-gray-300">Практические задания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
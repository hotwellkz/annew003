import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const benefits = [
  'Персональный ИИ-наставник',
  'Доступ к сообществу профессионалов',
  'Практика на реальных проектах',
  'Помощь в трудоустройстве',
  'Сертификат по окончании'
];

export default function Enrollment() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-red-500/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-500/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Пройти обучение
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Начните свой путь к профессии бизнес-аналитика уже сегодня. Первое занятие бесплатно!
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/program')}
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Начать обучение</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Введите ваш email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Введите ваш телефон"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Записаться на бесплатное занятие
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
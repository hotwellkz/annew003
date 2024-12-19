import React from 'react';
import { Sparkles, Bot, Rocket, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'ИИ-Наставник',
    description: 'Персональный ментор на базе ИИ доступен 24/7 для ответов на ваши вопросы'
  },
  {
    icon: Rocket,
    title: 'Быстрый Старт',
    description: 'Начните практиковаться с первого дня обучения на реальных проектах'
  },
  {
    icon: Zap,
    title: 'Интерактивность',
    description: 'Современный формат обучения с мгновенной обратной связью'
  }
];

export default function NewEra() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-medium">Новый подход</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Новая эра обучения
          </h2>
          <p className="text-gray-400 text-lg">
            Мы объединили передовые технологии ИИ с проверенными методиками обучения для максимальной эффективности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 h-full transform hover:-translate-y-1 transition-all">
                <feature.icon className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
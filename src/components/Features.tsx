import React from 'react';
import { Brain, BookOpen, Users, Target, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'ИИ Учитель',
    description: 'Персональный ИИ-ассистент доступен 24/7 для ответов на вопросы'
  },
  {
    icon: BookOpen,
    title: 'Практика',
    description: 'Работа над реальными проектами с ведущими компаниями'
  },
  {
    icon: Users,
    title: 'Сообщество',
    description: 'Доступ к закрытому сообществу аналитиков и менторов'
  },
  {
    icon: Target,
    title: 'Карьера',
    description: 'Помощь в трудоустройстве и составлении резюме'
  },
  {
    icon: Clock,
    title: 'Гибкость',
    description: 'Обучение в удобном темпе и в любое время'
  },
  {
    icon: Award,
    title: 'Сертификат',
    description: 'Признанный рынком сертификат по окончании курса'
  }
];

export default function Features() {
  return (
    <section id="преимущества" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Преимущества обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              <feature.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
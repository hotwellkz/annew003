import React from 'react';
import { Brain, CheckCircle, ArrowRight, Play, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

const modules = [
  {
    title: 'Модуль 1: Введение в профессию',
    description: 'Базовые концепции и основы профессии бизнес-аналитика',
    icon: Brain,
    progress: 0,
    lessons: [
      {
        id: '1.1',
        title: 'Кто такой бизнес-аналитик?',
        duration: '45 минут',
        status: 'available',
        topics: [
          'Основные роли и обязанности',
          'Ключевые навыки и компетенции',
          'Карьерные перспективы'
        ]
      },
      {
        id: '1.2',
        title: 'Жизненный цикл проекта',
        duration: '60 минут',
        status: 'locked',
        topics: [
          'Этапы проекта',
          'Методологии разработки',
          'Роль аналитика на каждом этапе'
        ]
      }
    ]
  },
  {
    title: 'Модуль 2: Анализ требований',
    description: 'Методы сбора и анализа требований',
    icon: Target,
    progress: 0,
    lessons: [
      {
        id: '2.1',
        title: 'Выявление требований',
        duration: '55 минут',
        status: 'locked',
        topics: [
          'Интервьюирование стейкхолдеров',
          'Техники сбора требований',
          'Документирование требований'
        ]
      }
    ]
  },
  {
    title: 'Модуль 3: Практика и инструменты',
    description: 'Практическое применение навыков',
    icon: Users,
    progress: 0,
    lessons: [
      {
        id: '3.1',
        title: 'Работа с документацией',
        duration: '50 минут',
        status: 'locked',
        topics: [
          'Создание BRD',
          'User Stories',
          'Функциональные требования'
        ]
      }
    ]
  }
];

export default function CourseProgram() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Программа обучения
            </h1>
            <p className="text-xl text-gray-400">
              Структурированный курс с практическими заданиями и поддержкой ИИ-наставника
            </p>
          </div>

          {/* Progress Overview */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">12</div>
                  <div className="text-gray-400">Уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">36</div>
                  <div className="text-gray-400">Часов практики</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                  <div className="text-gray-400">Поддержка ИИ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="max-w-5xl mx-auto space-y-8">
            {modules.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-red-500/10 p-4 rounded-xl">
                    <module.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
                    <p className="text-gray-400">{module.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className={`bg-gray-800/30 rounded-xl p-6 transition-all ${
                        lesson.status === 'available' 
                          ? 'hover:bg-gray-700/30 cursor-pointer'
                          : 'opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500" />
                          <h3 className="text-lg font-semibold">{lesson.title}</h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">{lesson.duration}</span>
                          {lesson.status === 'available' ? (
                            <Link
                              to={`/lessons/${lesson.id}`}
                              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition-colors"
                            >
                              <Play className="w-4 h-4" />
                              <span>Начать</span>
                            </Link>
                          ) : (
                            <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-sm">
                              <span>Заблокировано</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {lesson.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-gray-400">
                            <ArrowRight className="w-4 h-4 text-red-500" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы начать обучение?</h3>
              <p className="text-gray-400 mb-6">
                Первый урок доступен бесплатно. Начните прямо сейчас!
              </p>
              <Link
                to="/lessons/1.1"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Начать бесплатный урок</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    title: 'Модуль 1: Введение в профессию бизнес-аналитика',
    lessons: [
      {
        id: '1.1',
        title: 'Урок 1.1: Кто такой бизнес-аналитик?',
        topics: [
          'Основные роли и обязанности',
          'Ключевые навыки и инструменты',
          'Примеры задач',
          'Тест: Понимание роли бизнес-аналитика'
        ]
      },
      {
        title: 'Урок 1.2: Жизненный цикл проекта',
        topics: ['SDLC', 'Методологии разработки', 'Роль аналитика']
      },
      {
        title: 'Урок 1.3: Ключевые методологии анализа',
        topics: ['Agile', 'Waterfall', 'Гибридные подходы']
      }
    ]
  },
  {
    title: 'Сбор и анализ требований',
    lessons: [
      {
        title: 'Техники выявления требований',
        topics: ['Интервью', 'Анкетирование', 'Наблюдение']
      }
    ]
  },
  {
    title: 'Моделирование бизнес-процессов',
    lessons: [
      {
        title: 'BPMN 2.0',
        topics: ['Нотация', 'Инструменты', 'Практика']
      }
    ]
  },
  {
    title: 'Работа с данными',
    lessons: [
      {
        title: 'SQL и анализ данных',
        topics: ['Основы SQL', 'Анализ данных', 'Отчетность']
      }
    ]
  }
];

export default function Program() {
  return (
    <section id="программа" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Программа обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
              <ul className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li
                    key={lessonIndex}
                    className="flex flex-col space-y-2"
                  >
                    <Link
                      to={`/lessons/${lesson.id || '1.1'}`}
                      className="flex items-center justify-between group hover:bg-gray-700/30 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{lesson.title}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <ul className="ml-7 space-y-1">
                      {lesson.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-gray-400">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
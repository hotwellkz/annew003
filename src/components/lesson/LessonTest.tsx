import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const questions = [
  {
    question: 'Какова основная роль бизнес-аналитика?',
    options: [
      'Только написание кода',
      'Анализ бизнес-процессов и требований',
      'Управление персоналом',
      'Продажи продукта'
    ],
    correctAnswer: 1
  },
  {
    question: 'Какой навык НЕ является ключевым для бизнес-аналитика?',
    options: [
      'Коммуникативные навыки',
      'Аналитическое мышление',
      'Программирование на C++',
      'Документирование требований'
    ],
    correctAnswer: 2
  },
  {
    question: 'Что входит в обязанности бизнес-аналитика?',
    options: [
      'Сбор и анализ требований',
      'Приготовление кофе',
      'Ремонт оборудования',
      'Продажа рекламы'
    ],
    correctAnswer: 0
  }
];

export default function LessonTest() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const correctAnswers = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    const finalScore = Math.round((correctAnswers / questions.length) * 10);
    setScore(finalScore);
    setShowResults(true);
  };

  return (
    <div className="mt-12 bg-gray-800/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Тест: Понимание роли бизнес-аналитика</h2>

      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="space-y-4">
            <p className="text-lg font-medium">{q.question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {q.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswer(qIndex, oIndex)}
                  disabled={showResults}
                  className={`p-4 rounded-lg text-left transition-all ${
                    answers[qIndex] === oIndex
                      ? showResults
                        ? oIndex === q.correctAnswer
                          ? 'bg-green-500/20 border-green-500'
                          : 'bg-red-500/20 border-red-500'
                        : 'bg-red-500/20 border-red-500'
                      : 'bg-gray-700/50 hover:bg-gray-700'
                  } border ${
                    showResults && oIndex === q.correctAnswer
                      ? 'border-green-500'
                      : 'border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResults && (
                      oIndex === q.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : answers[qIndex] === oIndex ? (
                        <XCircle className="w-5 h-5 text-red-500" />
                      ) : null
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {!showResults && answers.length === questions.length && (
          <button
            onClick={calculateScore}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Проверить ответы
          </button>
        )}

        {showResults && (
          <div className="bg-gray-700/50 p-6 rounded-lg">
            <p className="text-xl font-semibold mb-2">
              Ваш результат: {score} из 10 баллов
            </p>
            <p className="text-gray-300">
              {score >= 8
                ? 'Отлично! Вы хорошо усвоили материал.'
                : score >= 6
                ? 'Хорошо! Но есть место для улучшения.'
                : 'Рекомендуем повторить материал урока.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
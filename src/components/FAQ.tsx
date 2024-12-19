import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Нужен ли опыт в IT для обучения?',
    answer: 'Нет, наш курс подходит для начинающих. Мы обучаем с нуля и предоставляем все необходимые базовые знания.'
  },
  {
    question: 'Сколько времени занимает обучение?',
    answer: 'Программа рассчитана на 6 месяцев при занятости 2-3 часа в день. Вы можете учиться в своем темпе.'
  },
  {
    question: 'Как проходит обучение с ИИ-учителем?',
    answer: 'ИИ-учитель доступен 24/7, отвечает на вопросы, проверяет задания и дает персональные рекомендации.'
  },
  {
    question: 'Есть ли гарантия трудоустройства?',
    answer: 'Мы помогаем с составлением резюме и подготовкой к собеседованиям. 80% выпускников находят работу в течение 3 месяцев.'
  },
  {
    question: 'Какие проекты входят в портфолио?',
    answer: 'Вы будете работать над реальными проектами от компаний-партнеров, которые можно включить в портфолио.'
  },
  {
    question: 'Можно ли учиться удаленно?',
    answer: 'Да, обучение полностью онлайн. Вам нужен только компьютер и стабильный интернет.'
  },
  {
    question: 'Какие документы я получу после обучения?',
    answer: 'Вы получите сертификат о прохождении курса, который признается работодателями.'
  },
  {
    question: 'Как проходит оплата обучения?',
    answer: 'Доступна помесячная оплата или единовременный платеж со скидкой. Возможна рассрочка.'
  },
  {
    question: 'Что делать, если я пропустил занятие?',
    answer: 'Все материалы доступны в записи. ИИ-учитель поможет наверстать пропущенное.'
  },
  {
    question: 'Как начать обучение?',
    answer: 'Оставьте заявку на сайте, и мы пригласим вас на бесплатное пробное занятие.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Топ 10 вопросов
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-left">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-400 border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
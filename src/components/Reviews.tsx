import React from 'react';
import { Star, Quote, MessageSquare, Mail } from 'lucide-react';
import ReviewModal from './modals/ReviewModal';
import DirectorModal from './modals/DirectorModal';

const reviews = [
  {
    name: 'Анна Смирнова',
    position: 'Бизнес-аналитик в Яндекс',
    text: 'Благодаря курсу и поддержке ИИ-учителя я смогла освоить профессию за 6 месяцев и найти работу в крупной компании.',
    rating: 5,
    image: 'https://99px.ru/sstorage/1/2024/12/image_10112240928587939284.jpg'
  },
  {
    name: 'Михаил Иванов',
    position: 'Product Manager в VK',
    text: 'Отличная программа! Особенно впечатлила работа с реальными проектами и поддержка менторов.',
    rating: 5,
    image: 'https://99px.ru/sstorage/1/2024/11/image_11811241247556347755.jpg'
  },
  {
    name: 'Дмитрий Петров',
    position: 'Senior BA в Сбере',
    text: 'Отличная программа с фокусом на практику. ИИ-учитель помогал разобраться в сложных моментах в любое время.',
    rating: 5,
    image: 'https://99px.ru/sstorage/1/2024/12/image_10112240931161138189.jpg'
  },
  {
    name: 'Мария Сидорова',
    position: 'BA Lead в Ozon',
    text: 'Структурированный подход к обучению и отличная поддержка от команды курса.',
    rating: 5,
    image: 'https://99px.ru/sstorage/1/2024/11/image_13011241608473812865.jpg'
  },
  {
    name: 'Елена Козлова',
    position: 'Product Owner в VK',
    text: 'Курс дал мне все необходимые навыки для перехода из маркетинга в бизнес-анализ. Рекомендую!',
    rating: 5,
    image: 'https://99px.ru/sstorage/1/2024/11/image_13011241608473812865.jpg'
  }
];

export default function Reviews() {
  const [isReviewModalOpen, setReviewModalOpen] = React.useState(false);
  const [isDirectorModalOpen, setDirectorModalOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = window.innerWidth <= 768 ? 1.5 : 0.5;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="отзывы" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Отзывы выпускников
        </h2>
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden gap-8 mb-12 pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-[400px] bg-gray-800/50 backdrop-blur-sm rounded-xl relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-500/20" />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setReviewModalOpen(true)}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Оставить отзыв
          </button>
          <button
            onClick={() => setDirectorModalOpen(true)}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Написать директору
          </button>
        </div>

        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setReviewModalOpen(false)}
          email="a777mmm@mail.ru"
        />
        <DirectorModal
          isOpen={isDirectorModalOpen}
          onClose={() => setDirectorModalOpen(false)}
          email="a777mmm@mail.ru"
        />
      </div>
    </section>
  );
}
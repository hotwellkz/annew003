import React from 'react';
import { Brain, Heart, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900/80 to-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">БизнесАналитик.AI</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Обучение профессии бизнес-аналитика с поддержкой ИИ 24/7
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#программа" className="hover:text-white transition-colors inline-flex items-center">
                  <span>Программа обучения</span>
                </a>
              </li>
              <li>
                <a href="#преимущества" className="hover:text-white transition-colors inline-flex items-center">
                  <span>Преимущества</span>
                </a>
              </li>
              <li>
                <a href="#отзывы" className="hover:text-white transition-colors inline-flex items-center">
                  <span>Отзывы студентов</span>
                </a>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition-colors inline-flex items-center">
                  <span>Регистрация</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Полезное</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  База знаний
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вебинары
                </a>
              </li>
            </ul>
          </div>
          
          {/* Подписка */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Подписаться на новости</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm text-gray-300 mb-4">
                Получайте последние новости и обновления курса
              </p>
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 text-white"
              />
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            &copy; 2024 БизнесАналитик.AI. Все права защищены.
          </p>
          <div className="flex items-center space-x-1 text-gray-300 text-sm">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>в России</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
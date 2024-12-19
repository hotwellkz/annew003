import React, { useState } from 'react';
import { Eye, EyeOff, Gift } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData.email, formData.password);
      setShowGift(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (showGift) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Header />
        <Breadcrumbs />
        <div className="bg-gray-800 rounded-xl max-w-md w-full p-8 animate-bounce">
          <div className="text-center">
            <Gift className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Поздравляем!</h3>
            <p className="text-gray-300 text-lg mb-8">
              Вы получили 100 токенов в подарок за регистрацию!
            </p>
            <button
              onClick={() => navigate('/program')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
            >
              Начать обучение
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Breadcrumbs />
      <div className="flex items-center justify-center p-4 pt-24">
        <div className="bg-gray-800 rounded-xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Регистрация</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Введите ваш email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">Пароль</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Придумайте пароль"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="text-red-500 hover:text-red-400">
            Войти
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
}
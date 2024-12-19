import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate('/program');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Breadcrumbs />
      <div className="flex items-center justify-center p-4 pt-24">
        <div className="bg-gray-800 rounded-xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Вход</h1>

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
                placeholder="Введите ваш пароль"
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
            Войти
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Нет аккаунта?{' '}
          <Link to="/signup" className="text-red-500 hover:text-red-400">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
}
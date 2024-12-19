import React from 'react';
import { Brain, Menu, X, Coins } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const { user, tokens, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white">БизнесАналитик.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#программа" className="text-gray-300 hover:text-white transition-colors">Программа</a>
            <a href="#преимущества" className="text-gray-300 hover:text-white transition-colors">Преимущества</a>
            <a href="#отзывы" className="text-gray-300 hover:text-white transition-colors">Отзывы</a>
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span>{tokens}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white"
                >
                  Войти
                </Link>
                <Link
                  to="/signup"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Регистрация
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#программа" className="text-gray-300 hover:text-white transition-colors">Программа</a>
              <a href="#преимущества" className="text-gray-300 hover:text-white transition-colors">Преимущества</a>
              <a href="#отзывы" className="text-gray-300 hover:text-white transition-colors">Отзывы</a>
              {user ? (
                <>
                  <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full w-fit">
                    <Coins className="w-4 h-4 text-yellow-500" />
                    <span>{tokens}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-white"
                  >
                    Войти
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
                  >
                    Регистрация
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const routes: Record<string, string> = {
  '/program': 'Программа курса',
  '/login': 'Вход',
  '/signup': 'Регистрация'
};

export default function Breadcrumbs() {
  const location = useLocation();
  
  if (location.pathname === '/') return null;
  
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPath = `/${pathSegments[0]}`;
  
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-12">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Главная
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
          <span className="text-white">
            {routes[currentPath]}
          </span>
        </div>
      </div>
    </nav>
  );
}
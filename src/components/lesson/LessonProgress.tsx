import React from 'react';
import { BookOpen } from 'lucide-react';

interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function LessonProgress({ currentStep, totalSteps }: LessonProgressProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium">Прогресс урока</span>
        </div>
        <span className="text-sm text-gray-400">
          {currentStep} из {totalSteps} шагов
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
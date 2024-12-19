import { useState, useEffect } from 'react';

interface LessonProgress {
  completed: boolean;
  lastStep: number;
}

export function useLessonProgress(lessonId: string) {
  const [progress, setProgress] = useState<LessonProgress>({
    completed: false,
    lastStep: 1
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem(`lesson_${lessonId}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [lessonId]);

  const updateProgress = (step: number, completed: boolean = false) => {
    const newProgress = { lastStep: step, completed };
    setProgress(newProgress);
    localStorage.setItem(`lesson_${lessonId}`, JSON.stringify(newProgress));
  };

  return { progress, updateProgress };
}
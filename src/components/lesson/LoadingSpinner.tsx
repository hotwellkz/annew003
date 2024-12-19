import React from 'react';

interface LoadingSpinnerProps {
  small?: boolean;
}

export default function LoadingSpinner({ small }: LoadingSpinnerProps) {
  return (
    <div className={`animate-spin rounded-full border-t-2 border-white ${
      small ? 'w-5 h-5 border-2' : 'w-12 h-12 border-4'
    }`} />
  );
}
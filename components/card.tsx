'use client';

import { useState } from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}
export default function Card({ image, title, description }: CardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className='relative h-[200px] w-[300px] rounded-lg shadow-xl'
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img
        className='absolute inset-0 h-full w-full rounded-lg object-cover'
        src={image}
        alt={title}
      />
      <div className={`absolute inset-0 rounded-lg bg-black opacity-20`} />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center`}
      >
        <h2 className='text-lg font-bold text-white'>{title}</h2>
        {showDescription && (
          <p className='mt-2 text-sm text-white opacity-100 '>{description}</p>
        )}
      </div>
    </div>
  );
}

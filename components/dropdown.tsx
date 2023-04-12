'use client';

import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  subMenu: string[];
}
export default function Dropdown({ subMenu, title }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className='relative'>
      <button
        className='inline-flex w-full items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 '
        onMouseEnter={() => toggleDropdown(true)}
        onMouseLeave={() => toggleDropdown(false)}
      >
        <span>{title}</span>
      </button>
      {isOpen && (
        <div className='absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg'>
          {subMenu.map((val) => {
            return (
              <div key={val} className='py-1'>
                <p className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900'>
                  {val}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

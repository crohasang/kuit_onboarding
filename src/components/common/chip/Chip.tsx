import React from 'react';
import clsx from 'clsx';
import { ChipProps } from './Chip.types';

const Chip = ({ label, isSelected, onClick, size = 'medium' }: ChipProps) => {
  const chipClasses = clsx('rounded-full font-semibold transition-colors', {
    'px-3 py-1 text-xs sm:text-sm': size === 'small',
    'px-4 py-2 text-sm sm:text-base': size === 'medium',
    'bg-kuit text-black': isSelected,
    'bg-white bg-opacity-10 text-white': !isSelected,
  });

  return (
    <button className={chipClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Chip;

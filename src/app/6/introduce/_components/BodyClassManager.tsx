'use client';

import { useEffect } from 'react';

const BodyClassManager = () => {
  useEffect(() => {
    const className = 'sixth-introduce-page';
    
    document.documentElement.classList.add(className);
    
    return () => {
      document.documentElement.classList.remove(className);
    };
  }, []);

  return null;
};

export default BodyClassManager;

'use client';

import { useEffect } from 'react';

const BodyClassManager = () => {
  useEffect(() => {
    const className = 'sixth-introduce-page';
        
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, []);

  return null;
};

export default BodyClassManager;
'use client';

import { useEffect } from 'react';

export default function BodyClassManager() {
  useEffect(() => {
    const className = 'seventh-introduce-page';
    document.documentElement.classList.add(className);

    return () => {
      document.documentElement.classList.remove(className);
    };
  }, []);

  return null;
}

'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/app/context/ThemeContext';

export default function AppLogo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo_dark.png' : '/logo.png';

  return (
    <Image
      src={logoSrc}
      alt='D3 community logo'
      width={48}
      height={48}
      className='w-full h-full'
    />
  );
}

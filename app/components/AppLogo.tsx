'use client';

import Image from 'next/image';

export default function AppLogo() {
  const logoClass =
    'app-logo-img absolute inset-0 h-full w-full object-contain';

  return (
    <div className='app-logo-slot'>
      <Image
        src='/logo.png'
        alt='D3 community logo'
        width={48}
        height={48}
        className={`${logoClass} app-logo-img--light`}
      />
      <Image
        src='/logo_dark.png'
        alt='D3 community logo'
        width={48}
        height={48}
        className={`${logoClass} app-logo-img--dark`}
      />
    </div>
  );
}

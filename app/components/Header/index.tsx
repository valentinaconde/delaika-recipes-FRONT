import { ROUTES } from '@/app/utils/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function Header() {
  return (
    <div className='flex justify-center align-middle h-20 w-screen bg-slate-100'>
      <Link className='self-center text-lg' href={ROUTES.home} >DELAIKA</Link>
    </div>
  );
}
import { ROUTES } from '@/app/utils/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import style from './header.module.css';

export default function Header() {
  return (
    <div className={`flex  h-16  ${style.background}`}>
      
      <Link  href={ROUTES.home} ><div className=' w-60 h-20'></div></Link>

      
    </div>
  );
}
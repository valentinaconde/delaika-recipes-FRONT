import { ROUTES } from '@/app/utils/routes';
import Link from 'next/link';
import * as React from 'react';
import style from './header.module.css';
import LoginIcon from '@mui/icons-material/Login';

export default function Header() {
  return (
    <div className={`flex h-16    ${style.background}`}>
      <div className='flex items-center justify-between w-full' >
        <Link href={ROUTES.home} ><div className=' w-60 h-20'></div></Link>
        <a href={ROUTES.login} >
          <button className='w-20 '><LoginIcon /></button>
        </a>
      </div>
    </div>
  );
}
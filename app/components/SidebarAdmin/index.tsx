'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './sidebarAdmin.module.css';
import { ROUTES } from '../../utils/routes';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SidebarAdmin() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sidebarContent = (
    <div className=' h-full px-5 my-9 w-60 flex flex-col'>
      <ul className='pt-3'>
        <li className='pb-2 hover:bg-slate-50' key={1}>
          <Link href={ROUTES.configuration} className={`text-sm ${(pathName == ROUTES.configuration ? style.active : "")}`}>
            Configuración
          </Link>
        </li>
        <li className='pb-2 hover:bg-slate-50' key={2}>
          <Link href={ROUTES.categoriesAdmin} className={`text-sm ${(pathName == ROUTES.categoriesAdmin ? style.active : "")}`}>
            Categorias
          </Link>
        </li>
        <li className='pb-2 hover:bg-slate-50' key={2}>
          <Link href={ROUTES.recipesAdmin} className={`text-sm ${(pathName == ROUTES.recipesAdmin ? style.active : "")}`}>
            Recetas
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        <div className=''>
          <div className='w-screen border-b-2 flex justify-between px-5 pt-5 items-center  '>
            <p className='text-xl'>CATEGORIAS</p>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          {menuOpen && (
            <div className=' mt-2'>
              <ul className='py-3 px-5 border-b-2'>
                <li className='pb-2 hover:bg-slate-50' key={1}>
                  <Link href={ROUTES.configuration} className={`text-sm ${(pathName == ROUTES.configuration ? style.active : "")}`}>
                    Configuración
                  </Link>
                </li>
                <li className='pb-2 hover:bg-slate-50' key={2}>
                  <Link href={ROUTES.categoriesAdmin} className={`text-sm ${(pathName == ROUTES.categoriesAdmin ? style.active : "")}`}>
                    Categorias
                  </Link>
                </li>
                <li className='pb-2 hover:bg-slate-50' key={2}>
                  <Link href={ROUTES.recipesAdmin} className={`text-sm ${(pathName == ROUTES.recipesAdmin ? style.active : "")}`}>
                    Recetas
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        sidebarContent
      )}
    </div>
  );
}
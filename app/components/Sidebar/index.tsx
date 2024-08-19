'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './sidebar.module.css';
import { ROUTES } from '../../utils/routes';
import { getCategories } from '../../services/dataMock.service';
import { Category } from '../../interfaces/categories';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Sidebar() {
  const pathName = usePathname();
  const [categories, setCategories] = useState<Category[]>();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const categories = getCategories();
    setCategories(categories);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sidebarContent = (
    <div className=' h-full px-5 my-9 w-60 flex flex-col'>
      <p className='text-lg pt-4'>
        CATEGORIAS
      </p>
      <ul className='pt-3'>
        {categories?.map((category, index) => (
          <li className='pb-2 hover:bg-slate-50' key={category.id}>
            <Link href={ROUTES.category(category.id)} className={`text-sm ${(pathName == ROUTES.category(category.id) ? style.active : "")}`}>
              {(category.name).toLocaleUpperCase()}
            </Link>
          </li>
        ))}
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
                {categories?.map((category) => (
                  <li className='pb-2 hover:bg-slate-50' key={category.id}>
                    <Link href={ROUTES.category(category.id)} className={`text-sm ${(pathName == ROUTES.category(category.id) ? style.active : "")}`}>
                      {(category.name).toLocaleUpperCase()}
                    </Link>
                  </li>
                ))}
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
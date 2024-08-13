'use client'
import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './sidebar.module.css';
import { ROUTES } from '../../utils/routes';
import {getCategories} from '../../services/dataMock.service';
import {Category} from '../../interfaces/categories';
import { useEffect } from 'react';

export default function Sidebar() {

  const pathName = usePathname()

  const [categories, setCategories] = useState<Category[]>()


  useEffect(() => {
    const categories = getCategories()
    setCategories(categories)
  }, [])
  
  return (
    <div className='shadow-lg h-screen px-5 py-2'>

      <p className='text-lg pt-4'>
        CATEGORIAS
      </p>
      <ul className='pt-3'>
        {categories?.map((category, index) => (
          <li className='pb-2 hover:bg-slate-50' key={category.id} >
              <Link href={ROUTES.category(category.id)} className={`text-sm text-left  ${(pathName == ROUTES.category(category.id) ? style.active : "")}`} >{category.name}</Link>
          </li>
        ))}
      </ul>


    </div>
  );
}

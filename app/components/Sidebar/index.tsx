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
export default function Sidebar() {

  const pathName = usePathname()

  const [categories, setCategories] = useState(['Desayuno', 'Pastas', 'Guarniciones', 'Entradas'])
  return (
    <div className='shadow-lg h-screen px-5 py-2'>

      <Typography variant="h6" noWrap component="div">
        CATEGORIAS
      </Typography>
      <List>
        {categories.map((name, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={ROUTES.category(name)} className={(pathName == ROUTES.category(name) ? style.active : "")} >{name}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </div>
  );
}

'use client'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const drawerWidth = 240;

export default function Sidebar() {

  
  const [categories, setCategories] = useState(['Desayuno', 'Pastas', 'Guarniciones', 'Entradas'])
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" noWrap component="div">
            CATEGORIAS
        </Typography>
        <List>
          {categories.map((name, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Link href={`/home/categories/${name}`}>{name}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

    </Box>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar variant="dense" className='flex justify-center'>
          <Typography variant="h6" color="inherit" component="div">
            DELAIKA
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
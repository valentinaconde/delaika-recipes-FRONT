
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Page() {

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  }

    return (
      <>
        <div className='flex' onClick={handleGoBack}>
        <KeyboardArrowLeftIcon />
        <button >Volver</button>
        </div>
        <p>CATEGORIA</p>
      </>
    )
  }
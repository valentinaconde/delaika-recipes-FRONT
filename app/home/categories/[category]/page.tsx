
'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Category() {
  
  const path = usePathname()
  const router = useRouter();
  const [categoryName, setCategoryName] = useState('')

 

  const handleGoBack = () => {
    router.back();
  }
  
  const handleGetCategoryName = () => {
    setCategoryName(path.split('/categories/')[1])
  }

  useEffect(() => {
    handleGetCategoryName();
  }, [])

    return (
      <>
        <div className='flex' onClick={handleGoBack}>
        <KeyboardArrowLeftIcon />
        <button >Volver</button>
        </div>
        <p>Categoria de {categoryName}</p>
      </>
    )
  }
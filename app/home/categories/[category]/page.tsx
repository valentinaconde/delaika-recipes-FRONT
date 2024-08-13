
'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ROUTES } from '../../../utils/routes';
import Recipe from '../components/recipe';

export default function Category() {
  
  const path = usePathname()
  const router = useRouter();
  const [categoryName, setCategoryName] = useState('')

 

  const handleGoBack = () => {
    router.push(ROUTES.home);
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
        <Recipe name='Nombre de receta' url='https://media.istockphoto.com/id/1394514086/es/foto/cierre-un-trozo-de-pastel-de-fruta-de-naranja-h%C3%BAmedo-en-el-plato-con-rodajas-de-naranja-en-la.jpg?s=2048x2048&w=is&k=20&c=Nft3ckyAR0hrnxVlWj2paA1D1BaY3ZD9iggOI0odjyk=' />
      </>
    )
  }

'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ROUTES } from '../../../utils/routes';
import Recipe from '../components/recipe';
import Link from 'next/link';
import { getRecipesByCategory, getCategoryById } from '@/app/services/dataMock.service';
import { Recipes} from '@/app/interfaces/recipes';

export default function Category() {
  
  const path = usePathname()
  const router = useRouter();
  const [categoryId, setCategoryId] = useState(0)
  const [categoryName, setCategoryName] = useState('')
  const [recipes, setRecipes] = useState<Recipes[]>()

 

  const handleGoBack = () => {
    router.push(ROUTES.home);
  }
  
  const handleGetCategoryId = () => {
    setCategoryId(Number(path.split('/categories/')[1]))
  }

  const handleGetCategoryName = () => {
    const category = getCategoryById(categoryId);
    if(category) setCategoryName(category.name)
  }



  const getRecipes = () => {
    const recipes = getRecipesByCategory(Number(categoryId));
    setRecipes(recipes)
  
  }


  useEffect(() => {
    handleGetCategoryId();
  }, [])

  useEffect(() => {
    handleGetCategoryName()
    getRecipes()
  }, [categoryId])

    return (
      <>
        <div className='flex' onClick={handleGoBack}>
        <KeyboardArrowLeftIcon />
        <button >Volver</button>
        </div>
        <p>Categoria de {categoryName}</p>
        <div className='flex'>
        {
          recipes?.map((recipe, index) => (
            <Link href={ROUTES.recipe(categoryName, recipe.name)} key={index} className='me-3'>
              <Recipe name={recipe.name} url={recipe.imageUrl} />
            </Link>
          ))
        }
        </div>
      
    
      </>
    )
  }
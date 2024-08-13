
'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ROUTES } from '../../../utils/routes';
import RecipeCard from '../components/recipeCard';
import Link from 'next/link';
import { getRecipesByCategory, getCategoryById } from '@/app/services/dataMock.service';
import { Recipes } from '@/app/interfaces/recipes';

export default function Category() {

  const path = usePathname()
  const router = useRouter();
  const [categoryId, setCategoryId] = useState(0)
  const [categoryName, setCategoryName] = useState('')
  const [recipes, setRecipes] = useState<Recipes[]>()



  const handleGetCategoryId = () => {
    setCategoryId(Number(path.split('/categories/')[1]))
  }

  const handleGetCategoryName = () => {
    const category = getCategoryById(categoryId);
    if (category) setCategoryName(category.name)
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
    <div className='p-3'>
      <div className='flex pb-4'>
        <Link href={ROUTES.home} >RECETAS</Link>
        <p className='px-2'>/</p>
        <Link href={ROUTES.category(categoryId)} >{categoryName.toLocaleUpperCase()}</Link>
      </div>


      <div className='flex'>
        {
          recipes?.map((recipe, index) => (
            <Link href={ROUTES.recipe(categoryName, recipe.name)} key={index} className='me-3'>
              <RecipeCard name={recipe.name} url={recipe.imageUrl} />
            </Link>
          ))
        }
      </div>


    </div>
  )
}
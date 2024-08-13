
'use client'
import { Recipes } from '@/app/interfaces/recipes';
import { getCategoryById, getRecipeById } from '@/app/services/dataMock.service';
import { ROUTES } from '@/app/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Recipe() {

  const path = usePathname()

  const [recipeId, setRecipeId] = useState(0)
  const [recipe, setRecipe] = useState<Recipes>()
  const [categoryId, setCategoryId] = useState(0)
  const [categoryName, setCategoryName] = useState('')

  const handleSetRecipe = () => {
    const recipe = getRecipeById(Number(recipeId));
    if (recipe) setRecipe(recipe)

  }

  const handleGetIds = () => {
    setRecipeId(Number(path.split('/')[4]))
    setCategoryId(Number(path.split('/')[3]))
  }

  
  const handleGetCategoryName = () => {
    const category = getCategoryById(categoryId);
    if (category) setCategoryName(category.name)
  }


  useEffect(() => {
    handleGetIds();
  }, [])

  useEffect(() => {
    handleSetRecipe()
    handleGetCategoryName()
  }, [recipeId])



  return (
    <div className='p-3'>
        <div className='flex pb-4 text-sm'>
        <Link href={ROUTES.home} >RECETAS</Link>
        <p className='px-2'>/</p>
        <Link href={ROUTES.category(categoryId)} >{categoryName.toLocaleUpperCase()}</Link>
      </div>
      <h1 className='text-lg pb-3'>{(recipe?.name)?.toLocaleUpperCase()}</h1>
      <div className='flex'>
        <img src={recipe?.imageUrl} alt={recipe?.name} className='h-96' />
        <div className='ps-5'>
          <p>INGREDIENTES</p>
          <ul>
            {
              recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.quantity} {ingredient.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <p className='pt-5'>PREPARACIÓN</p>
        <p>{recipe?.description}</p>
        </div>
    </div>
  )
}
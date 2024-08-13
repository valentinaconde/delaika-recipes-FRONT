
'use client'
import { Recipes } from '@/app/interfaces/recipes';
import { getRecipeById } from '@/app/services/dataMock.service';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Recipe() {

  const path = usePathname()

  const [recipeId, setRecipeId] = useState(0)
  const [recipe, setRecipe] = useState<Recipes>()

  const handleSetRecipe = () => {
    console.log(recipeId)
    const recipe = getRecipeById(Number(recipeId));
    if (recipe) setRecipe(recipe)

  }

  const handleGetRecipeId = () => {
    setRecipeId(Number(path.split('/')[4]))
  }


  useEffect(() => {
    handleGetRecipeId();
  }, [])

  useEffect(() => {
    handleSetRecipe()
  }, [recipeId])


  return (
    <>
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
    </>
  )
}
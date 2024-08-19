
'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { ROUTES } from '../../../utils/routes';
import RecipeCard from '../components/recipeCard';
import Link from 'next/link';
import { getRecipesByCategory, getCategoryById } from '@/app/services/dataMock.service';
import { Recipes } from '@/app/interfaces/recipes';
import EmptyMessage from '@/app/components/EmptyMessage';
import { LoadingContext } from '@/app/context/LoadingContext';

export default function Category() {

  const path = usePathname()
  const router = useRouter();
  const { handleSetLoading } = useContext(LoadingContext)
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
    handleSetLoading(false)


  }


  useEffect(() => {
    handleSetLoading(true)
    handleGetCategoryId();
  }, [])

  useEffect(() => {
    handleGetCategoryName()
    getRecipes()
  }, [categoryId])

  return (
    <div className='md:p-3'>
      <div className='flex pb-4 text-sm '>
        <Link href={ROUTES.home} className='hover:underline'>RECETAS</Link>
        <p className='px-2'>/</p>
        <Link className='hover:underline' href={ROUTES.category(categoryId)} >{categoryName.toLocaleUpperCase()}</Link>
      </div>

      <div className='grid grid-cols-2 gap-4 md:flex md:flex-wrap'>
      {
        recipes?.length ?
          recipes?.map((recipe, index) => (
            <Link href={ROUTES.recipe(recipe.categoryId, recipe.id)} key={index} className='md:me-3 md:pb-3'>
              <RecipeCard name={recipe.name} url={recipe.imageUrl} />
            </Link>
          ))
          : <EmptyMessage message='No hay recetas disponibles en este momento' />
        }
      </div>

  
    </div>
  )
}
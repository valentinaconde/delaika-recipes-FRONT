'use client'
import { useEffect, useState } from "react";
import { Recipes } from "../interfaces/recipes";
import { getRecipes } from "../services/dataMock.service";
import Link from "next/link";
import { ROUTES } from "../utils/routes";
import RecipeCard from "./categories/components/recipeCard";
import EmptyMessage from "../components/EmptyMessage";

export default function Home() {

  const [recipes, setRecipes] = useState<Recipes[]>()

  const getRecipesData = () => {
    const recipesData = getRecipes();
    if (recipesData) setRecipes(recipesData)

  }


  useEffect(() => {
    getRecipesData();
  }, [])


  return (
    <div className='md:p-3'>
      <div className='flex pb-4 text-sm '>
        <Link href={ROUTES.home} className='hover:underline'>RECETAS</Link>
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
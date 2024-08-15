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
    <div className='p-3'>
      <div className='flex pb-4 text-sm '>
        <Link href={ROUTES.home} className='hover:underline'>RECETAS</Link>
      </div>

      <div className='flex flex-wrap'>
      {
        recipes?.length ?
          recipes?.map((recipe, index) => (
            <Link href={ROUTES.recipe(recipe.categoryId, recipe.id)} key={index} className='me-3 pb-3'>
              <RecipeCard name={recipe.name} url={recipe.imageUrl} />
            </Link>
          ))
          : <EmptyMessage message='No hay recetas disponibles en este momento' />
        }
      </div>
    </div>
  )
}
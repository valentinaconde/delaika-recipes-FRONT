'use client'
import AddRecipe from "./addRecipe.tsx";
import CateogriesProvider from '../../../context/CategoriesProvider'

export default function Recipes() {
    return (
        <CateogriesProvider>
            <h1>Administración de recetas</h1>
            <div>
                <AddRecipe/>


            </div>
        </CateogriesProvider>

    )
}
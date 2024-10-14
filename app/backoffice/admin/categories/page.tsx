'use client'
import AddCategory from './addCategory'
import CategoriesList from './categoriesList'

import CateogriesProvider from '../../../context/CategoriesProvider'

export default function Categories() {


    return (
        <CateogriesProvider>
            <h1 className="text-xl mb-5" >Administracion de categorías</h1>
            <div className="flex">
                <CategoriesList />
                <AddCategory />
            </div>
        </CateogriesProvider>

    )
}
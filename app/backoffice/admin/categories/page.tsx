'use client'
import { useContext, useEffect, useState } from "react"
import cat from '../../../mocks/data/categories.json'
import { Category } from "../../../interfaces/categories"

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
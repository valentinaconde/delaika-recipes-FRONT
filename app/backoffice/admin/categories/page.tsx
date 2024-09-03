'use client'
import { useEffect, useState } from "react"
import cat from '../../../mocks/data/categories.json'
import { Category } from "../../../interfaces/categories"

import EditModal from './editModal'
import ConfirmModal from './confirmModal'

import AddCategory from './addCategory'

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        setCategories(cat.categories)
    }, [])

    return (
        <>
        <h1 className="text-xl mb-5" >Administracion de categorías</h1>
            {
                categories.map(category => (
                    <div key={category.id} className="border border-solid h-8 flex items-center justify-between px-2 my-2 w-96">
                        <h2>{category.name}</h2>
                        <div>
                            <button className="text-cyan-700 px-2 py-1"><EditModal id={category.id} name={category.name} /></button>
                            <button className="text-red-800 px-2 py-1"><ConfirmModal category={category} action='delete'/></button>
                            <button className="text-lime-600 px-2 py-1"><ConfirmModal  action='hide' category={category}  /></button>
                        </div>
                    </div>
                ))
            }

        <AddCategory />
        </>
    )
}
'use client'
import { useContext, useEffect, useState } from "react"

// import cat from '../../../../mocks/data/categories.json'

import EditModal from '../editModal'
import ConfirmModal from '../confirmModal'
import { CategoriesContext } from "@/app/context/CategoriesContext"



export default function Categories() {


    const { categories, handleSetCategories} = useContext(CategoriesContext)

    useEffect(() => {
        handleSetCategories(categories)
    }, [])
    
    return (
        <div className="flex flex-col">
            {
                categories?.map(category => (
                    <div key={category.id} className="border border-solid h-8 flex items-center justify-between px-2 my-2 w-96">
                        <h2>{category.name}</h2>
                        <div>
                            <button className="text-cyan-700 px-2 py-1"><EditModal id={category.id} name={category.name} /></button>
                            <button className="text-red-800 px-2 py-1"><ConfirmModal category={category} action='delete' /></button>
                            <button className="text-lime-600 px-2 py-1"><ConfirmModal action='hide' category={category} /></button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
'use client'
import * as React from 'react';
import { useState } from 'react';
import { Category } from '../interfaces/categories';
import { CategoriesContext } from './CategoriesContext';

export default function CategoriesProvider({children}: {children: React.ReactNode}) {

    const [categories, setCategories] = useState<Category[]>([])

    const handleSetCategories = (categories: Category[]) => {
        if(localStorage.getItem('categories')) {
            categories = JSON.parse(localStorage.getItem('categories') || '')
        }
        setCategories(categories)
    }
   
    const handleAddCategory = (category: Category) => {
        setCategories([...categories, category])
        localStorage.setItem('categories', JSON.stringify([...categories, category]))
    }
    

    return (
        <CategoriesContext.Provider value={{ categories, handleSetCategories, handleAddCategory }}>{children}</CategoriesContext.Provider>
    )

}

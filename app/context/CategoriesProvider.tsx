'use client'
import * as React from 'react';
import { useState } from 'react';
import { Category } from '../interfaces/categories';
import { CategoriesContext } from './CategoriesContext';

export default function CategoriesProvider({children}: {children: React.ReactNode}) {

    const [categories, setCategories] = useState<Category[]>([])

    const handleSetCategories = (categories: Category[]) => {
        setCategories(categories)
    }

    const handleAddCategory = (category: Category) => {
        setCategories([...categories, category])
    }

    return (
        <CategoriesContext.Provider value={{ categories, handleSetCategories, handleAddCategory }}>{children}</CategoriesContext.Provider>
    )

}

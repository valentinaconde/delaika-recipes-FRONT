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

    const handleDeleteCategory = (id: number) => {
        const newCategories = categories.filter(category => category.id !== id)
        setCategories(newCategories)
        localStorage.setItem('categories', JSON.stringify(newCategories))
    }

    const handleHideCategory = (id: number) => {
        const newCategories = categories.map(category => {
            if(category.id === id) {
                category.hide = !category.hide
            }
            return category
        })
        setCategories(newCategories)
        localStorage.setItem('categories', JSON.stringify(newCategories))
    }

    const handleEditCategory = (id: number, name: string) => {
        const newCategories = categories.map(category => {
            if(category.id === id) {
                category.name = name
            }
            return category
        })
        setCategories(newCategories)
        localStorage.setItem('categories', JSON.stringify(newCategories))
    }
    

    return (
        <CategoriesContext.Provider value={{ categories, handleSetCategories, handleAddCategory, handleDeleteCategory, handleHideCategory, handleEditCategory  }}>{children}</CategoriesContext.Provider>
    )

}

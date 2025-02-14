'use client'
import * as React from 'react';
import { useState } from 'react';
import { Category } from '../interfaces/categories';
import { CategoriesContext } from './CategoriesContext';

export default function CategoriesProvider({children}: {children: React.ReactNode}) {

    const [categories, setCategories] = useState<Category[]>([])

    const handleSetCategories = () => {
        console.log('entrando en handleSetCategories')
        fetch('/api/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        console.log('categories fetched')
        
        
    }
   
    const handleAddCategory = async (category: Category) => {
        try {
            const response = await fetch('/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: category.name })
            });

            if (response.ok) {
                setCategories([...categories, category])
            } else {
                console.error('Failed to add category');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    const handleDeleteCategory = async (id: number) => {
        console.log('entrando en handleDeleteCategory', id);
        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const newCategories = categories.filter(category => category.id !== id);
                setCategories(newCategories);
            } else {
                console.error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleHideCategory = async (id: number) => {
        try {
            const category = categories.find(category => category.id === id)
            const response = await fetch(`/api/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...category, hide: !category?.hide })
            });

            if (response.ok) {
                const newCategories = categories.map(category => {
                    if(category.id === id) {
                        category.hide = !category.hide
                    }
                    return category
                })
                setCategories(newCategories)
            } else {
                console.error('Failed to hide category');
            }
        }
        catch (error) {
            console.error('Error:', error);

        }
       
    }

    const handleEditCategory = async (id: number, name: string) => {
        console.log('entrando en handleEditCategory')
        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, name: name })
            });

            if (response.ok) {
                console.log('response ok')
                const newCategories = categories.map(category => {
                    if(category.id === id) {
                        category.name = name
                    }
                    return category
                })
                setCategories(newCategories)
            } else {
                console.error('Failed to edit category');
            }
        }
        catch (error) {
            console.error('Error:', error);

        }
        
    }
    

    return (
        <CategoriesContext.Provider value={{ categories, handleSetCategories, handleAddCategory, handleDeleteCategory, handleHideCategory, handleEditCategory  }}>{children}</CategoriesContext.Provider>
    )

}

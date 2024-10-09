import { CategoriesContext } from '@/app/context/CategoriesContext';
import { useContext } from 'react';


export const useCategories = () => {
    const categoriesContext = useContext(CategoriesContext)
    if(!categoriesContext) {
        throw new Error('useCategories must be used within a CategoriesProvider')
    }
    return categoriesContext
}
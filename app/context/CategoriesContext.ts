import { createContext } from "react";
import { Category } from "../interfaces/categories";

interface CategoriesContextProps {
    categories: Category[];
    handleSetCategories: (categories: Category[]) => void;
    handleAddCategory: (category: Category) => void;
    handleDeleteCategory: (id: number) => void;
    handleHideCategory: (id: number) => void;
    handleEditCategory: (id: number, name: string) => void;
}

export const CategoriesContext = createContext<CategoriesContextProps>({
    categories: [],
    handleSetCategories: () => {},
    handleAddCategory: () => {},
    handleDeleteCategory: () => {},
    handleHideCategory: () => {},
    handleEditCategory: () => {}
})



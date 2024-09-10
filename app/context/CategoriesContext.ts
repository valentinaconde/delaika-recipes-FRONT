import { createContext } from "react";
import { Category } from "../interfaces/categories";

interface CategoriesContextProps {
    categories: Category[];
    handleSetCategories: (categories: Category[]) => void;
    handleAddCategory: (category: Category) => void;
}

export const CategoriesContext = createContext<CategoriesContextProps>({
    categories: [],
    handleSetCategories: () => {},
    handleAddCategory: () => {},
})



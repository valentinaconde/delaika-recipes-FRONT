import {create} from 'zustand';
import {Ingredient} from '../interfaces/ingredient';

interface IngredientsStore {
    ingredients: Ingredient[];
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (id: number) => void;
    updateIngredient: (ingredient: Ingredient) => void;
    setIngredients: (ingredients: Ingredient[]) => void;
}

export const useIngredientsStore = create<IngredientsStore>((set) => ({
    ingredients: [],
    addIngredient: (ingredient) => set((state) => ({
        ingredients: [...state.ingredients, ingredient]
    })),
    removeIngredient: (id) => set((state) => ({
        ingredients: state.ingredients.filter(ingredient => ingredient.id !== id)
    })),
    updateIngredient: (updatedIngredient) => set((state) => ({
        ingredients: state.ingredients.map(ingredient =>
            ingredient.id === updatedIngredient.id ? updatedIngredient : ingredient
        )
    })),
    setIngredients: (ingredients) => set({ingredients})
}));
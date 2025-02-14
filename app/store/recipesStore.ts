import { create } from 'zustand'
import { Recipe } from '../interfaces/recipes'

interface RecipesStore {
  recipes: Recipe[]
  addRecipe: (recipe: Recipe) => void
  removeRecipe: (recipe: Recipe) => void
  clearRecipes: () => void
}

export const useRecipesStore = create<RecipesStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  removeRecipe: (recipe) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipe.id),
    })),
  clearRecipes: () => set({ recipes: [] }),
}))

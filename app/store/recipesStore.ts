import { create } from 'zustand'
import { Recipe } from '../interfaces/recipes'

const useRecipesStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe: Recipe) => set((recipes: Recipe[]) => ({ recipes: [...recipes, recipe] })),
  removeRecipe: (recipe: Recipe) => set((recipes: Recipe[]) => ({ recipes: recipes.filter((r) => r !== recipe) })),
  clearRecipes: () => set({ recipes: [] }),
}))
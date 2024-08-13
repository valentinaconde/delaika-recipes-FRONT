import { Category } from '../interfaces/categories'
import categories from '../mocks/data/categories.json'
import recipes from '../mocks/data/recipes.json'

export function getCategories() {
    return categories.categories
}

export function getRecipes() {
    return recipes
}
import categories from '../mocks/data/categories.json'
import recipes from '../mocks/data/recipes.json'

export function getCategories() {
    return categories.categories
}

export function getCategoryById(categoryId: number) {
    return categories.categories.find(category => category.id == categoryId)
}


export function getRecipes() {
    return recipes
}

export function getRecipesByCategory(categoryId: number) {
    return recipes.recipes.filter(recipe => recipe.categoryId == categoryId)
}

export function getRecipeById(recipeId: number){
    return recipes.recipes.find(recipe => recipe.id == recipeId)
}
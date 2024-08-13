export const ROUTES = {
    home: '/home',
    categories: '/home/categories',
    category: (categoryId: number) => `/home/categories/${categoryId}`,
    recipe: (categoryId: number, recipeId: number) => `/home/categories/${categoryId}/${recipeId}`
}
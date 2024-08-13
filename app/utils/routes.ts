export const ROUTES = {
    home: '/home',
    categories: '/home/categories',
    category: (categoryName: string) => `/home/categories/${categoryName}`,
    recipe: (categoryName: string, recipeName: string) => `/home/categories/${categoryName}/${recipeName}`
}
export const ROUTES = {
    home: '/home',
    categories: '/home/categories',
    category: (categoryId: number) => `/home/categories/${categoryId}`,
    recipe: (categoryName: string, recipeName: string) => `/home/categories/${categoryName}/${recipeName}`
}
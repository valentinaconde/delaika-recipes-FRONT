export const ROUTES = {
    home: '/home',
    categories: '/home/categories',
    category: (categoryId: number) => `/home/categories/${categoryId}`,
    recipe: (categoryId: number, recipeId: number) => `/home/categories/${categoryId}/${recipeId}`,
    admin: '/backoffice/admin',
    login: '/backoffice/login',
    configuration: '/backoffice/admin/configuration',
    categoriesAdmin: '/backoffice/admin/categories',
    recipesAdmin: '/backoffice/admin/recipes',
}
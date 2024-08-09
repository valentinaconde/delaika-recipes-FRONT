export const ROUTES = {
    home: '/home',
    categories: '/home/categories',
    category: (categoryName: string) => `/home/categories/${categoryName}`,
}
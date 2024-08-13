export interface Recipes {
    id: number;
    name: string;
    categoryId: number;
    imageUrl: string;
    description: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    name: string;
    quantity: number;
}
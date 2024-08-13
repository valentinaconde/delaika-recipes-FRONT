interface Recipes {
    id: number;
    name: string;
    categoryId: number;
    imageUrl: string;
    description: string;
    ingredients: Ingredient[];
}

interface Ingredient {
    name: string;
    quantity: number;
}
export interface Ingredient {
    id: number;
    name: string;
}

export interface RecipeIngredient extends Ingredient {
    amount: number;
}
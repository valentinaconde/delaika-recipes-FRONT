import { Ingredient, RecipeIngredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    categoryId: number;
    imageUrl: string;
    ingredients: RecipeIngredient[];
    steps: Step[]
}


export interface Step {
    id: number;
    recipeId: number;
    info: string;
}


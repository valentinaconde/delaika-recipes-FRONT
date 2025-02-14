import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    categoryId: number;
    imageUrl: string;
    ingredients: Ingredient[];
    steps: Step[]
}


export interface Step {
    id: number;
    recipeId: number;
    info: string;
}


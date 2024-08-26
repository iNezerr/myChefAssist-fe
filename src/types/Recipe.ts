// src/types/Recipe.ts

export interface Recipe {
  name: string,
  description: string,
  ingredients: string[],
  instructions: string[],
  cook_time: number,
  prep_time: number,
  nutrition_facts: string,
  image_url: string,
}

export interface RecipeList {
  id: number;
  name: string;
  description: string;
}

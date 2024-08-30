import React, { useState } from 'react';
import { Recipe } from './types/Recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onClickChooseIngredients: () => void // New prop for handling the toggle
  onSaveRecipe: () => void; // New prop for handling save recipe
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClickChooseIngredients, onSaveRecipe }) => {
  const [chooseOpen, setChooseOpen] = useState(false);
  const handleShowChooseIngredient = () => {

    setChooseOpen(!chooseOpen);
    onClickChooseIngredients()
  }
  const handleSaveRecipe = () => {
    onSaveRecipe();
  };

  return (
    <div className="w-full md:w-2/3 p-4 bg-gray-800 text-gray-200 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between mb-4 ">
        <h2 className="text-3xl font-bold">{recipe.name}</h2>
      </div>

      <div className="flex flex-col md:flex-row mb-6">
        <img
          src={recipe.image_url}
          alt={recipe.name}
          className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6">
          <p className="mb-4">{recipe.description}</p>
          <div className="flex flex-col md:flex-row mb-6">
            <div className="flex-1 md:mr-4">
              <h3 className="text-2xl font-bold mb-4">Instructions</h3>
              <ol className="list-decimal list-inside mb-6">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          {}
          <p><strong>Nutrition:</strong> {recipe.nutrition_facts}</p>
          <button onClick={handleShowChooseIngredient} className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
            Choose Ingredients
          </button>
          <button onClick={handleSaveRecipe} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

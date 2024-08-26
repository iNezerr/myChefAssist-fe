import React from 'react';
import { Recipe } from './types/Recipe';

const RecipeIngredientsSelector: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="w-full mx-auto md:w-1/3 p-4 bg-gray-800 text-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{recipe.name}</h3>
      <h4 className="text-xl font-semibold mb-2">Ingredients:</h4>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <input type="checkbox" id={`ingredient-${index}`} name={`ingredient-${index}`} />
            <label htmlFor={`ingredient-${index}`} className="ml-2">{ingredient}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredientsSelector;

import React, { useState, useEffect } from 'react';
import { Recipe } from './types/Recipe';
import axios from 'axios';

interface RecipeIngredientsSelectorProps {
  recipe: Recipe;
  onRecipeModified: (modifiedRecipe: Recipe) => void; // Prop to handle modified recipe
}

const RecipeIngredientsSelector: React.FC<RecipeIngredientsSelectorProps> = ({ recipe, onRecipeModified }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    console.log('Selected Ingredients:', selectedIngredients);
  }, [selectedIngredients]);

  const handleIngredientChange = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient) ? prev.filter((item) => item !== ingredient) : [...prev, ingredient]
    );
  };

  // Function to handle sending selected ingredients to the server
  const handleModifyRecipe = () => {
    axios
      .post('https://mychefassist.vercel.app/api/recipes/finalize/', {
        selected_ingredients: selectedIngredients, // Send the selected ingredients
      })
      .then((response) => {
        console.log('Modified Recipe:', response.data);
        onRecipeModified(response.data.refined_recipe); // Send modified recipe to parent component
      })
      .catch((error) => {
        console.error('Error saving ingredients:', error);
      });
  };

  return (
    <div className="w-full mx-auto md:w-1/3 p-4 bg-gray-800 text-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{recipe.name}</h3>
      <h4 className="text-xl font-semibold mb-2">
        Ingredients:
        <br />
        <span className="text-sm italic mt-[-6]">choose what ingredients you have</span>
      </h4>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              name={`ingredient-${index}`}
              onChange={() => {
                handleIngredientChange(ingredient);
              }}
              checked={selectedIngredients.includes(ingredient)}
            />
            <label htmlFor={`ingredient-${index}`} className="ml-2">
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleModifyRecipe}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Modify Recipe
      </button>
    </div>
  );
};

export default RecipeIngredientsSelector;

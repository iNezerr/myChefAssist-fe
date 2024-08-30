import React, { useState, useEffect } from 'react';
import { Recipe } from './types/Recipe';
import axios from 'axios';

const RecipeIngredientsSelector: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    console.log('selected Ingredient: ', selectedIngredients)
  }, [selectedIngredients])


  const handleIngredientChange = (ingredient: string) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient)
      } else {
        return [...prev, ingredient];
      }
    })
  }

  // Function to handle sending selected ingredients to the server
  const handleSubmit = () => {
    // Example API call with Axios
    axios.post('/api/saveIngredients', {
      ingredients: selectedIngredients,
    })
      .then((response) => {
        console.log('Ingredients saved:', response.data);
      })
      .catch((error) => {
        console.error('Error saving ingredients:', error);
      });
  };
  return (
    <div className="w-full mx-auto md:w-1/3 p-4 bg-gray-800 text-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{recipe.name}</h3>
      <h4 className="text-xl font-semibold mb-2">Ingredients:
        <br />
        <span className='text-sm italic mt-[-6] '>choose what ingredients you have</span>
      </h4>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <input type="checkbox" id={`ingredient-${index}`} name={`ingredient-${index}`}
              onChange={() => { handleIngredientChange(ingredient) }}
              checked={selectedIngredients.includes(ingredient)}
            />
            <label htmlFor={`ingredient-${index}`} className="ml-2">{ingredient}</label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Save Selected Ingredients
      </button>

    </div>
  );
};

export default RecipeIngredientsSelector;

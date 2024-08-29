import React, { useState, useEffect } from 'react';
import { Recipe } from './types/Recipe';

const RecipeIngredientsSelector: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    console.log('selected Ingredient: ', selectedIngredients)
  }, [selectedIngredients])


  const handleIngredientChange = (ingredient: string, ischecked: boolean) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient)
      } else {
        return [...prev, ingredient];
      }
    })
    if (ischecked) {
      setSelectedIngredients((prev) => [...prev, ingredient])
    } else {
      setSelectedIngredients((prev) => prev.filter((item) => item !== ingredient))
    }
    console.log(selectedIngredients)
    // setSelectedIngredients([])
  }
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
              onChange={(e) => { handleIngredientChange(ingredient, e.currentTarget.checked) }}
            />
            <label htmlFor={`ingredient-${index}`} className="ml-2">{ingredient}</label>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecipeIngredientsSelector;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import RecipeIngredientsSelector from './RecipeIngredientsSelector';
import type { Recipe } from './types/Recipe';

const Recipe: React.FC = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const location = useLocation();
  const { recipe } = location.state as { recipe: Recipe };

  const handleToggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  // Function to handle saving the recipe
  const handleSaveRecipe = () => {
    // Example API call (adjust URL and options as needed)
    fetch('https://mychefassist.vercel.app/api/saveIngredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe }),  // Send the whole recipe data
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe saved:', data);
        // You might want to add a user notification or feedback here
      })
      .catch((error) => {
        console.error('Error saving recipe:', error);
      });
  };

  return (
    //TODO: Add a section if there is no recipe in the location state
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isSelectorOpen ? 'md:flex-row' : 'md:flex-col'} gap-8`}>
          <RecipeDetail
            recipe={recipe}
            onClickChooseIngredients={handleToggleSelector}
            onSaveRecipe={handleSaveRecipe} // Pass the handleSaveRecipe function here
          />
          {isSelectorOpen && <RecipeIngredientsSelector recipe={recipe} />}
        </div>
      </div>
    </section>
  );
};

export default Recipe;

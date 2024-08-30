import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import RecipeIngredientsSelector from './RecipeIngredientsSelector';
import type { Recipe } from './types/Recipe';

const Recipe: React.FC = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [modifiedRecipe, setModifiedRecipe] = useState<Recipe | null>(null); // State for the modified recipe

  const location = useLocation();
  const { recipe } = location.state as { recipe: Recipe };

  const handleToggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleSaveRecipe = () => {
    fetch('/api/saveRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe saved:', data);
      })
      .catch((error) => {
        console.error('Error saving recipe:', error);
      });
  };

  // Function to handle the modified recipe from RecipeIngredientsSelector
  const handleRecipeModified = (modifiedRecipe: Recipe) => {
    setModifiedRecipe(modifiedRecipe); // Update state with modified recipe
  };

  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isSelectorOpen ? 'md:flex-row' : 'md:flex-col'} gap-8`}>
          <RecipeDetail
            recipe={modifiedRecipe || recipe} // Use modified recipe if available
            onClickChooseIngredients={handleToggleSelector}
            onSaveRecipe={handleSaveRecipe}
          />
          {isSelectorOpen && <RecipeIngredientsSelector recipe={recipe} onRecipeModified={handleRecipeModified} />}
        </div>
      </div>
    </section>
  );
};

export default Recipe;

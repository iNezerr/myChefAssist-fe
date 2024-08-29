import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import RecipeIngredientsSelector from './RecipeIngredientsSelector';
import type { Recipe } from './types/Recipe';

const Recipe: React.FC = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const handleToggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };
  const location = useLocation();
  const { recipe } = location.state as { recipe: Recipe };


  return (
    //TODO: Add a section if there is no recipe in the location state
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isSelectorOpen ? 'md:flex-row' : 'md:flex-col'} gap-8`}>
          <RecipeDetail recipe={recipe} onChooseIngredients={handleToggleSelector} />
          {isSelectorOpen && <RecipeIngredientsSelector recipe={recipe} />}
        </div>
      </div>
    </section>
  );
};

export default Recipe;

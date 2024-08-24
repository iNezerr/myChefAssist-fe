import React from 'react';
import RecipeDetail from './RecipeDetail';
import RecipeIngredientsSelector from './RecipeIngredientsSelector';

const Recipe: React.FC = () => {
  const recipe = {
    name: 'Vegetable Wellington',
    image: 'https://placehold.co/600x400',
    description: 'A delicious and elegant vegetarian dish with a flaky pastry crust.',
    ingredients: [
      '1 sheet puff pastry',
      '2 cups mixed vegetables',
      '1 tbsp olive oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Sauté vegetables in olive oil until tender.',
      'Season with salt and pepper.',
      'Wrap vegetables in puff pastry and place on a baking sheet.',
      'Bake for 25-30 minutes until golden brown.',
    ],
    nutrition: 'Calories: 300 | Carbs: 50g | Protein: 10g | Fat: 15g',
    reviews: '(100 reviews)',
  };

  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <RecipeDetail recipe={recipe} />
          <RecipeIngredientsSelector recipe={recipe} />
        </div>
      </div>
    </section>
  );
};

export default Recipe;

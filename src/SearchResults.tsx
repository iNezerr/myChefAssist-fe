import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe, RecipeList } from './types/Recipe';
import axios from 'axios';

type Props = {
  results: RecipeList[]; // Update this type to match your API response structure
};

const SearchResults: React.FC<Props> = ({ results }) => {
  const navigate = useNavigate();
  const handlePOSTRecipeDetails = async (recipe_name: string) => {
    try {
      const response = await axios.post<Recipe>("http://localhost:8000/api/select-recipe/", {
        recipe_name: recipe_name,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });
      console.log(response);
      if (response.status === 200) {
        navigate('recipe-details', { state: { recipe: response.data } });
      }
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  }


  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Search Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                <p className="text-gray-300 mb-4">{result.description}</p>

                <button onClick={() => { handlePOSTRecipeDetails(result.name) }} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  View Recipe
                </button>

              </div>
            ))
          ) : (
            //TODO: Show a message when the search hasn't happened yet
            <p className="text-center text-gray-300">No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

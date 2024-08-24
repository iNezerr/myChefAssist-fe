import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const SearchResults: React.FC<Props> = (_props: Props) => {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Search Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Result 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recipe Title 1</h3>
            <p className="text-gray-300 mb-4">A brief description of the recipe goes here.</p>
            <NavLink to="recipe-details">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Recipe
              </button>
            </NavLink>
          </div>
          {/* Result 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recipe Title 2</h3>
            <p className="text-gray-300 mb-4">A brief description of the recipe goes here.</p>
            <NavLink to="recipe-details">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Recipe
              </button>
            </NavLink>
          </div>
          {/* Result 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recipe Title 3</h3>
            <p className="text-gray-300 mb-4">A brief description of the recipe goes here.</p>
            <NavLink to="recipe-details">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Recipe
              </button>
            </NavLink>
          </div>
          {/* Result 4 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recipe Title 4</h3>
            <p className="text-gray-300 mb-4">A brief description of the recipe goes here.</p>
            <NavLink to="recipe-details">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Recipe
              </button>
            </NavLink>
          </div>
          {/* Result 5 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recipe Title 5</h3>
            <p className="text-gray-300 mb-4">A brief description of the recipe goes here.</p>
            <NavLink to="recipe-details">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Recipe
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

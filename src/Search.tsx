import React, { useState } from 'react'
import SearchResults from './SearchResults'
import axios from 'axios';
import { RecipeList } from './types/Recipe';

type Props = {}

const Search: React.FC<Props> = (_props: Props) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<RecipeList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!query) return; // If the query is empty, do nothing

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/get-recipe-list/`, {
        params: { q: query },
      });
      // console.log(response.data.recipe)
      setResults(response.data.recipes);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="bg-gray-900 text-white pt-20 pb-10 mb-0 ">
        <div className="container mx-auto mb-0 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">The world's first AI Kitchen Assistant</h2>
          <p className='text-base sm:text-lg md:text-xl mb-8'>Millions of chef and restuarants create and maintain
            their recipes on MyChefAssist— the largest and most advanced cooking assistant platform in the world</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input type="text" placeholder="Enter your food"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full sm:w-80 p-4 rounded text-gray-700" />
            <button onClick={handleSearch} className="bg-green-500 px-6 py-4 rounded hover:bg-green-600">
              {loading ? 'Searching...' : 'Search for Recipe'}
            </button>
          </div>

        </div>
      </section>
      <SearchResults results={results} />
    </>
  )
}

export default Search

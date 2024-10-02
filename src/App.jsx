import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const filterizedRecipes = recipes.filter(function (recipe) {
    return recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
  })
  
  console.log(recipes);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        <h2>Recipe Cards</h2>
        <input onInput={e => setSearchTerm(e.target.value)} type="text" placeholder='Search by type' className='placeholder-black::placeholder p-1 border-2 border-zinc-900 text-sm font-medium text-zinc-900' />
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          filterizedRecipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default App;

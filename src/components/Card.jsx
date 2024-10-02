import React from 'react';

const Card = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{recipe.name}</h2>
        <p className="text-gray-700 text-base">Type: {recipe.cuisine || 'No description available.'}</p>
      </div>
      <div className="px-6 pt-4 pb-5">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Calories: {recipe.caloriesPerServing}
        </span>
      </div>
    </div>
  );
};

export default Card;

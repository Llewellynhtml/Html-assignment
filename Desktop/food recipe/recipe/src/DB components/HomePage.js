import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ recipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? recipe.category === selectedCategory : true)
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, selectedCategory, recipes]);

  return (
    <div className="home-page">
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('')}>All</button>
        <button onClick={() => setSelectedCategory('Breakfast')}>Breakfast</button>
        <button onClick={() => setSelectedCategory('Lunch')}>Lunch</button>
        <button onClick={() => setSelectedCategory('Dinner/Supper')}>Dinner/Supper</button>
        <button onClick={() => setSelectedCategory('Dessert')}>Dessert</button>
        <button onClick={() => setSelectedCategory('Sunday Lunch')}>Sunday Lunch</button>
      </div>
      
      <div className="homepage_search">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="homepage_search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='homepage_search-button' onClick={() => {}}>Search</button>
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <div className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h2>{recipe.name}</h2>
              <div><Link to={`/recipes/${recipe.id}`} className="view-recipe-button">Display Recipe</Link></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;

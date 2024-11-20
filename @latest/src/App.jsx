//import React from 'react'
import './App.css'

function App() {
  const recipes = [
    {
      name: 'Peanut Butter Jelly Sandwich',
      ingredients: ['bread', 'peanut butter', 'jelly'],
      calories: 300
    },
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'minced meat', 'tomato sauce', 'onion', 'garlic'],
      calories: 500
    }
  ]
  return (
    <>
    <div>
      <h1>My Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients.join(', ')}</p>
            <p>{recipe.calories} calories</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App

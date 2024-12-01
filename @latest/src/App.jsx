
import { useState } from 'react';
import MealTable from './mealTable';
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableRecipe from './dragAndDropRecipe';

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

  const initialMealPlan = {
    Sun: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Mon: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Tues: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Wed: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Thur: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Fri: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    },
    Sat: {
      Breakfast: [],
      Lunch: [],
      Dinner: []
    }
  };
  const [mealPlan, setMealPlan] = useState(initialMealPlan);
  return (
    <DndProvider backend={HTML5Backend}>
    <>
    <div>
      <div className="grid">
      <div>
        <h1>Meal Planner</h1>
        <MealTable mealPlan={mealPlan} setMealPlan={setMealPlan} />
        </div>
        <div>
        <h2>Recipe List</h2>
        <ul>
          {recipes.map((recipe, index) => (
          <li key={index}><DraggableRecipe recipe={recipe} /> </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    </>
    </DndProvider>
  )
}

export default App

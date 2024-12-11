
import { useState } from 'react';
import MealTable from './mealTable';
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableRecipe from './dragAndDropRecipe';
import Form from './Form';

function App() {
  const [recipes, setRecipes] = useState([{
    name: 'Peanut Butter Jelly Sandwich',
    ingredients: ['bread', 'peanut butter', 'jelly'],
    calories: 300
  },
  {
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'minced meat', 'tomato sauce', 'onion', 'garlic'],
    calories: 500
  },
]);

  const addRecipe=(newRecipe)=>{
    setRecipes(recipes => [...recipes,newRecipe])
  }

  const initialMealPlan = {
    Sun: { Breakfast: [], Lunch: [], Dinner: [] },
    Mon: { Breakfast: [], Lunch: [], Dinner: [] },
    Tues: { Breakfast: [], Lunch: [], Dinner: [] },
    Wed: { Breakfast: [], Lunch: [], Dinner: [] },
    Thur: { Breakfast: [], Lunch: [], Dinner: [] },
    Fri: { Breakfast: [], Lunch: [], Dinner: [] },
    Sat: { Breakfast: [], Lunch: [], Dinner: [] },
  };

  const [mealPlan, setMealPlan] = useState(initialMealPlan);
  const [selectedDays, setSelectedDays] = useState(Object.keys(initialMealPlan));

  const toggleDay = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };
  const filteredMealPlan = Object.keys(mealPlan)
    .filter(day => selectedDays.includes(day))
    .reduce((acc, day) => {
      acc[day] = mealPlan[day];
      return acc;
    }, {});
  return (
    <DndProvider backend={HTML5Backend}>
    <>
    <div>
    <h1>Meal Planner</h1>
    <div className="day-buttons">
            {Object.keys(initialMealPlan).map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                style={{
                  backgroundColor: selectedDays.includes(day) ? '#b0edfe' : '#f0f0f0',
                  margin: '5px',
                }}
              >
                {day}
              </button>
            ))}
          </div>
      <div className="grid">
          <div className = "calendar">
          <MealTable mealPlan={filteredMealPlan} setMealPlan={setMealPlan} />
          </div>
        <div className = "recipeList">
          <h2>Recipe List</h2>
          <ul>
            {recipes.map((recipe, index) => (
            <li key={index}><DraggableRecipe recipe={recipe} /> </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="form_box">
          <h2>Input a Recipie!</h2>
          <Form addRecipe={addRecipe} />
      </div>
    </div>
    </>
    </DndProvider>
  )
}

export default App

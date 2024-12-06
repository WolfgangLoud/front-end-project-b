import React from 'react'
import { useState } from 'react'
import FormIngredients from './FormIngredients';

function Form({addRecipe}) {
    const [formData, setFormData] = useState({});
    const [formIngredients, setFormIngredients] = useState([{ingredient:''}]);  


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      const newRecipe = {
        name: formData.recipeName,
        ingredients: formIngredients.map((formIngredients)=>formIngredients.ingredient),
        calories: formData.calories
      }
      addRecipe(newRecipe)
    }
  
    return (
      
      <form onSubmit={handleSubmit}>
        <label>Name of recipe: 
        <input 
          type= "text" 
          name= "recipeName" 
          value={formData.recipeName || ''} 
          onChange={handleChange}
        />
        </label>
        <label>Total Calories: 
          <input 
            type="number" 
            name="calories" 
            value={formData.calories || ''} 
            onChange={handleChange}
          />
          </label>
        <label>
            Ingredients: 
            <FormIngredients formIngredients={formIngredients} setFormIngredients={setFormIngredients}/>
        </label>
        <div className='submitBtn'>
          <input className='submit' type="submit"></input>
        </div>
      </form>
      
    )
  }
export default Form
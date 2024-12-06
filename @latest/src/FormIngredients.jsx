import React from 'react'


function FormIngredients({formIngredients,setFormIngredients}) {


    

    const handleFormChange = (index, event) => {
        let ingredients = [...formIngredients];
        ingredients[index][event.target.name] = event.target.value;
        setFormIngredients(ingredients)
     }

    const addIngredients= (event)=>{
        event.preventDefault()
        let newIngredient = { ingredient: '' }
        setFormIngredients([...formIngredients, newIngredient])
    }

  return (
    <form>
      {formIngredients.map((formIngredients, index) => {
        return (
           
                <div key={index}>
                    <input
                    name='ingredient'
                    onChange={event => handleFormChange(index, event)}
                    />
                </div>
        )
      })}
      <button onClick={addIngredients}>add ingredient</button>
    </form>
  )
}

export default FormIngredients
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

    const removeIngredient = (index) => {
        let ingredients = formIngredients.filter((current, i) => i !== index);
        setFormIngredients(ingredients);
    };

  return (
    <form>
      {formIngredients.map((formIngredients, index) => {
        return (
           
            <div key={index}>
                    <input
                    name='ingredient'
                    onChange={event => handleFormChange(index, event)}
                    />
                    {
              (() => { if (index !== 0) {
                  return (
                    <button type="button" onClick={() => removeIngredient(index)}>
                      Remove Ingredient
                    </button>
                  );
                  }
                  })()
              }
            </div>
        )
      })}
      <button onClick={addIngredients}>add ingredient</button>
    </form>
  )
}

export default FormIngredients
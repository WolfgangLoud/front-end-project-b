import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

function DroppableMealSlot({ day, mealType, setMealPlan, recipes }) {
    const [{ isOver, canDrop }, drop] = useDrop({
      accept: 'RECIPE',
      drop: (item) => addRecipeToMealPlan(day, mealType, item, setMealPlan),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });
  
    const isActive = canDrop && isOver;
  
    return (
      <td ref={drop} style={{ backgroundColor: isActive ? 'lightgreen' : 'white' }}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <strong>{recipe.name}</strong><br />
            Ingredients: {recipe.ingredients.join(', ')}<br />
            Calories: {recipe.calories}
          </div>
        ))}
      </td>
    );
  }

function addRecipeToMealPlan(day, mealType, recipe, setMealPlan) {
    setMealPlan(prevPlan => ({
      ...prevPlan,
      [day]: {
        ...prevPlan[day],
        [mealType]: [...prevPlan[day][mealType], recipe]
      }
    }));
  }
DroppableMealSlot.propTypes = {
  day: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  setMealPlan: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    calories: PropTypes.number.isRequired
  })).isRequired
};
export default DroppableMealSlot;
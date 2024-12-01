import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

const DraggableRecipe = ({ recipe }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'RECIPE',
    item: recipe,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      {recipe.name} - {recipe.calories} calories
    </div>
  );
};

DraggableRecipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    calories: PropTypes.number.isRequired
  }).isRequired
};

export default DraggableRecipe;
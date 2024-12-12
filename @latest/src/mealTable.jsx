//import React from 'react';
import PropTypes from 'prop-types';
import DroppableMealSlot from './dragAndDropSlot';
import { jsPDF } from 'jspdf'; 
import 'jspdf-autotable';

function MealTable({ mealPlan, setMealPlan }) {
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];
  
  const exportPDF = () => {
    const mealPlan = new jsPDF();
    mealPlan.autoTable({ html: '#meal-table' });
    mealPlan.save('meal-plan.pdf');
  };

  return (
    <table id='meal-table'>
      <thead>
        <tr>
          <th>Meal / Day</th>
          {Object.keys(mealPlan).map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {mealTypes.map(mealType => (
          <tr key={mealType}>
            <td>{mealType}</td>
            {Object.keys(mealPlan).map(day => (
              <DroppableMealSlot
                key={day + mealType}
                day={day}
                mealType={mealType}
                setMealPlan={setMealPlan}
                recipes={mealPlan[day][mealType]}
              />
            ))}
          </tr>
        ))}
      </tbody>
      <button onClick={exportPDF}>Download</button>
    </table>
  );
}
MealTable.propTypes = {
  mealPlan: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.string)
    )
  ).isRequired,
  setMealPlan: PropTypes.func.isRequired
};
  export default MealTable;
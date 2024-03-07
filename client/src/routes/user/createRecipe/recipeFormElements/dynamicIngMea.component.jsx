import { useState } from "react";

const IngredientsAndMeasurements = ({ measurements, addNewMeasurement, ingredients, addNewIngredient}) => {

    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(0);
    const [measurement, setMea] = useState([]);
  
    const addCard = (e) => {
      e.preventDefault();
        if(maxSteps > count){
            addNewIngredient(ing);
            addNewMeasurement(measurement);
            setIng('');
            setMea('1/8 tsp');
            setCount(count + 1);
        } else {
            alert('Cannot add more Ingredients ');
        }
    }
    return (  
        <>
        <h1>Ing and Mea</h1>
        <h3>{measurements}</h3>
        <h3>{ingredients}</h3>
        <input 
               type="text" 
               name={ing}   
               value={ing}
               onChange={(e) => setIng(e.target.value)}
        />
        <select name={measurement} defaultValue={'1/8 tsp'} onChange={(e) => setMea(e.target.value)}>
          <option value={'1/8 tsp'}>1/8 tsp</option>
          <option value={'1/4 tsp'}>1/4 tsp</option>
          <option value={'1/2 tsp'}>1/2 tsp</option>
          <option value={'3/4 tsp'}>3/4 tsp</option>
          <option value={'1 tsp'}>1 tsp</option>
          <option value={'1 1/4 tsp'}>1 1/4 tsp</option>
          <option value={'1 1/2 tsp'}>1 1/2 tsp</option>
          <option value={'2 tsp'}>2 tsp</option>
          <option value={'2 1/4 tsp'}>2 1/4 tsp</option>
          <option value={'2 1/2 tsp'}>2 1/2 tsp</option>
          <option value={'3 tsp'}>3 tsp</option>
          <option value={'1/8 Cup'}>1/8 Cup</option>
          <option value={'1/4 Cup'}>1/4 Cup</option>
          <option value={'1/2 Cup'}>1/2 Cup</option>
          <option value={'3/4 Cup'}>3/4 Cup</option>
          <option value={'1 Cup'}>1 Cup</option>
          <option value={'1 1/4 Cup'}>1 1/4 Cup</option>
          <option value={'1 1/2 Cup'}>1 1/2 Cup</option>
          <option value={'1 3/4 Cup'}>1 3/4 Cup</option>
          <option value={'2 Cups'}>2 Cups</option>
          <option value={'2 1/4 Cup'}>2 1/4 Cup</option>
          <option value={'2 1/2 Cup'}>2 1/2 Cup</option>
          <option value={'2 3/4 Cup'}>2 3/4 Cup</option>
          <option value={'3 Cups'}>3 Cups</option>
          <option value={'3 1/4 Cup'}>3 1/4 Cup</option>
          <option value={'3 1/2 Cup'}>3 1/2 Cup</option>
          <option value={'3 3/4 Cup'}>3 3/4 Cup</option>
          <option value={'4 Cups'}>4 Cups</option>
        </select>
        <button onClick={addCard}>Add Ingredient</button>
        </>
    );
}
 
export default IngredientsAndMeasurements;
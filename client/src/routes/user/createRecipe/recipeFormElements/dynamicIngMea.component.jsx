import { useState } from "react";
import { TopIngDiv, BottomIngDiv, SingleMeaIngDiv } from "../userRecipe.styles";
import { v4 as uuidv4 } from 'uuid';

const IngredientsAndMeasurements = ({ ingredients, addNewIngredient, setIngredients}) => {

    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(0);
    const [measurement, setMea] = useState('1 Cup');
  
    const addCard = (e) => {
      e.preventDefault();
        if(maxSteps > count){
            const newIng = {id: uuidv4(), ing: ing, mea: measurement};
            addNewIngredient(newIng);
            setIng('');
            setCount(count + 1);
        } else {
            alert('Cannot add more Ingredients ');
        }
    }
    const removeIngredient = (e, index) => {
        e.preventDefault();
        let removed2 = ingredients.filter(({id}) => {
            return id !== index;
         });
        setIngredients(removed2);
    }

    return (  
        <>
        <TopIngDiv>
          {ingredients.map(({id, ing, mea}, i) => {
            return ( 
                <SingleMeaIngDiv className="glass" key={i}>
                    <div key={id}>
                    <h4>{i + 1}</h4>
                    <p>{mea}</p>
                    <p>{ing}</p>
                    </div>
                    <div>
                    <button onClick={(e) => removeIngredient(e, id)}>Remove Ingredient</button>
                    </div>
                </SingleMeaIngDiv>
            )
          })}
          
        </TopIngDiv>
        <BottomIngDiv>
        <select name={measurement} onChange={(e) => setMea(e.target.value)}>
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
          <option selected value={'1 Cup'}>1 Cup</option>
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
        <input 
               type="text" 
               name={ing}   
               value={ing}
               onChange={(e) => setIng(e.target.value)}
        />
        <button onClick={addCard}>Add Ingredient</button>
        </BottomIngDiv>
        </>
    );
}
 
export default IngredientsAndMeasurements;
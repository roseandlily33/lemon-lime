import { useState } from "react";
import EachIngredient from "./EachIngredient.component";
import { v4 as uuidv4 } from 'uuid';
import { BottomIngDivEdit, InstructionsEdit, TopIngDivEdit, SingleMeaIngDivEdit } from "../edit.styles";
import EachMeasurement from "./EachMeasurements.component";

const UserIngredientEdit = ({measurements, setMeasurements, ingredients, setIngredients}) => {

    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [mea, setMea] = useState();
    const [count, setCount] = useState(ingredients.length);


    const addCard = (e, ing) => {
        e.preventDefault();
          if(maxSteps > count){
             const newIng = {id: uuidv4(), ing: ing};
             console.log('The new Ing', newIng)
              setIngredients([...ingredients, newIng]);
              setIng('');
              setCount(count + 1);
          } else {
              alert('Cannot add more cards');
          }
      }

    const deleteIngredient = (e, idx)=> {
        e.preventDefault();
        const newArray = ingredients.filter(({id}) => {
          return idx !== id
        });
        setIngredients(newArray);
      }
      console.log('Ingredients total', ingredients)

    return ( 
        <>
         <TopIngDivEdit>
         <SingleMeaIngDivEdit className="glass">
          <div className="outerLeft">  
           {measurements?.map((x,idx) => {
               return <EachMeasurement x={x} idx={idx}/>
             }) 
         }
         </div>
         <div className="outerRight">
         {ingredients.map(({id, ing}, idx) => (
            <EachIngredient idx={idx} id={id} ing={ing} deleteIngredients={deleteIngredient} setIngredients={setIngredients} ingredients={ingredients} />
        ))}
       </div>
      </SingleMeaIngDivEdit>
      </TopIngDivEdit>   
      <BottomIngDivEdit>
         <select name={mea} onChange={(e) => setMea(e.target.value)}>
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
         <input 
                type="text"  
                value={ing}
                onChange={(e) => 
                  setIng(e.target.value)}
         />
         <button onClick={(e) => addCard(e, ing)}>Add Ingredient</button>
         </BottomIngDivEdit>
         </>  
      
    );
}
 
export default UserIngredientEdit;
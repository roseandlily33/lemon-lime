import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Measurement from "./Measurement.component";
import EachIngredientCreate from "./EachIngredientCreate.component";
import { MiddleContainer, InputDiv } from "../../RecipeForm.styles";

const IngredientsCreate = ({ingredients, addNewIngredient, setIngredients}) => {

    const [ing, setIng] = useState('');
    const [mea, setMea] = useState();
    const [count, setCount] = useState(ingredients?.length);
    const [error, setError] = useState('');

    const addCard = (e) => {
        e.preventDefault();
          if(count <= 15){
             const newIng = {id: uuidv4(), ing: ing, mea: mea};
              addNewIngredient(newIng);
              setIng('');
              setCount(count + 1);
          } else {
              setError('Cannot add more than 15 ingredients')
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
        <MiddleContainer>
          <h3>Ingredients <span>max 15</span>{count}</h3>
          <hr />
        <>
        {ingredients?.length > 0 ? 
        <>
        {ingredients?.map(({id, ing, mea}, idx) => (
           <EachIngredientCreate idx={idx} id={id} ing={ing} mea={mea} deleteIngredient={deleteIngredient} setIngredients={setIngredients} ingredients={ingredients} />
          ))}
        </>:
        <h4 style={{textAlign: 'center', marginBlock: '2rem'}}>Add Instructions</h4>
        }
        </>
        
     <InputDiv>
      <p className="error">{error}</p>
        <Measurement mea={mea} setMea={setMea} />
        <input 
               type="text"  
               value={ing}
               placeholder="Add an ingredient"
               onChange={(e) => 
                 setIng(e.target.value)}
        />
        <button className="buttonWithIcon" onClick={(e) => addCard(e, ing)}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-add"><path className="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
        Add Ingredient</button>
        </InputDiv>
        </MiddleContainer>  
     );
}
 
export default IngredientsCreate;
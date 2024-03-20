import { useState, useEffect } from "react";
const EachIngredient = ({ing, id, idx, deleteIngredient, setIngredients, ingredients}) => {
    const [ingState, setIngState] = useState(ing);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        setIngState(ing);
    }, [ing]);  

    const setMyIngredients = (e) => {
        e.preventDefault();
        let ing = [...ingredients];
        let item = {
            ...ingredients[idx],
            ing: ingState
        }
        ing[idx] = item;
        setIngredients(ing);
        console.log('Set ingredients', ing, ingredients);
    }

    return ( 
        <div  className="right" key={id}>
            
            <label for={ingState}></label>

             <input 
               id={id}
               type="text" 
               name={ing}   
               value={ingState}
               onChange={(e) => {
                setIngState(e.target.value);}}
             />

             <button id={id} onClick={(e) => {
                setMyIngredients(e)
                setUpdated(true)
             }}>{updated ? 'Update Complete' : 'Update'}</button>

            <button className="secondaryButton" id={id} onClick={(e) => {
                e.preventDefault();
                deleteIngredient(e, id)}}>Delete Ingredient</button>
        </div>
     );
}
 
export default EachIngredient;
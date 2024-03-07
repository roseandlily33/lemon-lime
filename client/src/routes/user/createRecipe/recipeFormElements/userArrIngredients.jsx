import { useState } from "react";
import { IngredientsDiv } from "../userRecipe.styles";
const UserIngredientsArray = ({formValues, setFormValues}) => {
    const {ingredients} = formValues;
    const newIngredients = Object.assign({}, ingredients);
    const[newIng, setNewIng] = useState(newIngredients);

    const  handleChange = (e) => {
       const {name, value} = e.target;
       setNewIng({...newIng, [name]: value});
       setFormValues({...formValues, ingredients: newIng});
    }

    return ( 
        <IngredientsDiv >
        {Object.entries(newIng).map((x, idx) => {
             return <div>
             <input 
               type="text" 
               name={x[0]}   
               value={x[1]}
               onChange={handleChange}
             />
            </div>
        })}
        </IngredientsDiv>
     );
}
 
export default UserIngredientsArray;
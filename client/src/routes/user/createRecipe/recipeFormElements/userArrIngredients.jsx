import { useState } from "react";
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
        <>
        {Object.entries(newIng).map((x, idx) => {
             return <>
             <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={x[0]}   
               value={x[1]}
               onChange={handleChange}
             />
            </>
        })}
        </>
     );
}
 
export default UserIngredientsArray;
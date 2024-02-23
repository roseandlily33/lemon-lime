import { useState } from "react";
const UserIngredientsArray = ({formValues, setFormValues}) => {
    const {ingredients} = formValues;

    const  handleChange = (e) => {
       const {name, value} = e.target
       setFormValues({...formValues, [name]: value})
    }

    return ( 
        <>
        {ingredients.map((x, idx) => {
            console.log('Inside', x, idx)
        return <>
        <label name={idx}>{idx + 1}</label>
        <input 
          type="text" 
          name={idx}   
          value={x}
          onChange={handleChange}
        />
            </>
        })}
        </>
     );
}
 
export default UserIngredientsArray;
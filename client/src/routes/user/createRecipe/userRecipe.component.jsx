import { useState } from "react";
import {CreateRecipeForm} from './userRecipe.styles';
import UserIngredients from "./userIngredientsSingle.component";
const CreateRecipe = ({httpCreateRecipe}) => {
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: '',
        cookTime: '',
       // ingredients: '',
        instructions: ''
    });
    const [ingredients, setIngredients] = useState({
      i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
    })
    const addNewIngredient = (e) => {
      const {name, value} = e.target;
        setIngredients((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await httpCreateRecipe(formValues);
         console.log('Recipe response', response);
       const success = response.ok;
       if (success) {
          alert('Was Successful');
        } else {
           alert('Wasnt Successful');
         }
        setFormValues({
          recipeName: '',
          prepTime: '',
          cookTime: '',
          instructions: ''
      });
      };
     
    return (
    <>
    <h2>Create a recipe</h2>

    <CreateRecipeForm onSubmit={handleSubmit}>
      <label>Recipe Name:</label>
        <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          required
        />
      
      <label>Prep Time:
        <input 
          type="text" 
          name="prepTime"
          value={formValues.prepTime}
          onChange={handleChange}
          required
        />
      </label>
      <label>Cook Time:
        <input 
          type="text" 
          name="cookTime"
          value={formValues.cookTime}
          onChange={handleChange}
          required
        />
      </label>
      <label>Ingredients</label>
      <UserIngredients ingredients={ingredients} addNewIngredient={addNewIngredient}/>
    
      <input type="submit" />

    </CreateRecipeForm>

 </>

);
}
 
export default CreateRecipe;
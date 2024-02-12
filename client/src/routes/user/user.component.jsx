import { useState } from "react";

const UserHome = ({ httpCreateRecipe }) => {
   
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: '',
        cookTime: '',
        ingredients: '',
        instructions: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues)
        const response = await httpCreateRecipe(formValues);
         console.log('Recipe response', response);
       const success = response.ok;
       if (success) {
          alert('Was Successful');
        } else {
           alert('Wasnt Successful');
         }
      }


    return ( 
        <>
        <h2>Create a recipe</h2>

        <form onSubmit={handleSubmit}>
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
      <label>Ingredients:
        <input 
          type="text" 
          name="ingredients"
          value={formValues.ingredients}
          onChange={handleChange}
        />
      </label>
      <label>Instructions:
        <input 
          type="text" 
          name="instructions"
          value={formValues.instructions}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
      
 </>
     );
}
 
export default UserHome;
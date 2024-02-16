import { useState } from "react";
import {CreateRecipeForm} from './userRecipe.styles';
import { getTotalTime } from "../../../formattingUtils/totalTime";
import { EachInput } from "./userRecipe.styles";
import UserIngredients from "./userIngredientsSingle.component";
import UserInstructions from "./userInstructionsSingle.component";
const CreateRecipe = ({httpCreateRecipe}) => {
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: '',
        cookTime: ''
    });
    //For the subCategory State
    const [subCategory, setSubcategory] = useState('Lunch');
    //For the result
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
      //For the Ingredients
      const [ingredients, setIngredients] = useState({
        i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
      })
      const addNewIngredient = (e) => {
        const {name, value} = e.target;
          setIngredients({...ingredients, [name]: value})
      }
      //For the Instructions
      const [instructions, setInstructions] = useState({
        i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
      })
      const addNewInstruction = (e) => {
        const {name, value} = e.target;
          setInstructions({...instructions,[name]: value })
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime)
        let newInstructions = Object.values(instructions); 
        let newIngredients = Object.values(ingredients); 
        let totalSending = Object.assign(formValues, {
          instructions: newInstructions,
          ingredients: newIngredients,
          totalTime: totalTime,
          subCategory: subCategory
        })
       const response = await httpCreateRecipe(totalSending);
       const success = response.ok;
       if (success) {
          setResult(true);
        } else {
          setResult(false);
         }
        setFormValues({
          recipeName: '',
          prepTime: '',
          cookTime: '',
      });
        setIngredients({
          i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
        });
        setInstructions({
          i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
        })
      };

    return (
    <>
    <CreateRecipeForm onSubmit={handleSubmit}>

    <EachInput>
      <label>Recipe Name:</label>
        <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          required
        />
        </EachInput>
        <EachInput>
      <label>Prep Time:</label>
        <input 
          type="text" 
          name="prepTime"
          value={formValues.prepTime}
          onChange={handleChange}
          required
        />
      </EachInput>
      <EachInput>
      <label>Cook Time:</label>
        <input 
          type="text" 
          name="cookTime"
          value={formValues.cookTime}
          onChange={handleChange}
          required
        />
      </EachInput>
      <label for="subCategory">Choose SubCategory:</label>
        <select name="subCategory" onChange={(e) => setSubcategory(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Drink">Drinks</option>
        </select>

    <label style={{textTransform: 'uppercase', textDecoration: 'underline'}}>Ingredients</label>
      <UserIngredients ingredients={ingredients} addNewIngredient={addNewIngredient}/>

      <label style={{textTransform: 'uppercase', textDecoration: 'underline'}}>Instructions</label>
      <UserInstructions instructions={instructions} addNewInstruction={addNewInstruction}/>
      <input className="button" type="submit" />
    
      {result ?
        <h4>Congrats! You have created a recipe!</h4>
    : 
          <h4>Sorry, there was an error saving your recipe</h4>
      }

    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
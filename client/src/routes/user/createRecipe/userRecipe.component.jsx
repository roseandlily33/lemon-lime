import { useState } from "react";
import {CreateRecipeForm, TopForm, SideForm, EachInput} from './userRecipe.styles';
import UserIngredients from "./userIngredientsSingle.component";
import UserInstructions from "./userInstructionsSingle.component";
import { getTotalTime } from "../../../formattingUtils/totalTime";
const CreateRecipe = ({httpCreateRecipe}) => {
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: '',
        cookTime: ''
    });
    //For the subCategory State
    const [subCategory, setSubcategory] = useState('Lunch');

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
          alert('Was Successful');
        } else {
           alert('Wasnt Successful');
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
    <h2>Create a recipe</h2>
    <CreateRecipeForm onSubmit={handleSubmit}>
    <TopForm>
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
      </TopForm>
    <SideForm>
      <label style={{textTransform: 'uppercase', textDecoration: 'underline'}}>Ingredients</label>
      <UserIngredients ingredients={ingredients} addNewIngredient={addNewIngredient}/>
      </SideForm>
      <SideForm>
      <label style={{textTransform: 'uppercase', textDecoration: 'underline'}}>Instructions</label>
      <UserInstructions instructions={instructions} addNewInstruction={addNewInstruction}/>
      <input className="button" type="submit" />
      </SideForm>
    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
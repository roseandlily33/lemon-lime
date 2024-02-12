import { useState } from "react";
import {CreateRecipeForm, TopForm, SideForm, EachInput} from './userRecipe.styles';
import UserIngredients from "./userIngredientsSingle.component";
import UserInstructions from "./userInstructionsSingle.component";
const CreateRecipe = ({httpCreateRecipe}) => {
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: '',
        cookTime: '',
    });

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
          setIngredients({...ingredients,[name]: value})
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
        console.log('Form values', formValues);
        console.log('Instruction values', Array(instructions), Object.entries(instructions), );
        console.log('Ingredient Values', Array(ingredients));
        let totalSending = {...formValues, ...Object.values(instructions), ...Object.values(ingredients)};
        console.log('Total Sending', totalSending);
        const response = await httpCreateRecipe(totalSending);
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
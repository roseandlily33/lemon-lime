import { useState } from "react";
import {CreateRecipeForm, TopForm, MiddleForm, BottomForm} from './userRecipe.styles';
import { getTotalTime } from "../../../formattingUtils/totalTime";
import UserIngredients from "./userIngredientsSingle.component";
import UserMeasurements from "./userMeasurements.component";
import UserInstructions from "./userInstructionsSingle.component";
import {useAuth0} from '@auth0/auth0-react';

const CreateRecipe = ({httpCreateRecipe}) => {
    const {user} = useAuth0();
    //All forms values excpet Instructions and Ingredient
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: 10,
        cookTime: 10,
        subCategory: "Breakfast"
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
          setIngredients({...ingredients, [name]: value})
      }
      //For the Measurements 
      const [measurements, setMeasurements] = useState({
        m1: '1 Cup', m2: '1 Cup', m3: '1 Cup', m4: '1 Cup', m5: '1 Cup', m6: '1 Cup', m7: '1 Cup', m8: '1 Cup'
      });
      const addNewMeasurement = (e) => {
        const {name, value} = e.target;
          setMeasurements({...measurements, [name]: value})
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
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newInstructions = Object.values(instructions); 
        let newIngredients = Object.values(ingredients); 
        let newMeasurements = Object.values(measurements);
        let totalSending = Object.assign(formValues, {
          instructions: newInstructions,
          ingredients: newIngredients,
          measurements: newMeasurements,
          totalTime: totalTime,
        })
       const response = await httpCreateRecipe(user, totalSending);
       const success = response.ok;
       if (success) {
        alert('Success')
          //result = <h2 style={{color: 'green'}}>Created the recipe</h2>
        } else {
          alert('Failure')
          //result = <h2 style={{color: 'red'}}>There was an error creating the recipe</h2>
         }
        setFormValues({
          recipeName: '',
          prepTime: 10,
          cookTime: 10,
          subCategory: 'Breakfast'
      });
        setIngredients({
          i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
        });
        setInstructions({
          i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
        })
      };
      console.log('Form values', formValues)
      console.log('Ingredients', measurements, ingredients)
    return (
    <>
    <CreateRecipeForm onSubmit={handleSubmit}>
      <h1>Create a recipe</h1>
      <TopForm>
    {/* Recipe Name */}
      <label>Recipe Name:</label>
        <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          required
        />
      {/* Prep Time */}
      <label for={formValues.prepTime}>Prep Time:</label>
        <select name="prepTime" onChange={handleChange}>
          <option value={formValues.prepTime[10]}>10</option>
          <option value={formValues.prepTime[20]}>20</option>
          <option value={formValues.prepTime[30]}>30</option>
          <option value={formValues.prepTime[40]}>40</option>
          <option value={formValues.prepTime[50]}>50</option>
        </select>
      {/* Cook Time */}
      <label for={formValues.cookTime}>Cook Time:</label>
        <select name="cookTime" onChange={handleChange}>
          <option value={formValues.cookTime[10]}>10</option>
          <option value={formValues.cookTime[20]}>20</option>
          <option value={formValues.cookTime[30]}>30</option>
          <option value={formValues.cookTime[40]}>40</option>
          <option value={formValues.cookTime[50]}>50</option>
        </select>
      {/* SubCategory */}
      <label for={formValues.subCategory}>Choose SubCategory:</label>
      <select name="subCategory" onChange={handleChange}>
          <option value={formValues.subCategory["Breakfast"]}>Breakfast</option>
          <option value={formValues.subCategory["Lunch"]}>Lunch</option>
          <option value={formValues.subCategory["Dinner"]}>Dinner</option>
          <option value={formValues.subCategory["Dessert"]}>Dessert</option>
          <option value={formValues.subCategory["Drinks"]}>Drinks</option>
        </select>
        </TopForm>
      <hr/>
      <h2>Ingredients</h2>
      <MiddleForm>
      <UserMeasurements measurements={measurements} addNewMeasurement={addNewMeasurement}/>
      <UserIngredients ingredients={ingredients} addNewIngredient={addNewIngredient}/>
      </MiddleForm>
      <hr />
      <h2>Instructions</h2>
      <BottomForm>
      <UserInstructions instructions={instructions} addNewInstruction={addNewInstruction}/>
      </BottomForm>
      <input className="button" type="submit" />
    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
import { useState } from "react";
import {CreateRecipeForm, TopForm, MiddleForm, BottomForm, PhotosSection} from './userRecipe.styles';
import { getTotalTime } from "../../../formattingUtils/totalTime";
import UserInstructions from "./recipeFormElements/userInstructionsSingle.component";
import {useAuth0} from '@auth0/auth0-react';
import PrepTime from "./recipeFormElements/userPrepTime.component";
import CookTime from "./recipeFormElements/userCookTime.component";
import SubCategory from "./recipeFormElements/userSubCategory.component";
import RecipeName from "./recipeFormElements/userRecipeName.component";
import {useNavigate} from 'react-router-dom';
import { httpCreateRecipe } from "../../../hooks/userRequests";
import IngredientsAndMeasurements from "./recipeFormElements/dynamicIngMea.component";
import UserPhotos from "./recipeFormElements/userPhotos.component";

const CreateRecipe = () => {
  const navigate = useNavigate();
    const {user} = useAuth0();
    //All forms values excpet Instructions,Ingredient, Measurements, Photos
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
      const [ingredients, setIngredients] = useState([]);
      const addNewIngredient = (ing) => {
        setIngredients([...ingredients, ing])
      }
      
      const [measurements, setMeasurements] = useState([]);
      const addNewMeasurement = (mea) => {
        console.log('Adding measurement in', mea)
          setMeasurements([...measurements, mea]);
      }
     
      const [instructions, setInstructions] = useState([])
      const addNewInstruction = (ins) => {
        console.log('Adding instruciton in', ins);
        setInstructions([...instructions, ins])
      }
      //For the photos
      const [images, setImages] = useState([]);
      const maxNumber = 4;
      const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newRecipeName = formValues.recipeName.toLowerCase();
        let totalSending = Object.assign(formValues, {
          instructions: instructions,
          ingredients: ingredients,
          measurements: measurements,
          totalTime: totalTime,
          recipeName: newRecipeName,
          images: images
        });
      const response = await httpCreateRecipe(user, totalSending);
      const success = response.ok;
       if (success) {
        alert('Success');
        navigate('/user/home');
        } else {
          alert('Failure')
         }
        setFormValues({
          recipeName: '',
          prepTime: 10,
          cookTime: 10,
          subCategory: 'Breakfast'
      });
        setIngredients([]);
        setInstructions([]);
        setMeasurements([]);
      };
    return (
    <>
    <CreateRecipeForm onSubmit={handleSubmit}>
      <h1>Create a recipe</h1>
      <TopForm>
       {/* Recipe Name */}
      <RecipeName formValues={formValues} handleChange={handleChange} />
      {/* Prep Time */}
      <PrepTime formValues={formValues} handleChange={handleChange}/>
      {/* Cook Time */}
      <CookTime formValues={formValues} handleChange={handleChange} />
      {/* SubCategory */}
      <SubCategory formValues={formValues} handleChange={handleChange} />
      </TopForm>
      <hr/>
      <h2>Ingredients</h2>
      <MiddleForm>
         {/* Measurements and Ingredients */}
        <IngredientsAndMeasurements ingredients={ingredients} addNewIngredient={addNewIngredient} measurements={measurements} addNewMeasurement={addNewMeasurement}/>
      </MiddleForm>
      <hr />
      <h2>Instructions</h2>
      <BottomForm>
        {/* Instructions */}
      <UserInstructions instructions={instructions} addNewInstruction={addNewInstruction}/>
      </BottomForm>
      <PhotosSection>
      <h2 style={{textAlign: 'center'}}>Images <span style={{fontStyle: 'italic'}}>JPG Only</span></h2>
      <UserPhotos images={images} onChange={onChange} maxNumber={maxNumber}/>
      </PhotosSection>
      <input className="button" type="submit" />
    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
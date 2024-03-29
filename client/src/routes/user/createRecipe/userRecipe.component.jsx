import { useState } from "react";
import {CreateRecipeForm, TopForm, MiddleForm, PhotosSection} from './userRecipe.styles';
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
import CookingIllustration from '../../../images/undraw_cooking_p7m1.svg';
import { RightDiv, LeftDiv } from "./userRecipe.styles";

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
      };
    return (
    <>
    <CreateRecipeForm onSubmit={handleSubmit}>
      <h1>Create a recipe</h1>
      <TopForm>
      <LeftDiv>
      {/* Recipe Name */}
      <RecipeName formValues={formValues} handleChange={handleChange} />
      {/* Prep Time */}
      <PrepTime formValues={formValues} handleChange={handleChange}/>
      {/* Cook Time */}
      <CookTime formValues={formValues} handleChange={handleChange} />
      {/* SubCategory */}
      <SubCategory formValues={formValues} handleChange={handleChange} />
      </LeftDiv>
      <RightDiv>
      <img src={CookingIllustration} alt="Cooking Illustration" className="cooking-image"/>
      </RightDiv>
      </TopForm>
      <hr/>
      <h2>Ingredients</h2>
      <MiddleForm>
         {/* Measurements and Ingredients */}
        <IngredientsAndMeasurements ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients} />
      </MiddleForm>
      <hr />
      <h2>Instructions</h2>
      <MiddleForm>
        {/* Instructions */}
      <UserInstructions instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction}/>
      </MiddleForm>
      <hr />
      <PhotosSection>
      <h2>Images <span style={{fontSize: '1rem', fontStyle: 'italic'}}>JPG Only,
      max of 4 images <br />
      Image size displayed here is the actual size </span></h2>
      <UserPhotos images={images} onChange={onChange} maxNumber={maxNumber}/>
      </PhotosSection>
      <input className="button" type="submit" />
    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
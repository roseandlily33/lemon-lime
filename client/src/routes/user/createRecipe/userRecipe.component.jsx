import { useState } from "react";
import {CreateRecipeForm, TopForm, MiddleForm, BottomForm, PhotosSection} from './userRecipe.styles';
import { getTotalTime } from "../../../formattingUtils/totalTime";
import UserIngredients from "./recipeFormElements/userIngredientsSingle.component";
import UserMeasurements from "./recipeFormElements/userMeasurements.component";
import UserInstructions from "./recipeFormElements/userInstructionsSingle.component";
import {useAuth0} from '@auth0/auth0-react';
import PrepTime from "./recipeFormElements/userPrepTime.component";
import CookTime from "./recipeFormElements/userCookTime.component";
import SubCategory from "./recipeFormElements/userSubCategory.component";
import RecipeName from "./recipeFormElements/userRecipeName.component";
import {useNavigate} from 'react-router-dom';
import { httpCreateRecipe } from "../../../hooks/userRequests";
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
      //For the photos
      const [images, setImages] = useState([]);
      const maxNumber = 6;
      const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
      };
      console.log('Images', images);

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log()
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newInstructions = Object.values(instructions); 
        let newIngredients = Object.values(ingredients); 
        let newMeasurements = Object.values(measurements);
        let newRecipeName = formValues.recipeName.toLowerCase();
        let totalSending = Object.assign(formValues, {
          instructions: newInstructions,
          ingredients: newIngredients,
          measurements: newMeasurements,
          totalTime: totalTime,
          recipeName: newRecipeName,
          images: images
        })
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
        {/* Measurements */}
      <UserMeasurements measurements={measurements} addNewMeasurement={addNewMeasurement}/>
      {/* Ingredients */}
      <UserIngredients ingredients={ingredients} addNewIngredient={addNewIngredient}/>
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
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
import Modal from "../../../components/Modal/Model.component";


const CreateRecipe = () => {
  const navigate = useNavigate();
    const {user} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    const [successStatus, setSuccessState] = useState('')
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
        setSuccessState('You have created a recipe');
       setIsOpen(true)
       setFormValues({
        recipeName: '',
        prepTime: 10,
        cookTime: 10,
        subCategory: 'Breakfast'
        });
        setIngredients([]);
        setInstructions([]);
        } else {
          setSuccessState('Recipe has not been created')
          setIsOpen(true)
         }
        
      };

      // <button onClick={() => setIsOpen(true)}>Open Modal</button>
     
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
      <h2>Images 
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-inbox-upload"><path class="primary" d="M8 4a1 1 0 0 1-1 1H5v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5h-2a1 1 0 0 1 0-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 1z"/><path class="secondary" d="M11 6.41V13a1 1 0 0 0 2 0V6.41l1.3 1.3a1 1 0 0 0 1.4-1.42l-3-3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 1.4 1.42L11 6.4z"/></svg>
      <br />
      <span style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 24 24" class="icon-asterisk"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M11 10.62V7a1 1 0 0 1 2 0v3.62l3.45-1.12a1 1 0 0 1 .61 1.9l-3.44 1.13 2.13 2.93a1 1 0 0 1-1.62 1.17L12 13.7l-2.13 2.93a1 1 0 1 1-1.62-1.17l2.13-2.93-3.44-1.12a1 1 0 1 1 .61-1.9L11 10.61z"/></svg>
      
       JPG Only,max of 4 images <br />
<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 24 24" class="icon-asterisk"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M11 10.62V7a1 1 0 0 1 2 0v3.62l3.45-1.12a1 1 0 0 1 .61 1.9l-3.44 1.13 2.13 2.93a1 1 0 0 1-1.62 1.17L12 13.7l-2.13 2.93a1 1 0 1 1-1.62-1.17l2.13-2.93-3.44-1.12a1 1 0 1 1 .61-1.9L11 10.61z"/></svg>

      Image size displayed here is the actual size </span></h2>
      <UserPhotos images={images} onChange={onChange} maxNumber={maxNumber}/>
      </PhotosSection>
      <input className="button" style={{width: '150px'}} type="submit" />
      {isOpen && (
    <Modal onClose={() => setIsOpen(false)}>
      <h3>{successStatus}</h3>
      <button onClick={() => navigate('/user/home')}>Go Home</button>
    </Modal>
  )}
    </CreateRecipeForm>
 </>
);
}
 
export default CreateRecipe;
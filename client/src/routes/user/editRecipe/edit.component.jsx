import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { httpEditUserRecipe } from '../../../hooks/userRequests';
import { httpGetFullRecipeWithDetailsEditPage } from '../../../hooks/recipeRequests';
import { getTotalTime } from '../../../formattingUtils/totalTime';
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import DeleteRecipe from '../deleteRecipe/deleteRecipe.component';
// Form Fields:
import RecipeName from '../createRecipe/recipeFormElements/userRecipeName.component';
import CookTime from '../createRecipe/recipeFormElements/userCookTime.component';
import PrepTime from '../createRecipe/recipeFormElements/userPrepTime.component';
import SubCategory from '../createRecipe/recipeFormElements/userSubCategory.component';
import UserInstructionsArray from './editFormElements/userArrInstructions.component';
import UserIngredientsArray from './editFormElements/userArrIngredients';
//Styles
import { CreateRecipeForm, TopForm, MiddleForm, LeftDiv, RightDiv, PhotosSection} from '../createRecipe/userRecipe.styles';
import { ButtonDiv } from './edit.styles';
import Loader from '../../../components/Loader/loader.component';
import CookingIllustration from '../../../images/undraw_cooking_p7m1.svg';
import UserPhotos from '../createRecipe/recipeFormElements/userPhotos.component';

const EditRecipe = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const {id} = useParams();
    const [formValues, setFormValues] = useState();
    const maxNumber = 4;
   
    if(!user){
        navigate('/');
    }

    useEffect(() => {
        const fetchSingle = async() => {
            const res = await httpGetFullRecipeWithDetailsEditPage(id);
            setFormValues(res);
        }
        fetchSingle();
    }, [id]);

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
   }
      const handleSubmit = async (e) => {
        e.preventDefault();
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newInstructions = Object.values(formValues.instructions); 
        let newIngredients = Object.values(formValues.ingredients); 
        let newMeasurements = Object.values(formValues.measurements);
        let newRecipeName = formValues.recipeName.toLowerCase();
        let totalSending = Object.assign(formValues, {
          instructions: newInstructions,
          ingredients: newIngredients,
          measurements: newMeasurements,
          totalTime: totalTime,
          recipeName: newRecipeName
        })
       const response = await httpEditUserRecipe(id, totalSending);
       const success = response.ok;
       if (success) {
        alert('Success')
        navigate('/user/home')
        } else {
          alert('Failure')
         }
      };
    console.log('Form values edit page', formValues);
    return ( <>
    {!formValues ?
         <Loader />
     :
     <CreateRecipeForm>
    <h1>Edit Recipe</h1>
     <TopForm> 
    <LeftDiv>
    <RecipeName formValues={formValues} handleChange={handleChange}/>
    <PrepTime formValues={formValues} handleChange={handleChange} />
    <CookTime formValues={formValues} handleChange={handleChange} />
    <SubCategory formValues={formValues} handleChange={handleChange} />
    </LeftDiv>
    <RightDiv>
      <img src={CookingIllustration} alt="Cooking Illustration" className="cooking-image"/>
      </RightDiv>
    </TopForm>
    <hr/>
    <h2>Ingredients</h2>
    <MiddleForm>
        {/* {formValues.measurements && <UserArrayMeasurements formValues={formValues} handleChange={handleChange} setFormValues={setFormValues}/>} */}
        {formValues.ingredients && <UserIngredientsArray formValues={formValues} setFormValues={setFormValues} />}
    </MiddleForm>
    <hr />
    <h2>Instructions</h2>
    <MiddleForm>
    {formValues.instructions && <UserInstructionsArray formValues={formValues} setFormValues={setFormValues} />}
    </MiddleForm>
    <PhotosSection>
    <h2>Images <span style={{fontSize: '1rem', fontStyle: 'italic'}}>JPG Only,
      max of 4 images <br />
      Image size displayed here is the actual size </span></h2>
      {/* {formValues.images &&
      <UserPhotos images={formValues.images} onChange={setFormValues} maxNumber={maxNumber}/>
      } */}
    </PhotosSection>
    <ButtonDiv>
    <button onClick={handleSubmit}>Update Recipe</button>
    <DeleteRecipe id={id} />
    </ButtonDiv>
    </CreateRecipeForm>
}
    </>);
}
 
export default EditRecipe;
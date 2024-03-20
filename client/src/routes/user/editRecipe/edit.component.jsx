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
import UserEditPhotos from './editFormElements/userPhotosEdit';
import UserInstructionsEdit from './editFormElements/userInstructionsEdit.component';
import UserIngredientsEdit from './editFormElements/UserIngredientsEdit.component';
//Styles
import { CreateRecipeForm} from '../createRecipe/userRecipe.styles';
import { ButtonDiv, TopFormEdit, LeftDivEdit, RightDivEdit, MiddleFormEdit,  PhotosSectionEdit } from './edit.styles';
import Loader from '../../../components/Loader/loader.component';
import CookingIllustration from '../../../images/undraw_cooking_p7m1.svg';

const EditRecipe = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const {id} = useParams();
    const [formValues, setFormValues] = useState();
    const maxNumber = 4;
    const [instructions, setInstructions]= useState();
    const [measurements, setMeasurements] = useState();
    const [ingredients, setIngredients] = useState();
    const [images, setImages] = useState();

   
    
    if(!user){
        navigate('/');
    }

    useEffect(() => {
        const fetchSingle = async() => {
            const res = await httpGetFullRecipeWithDetailsEditPage(id);
            setFormValues(res);
            setInstructions(res.instructions);
            setMeasurements(res.measurements);
            setIngredients(res.ingredients);
            setImages(res.images);
        }
        fetchSingle();
    }, [id]);

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
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
        console.log('Total Sending to the server', totalSending);
       const response = await httpEditUserRecipe(id, totalSending);
       console.log('Resoonse frond the server', response);
       const success = response.ok;
       if (success) {
        alert('Success')
        navigate('/user/home')
        } else {
          alert('Failure')
         }
      };
      const setMyInstructions = (ins) => {
        console.log('Deleting', ins)
        setInstructions(prev => prev.filter(({id}) => {
          return ins !== id
        }))
      }

    return ( <>
    {!formValues ?
         <Loader />
     :
     <CreateRecipeForm>
    <h1>Edit Recipe</h1>
     <TopFormEdit> 
    <LeftDivEdit>
    <RecipeName formValues={formValues} handleChange={handleChange}/>
    <PrepTime formValues={formValues} handleChange={handleChange} />
    <CookTime formValues={formValues} handleChange={handleChange} />
    <SubCategory formValues={formValues} handleChange={handleChange} />
    </LeftDivEdit>
    <RightDivEdit>
      <img src={CookingIllustration} alt="Cooking Illustration" className="cooking-image"/>
      </RightDivEdit>
    </TopFormEdit>
    <hr/>
    <h2>Ingredients</h2>
    <MiddleFormEdit>
      <UserIngredientsEdit measurements={measurements} setMeasurements={setMeasurements} ingredients={ingredients} setIngredients={setIngredients} />
    </MiddleFormEdit>
    <hr />
    <h2 style={{marginBottom: '0.7rem'}}>Instructions</h2>
    <MiddleFormEdit>
    {formValues.instructions && 
    <UserInstructionsEdit instructions={instructions} setInstructions={setInstructions} setMyInstructions={setMyInstructions} />
    }
    </MiddleFormEdit>
    <hr />
    <PhotosSectionEdit>
    <h2>Images <span style={{fontSize: '1rem', fontStyle: 'italic'}}>JPG Only,
      max of 4 images <br />
      Image size displayed here is the actual size </span></h2>
      <UserEditPhotos images={images} setImages={setImages} maxNumber={maxNumber}/>
    </PhotosSectionEdit>
    <ButtonDiv>
    <button onClick={handleSubmit}>Update Recipe</button>
    <DeleteRecipe id={id} />
    </ButtonDiv>
    </CreateRecipeForm>
}
    </>);
}
 
export default EditRecipe;
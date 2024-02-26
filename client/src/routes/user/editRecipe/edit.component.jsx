import {useParams} from 'react-router-dom';
import { httpGetFullRecipeWithDetails } from '../../../hooks/requests';
import { useState, useEffect } from 'react';
import { httpEditUserRecipe } from '../../../hooks/requests';
import { getTotalTime } from '../../../formattingUtils/totalTime';
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import DeleteRecipe from '../deleteRecipe/deleteRecipe.component';
// Form Fields:
import RecipeName from '../createRecipe/recipeFormElements/userRecipeName.component';
import CookTime from '../createRecipe/recipeFormElements/userCookTime.component';
import PrepTime from '../createRecipe/recipeFormElements/userPrepTime.component';
import SubCategory from '../createRecipe/recipeFormElements/userSubCategory.component';
import UserInstructionsArray from '../createRecipe/recipeFormElements/userArrInstructions.component';
import UserIngredientsArray from '../createRecipe/recipeFormElements/userArrIngredients';
import UserArrayMeasurements from '../createRecipe/recipeFormElements/userArrMeasurements';

const EditRecipe = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const {id} = useParams();
    const [formValues, setFormValues] = useState();
   
    if(!user){
        navigate('/');
    }

    useEffect(() => {
        const fetchSingle = async() => {
            const res = await httpGetFullRecipeWithDetails(id);
            setFormValues(res);
        }
        fetchSingle();
    }, [id]);

   const handleChange = (e) => {
        const {name, value} = e.target;
       setFormValues({...formValues, [name]: value})
   }
   console.log('Single Recipe', formValues)

      const handleSubmit = async (e) => {
        e.preventDefault();
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newInstructions = Object.values(formValues.instructions); 
        let newIngredients = Object.values(formValues.ingredients); 
        let newMeasurements = Object.values(formValues.measurements);
        let totalSending = Object.assign(formValues, {
          instructions: newInstructions,
          ingredients: newIngredients,
          measurements: newMeasurements,
          totalTime: totalTime,
        })
       console.log('These are the final form values', totalSending);
       const response = await httpEditUserRecipe(id, totalSending);
       const success = response.ok;
       if (success) {
        alert('Success')
        navigate('/user/home')
        } else {
          alert('Failure')
         }
      };
    
    return ( <>
    {!formValues ?
     <h2>Recipe is Loading...</h2> 
     :
     <>
    <h1>Edit Recipe </h1>
    <RecipeName formValues={formValues} handleChange={handleChange}/>
    <CookTime formValues={formValues} handleChange={handleChange} />
    <PrepTime formValues={formValues} handleChange={handleChange} />
    <SubCategory formValues={formValues} handleChange={handleChange}  />
    <div>
         <h3>Measurements</h3>
        {formValues.measurements && <UserArrayMeasurements formValues={formValues} handleChange={handleChange} setFormValues={setFormValues}/>}
        <h3>Ingredients</h3>
        {formValues.ingredients && <UserIngredientsArray formValues={formValues} setFormValues={setFormValues} />}
    </div>
    <h3>Instructions</h3>
    {formValues.instructions && <UserInstructionsArray formValues={formValues} setFormValues={setFormValues} />}
    
    <button onClick={handleSubmit}>Update Recipe</button>
    <DeleteRecipe id={id} />
    </>
}
    </>);
}
 
export default EditRecipe;
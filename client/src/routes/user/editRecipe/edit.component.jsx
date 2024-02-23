import {useParams} from 'react-router-dom';
import { httpGetFullRecipeWithDetails } from '../../../hooks/requests';
import { useState, useEffect } from 'react';
import { httpEditUserRecipe } from '../../../hooks/requests';
import { getTotalTime } from '../../../formattingUtils/totalTime';
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
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

    //   //For the Ingredients
    //   const [ingredients, setIngredients] = useState({
    //     i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
    //   })
    //   const addNewIngredient = (e) => {
    //     const {name, value} = e.target;
    //       setIngredients({...ingredients, [name]: value})
    //   }
    //   //For the Measurements 
    //   const [measurements, setMeasurements] = useState({
    //     m1: '1 Cup', m2: '1 Cup', m3: '1 Cup', m4: '1 Cup', m5: '1 Cup', m6: '1 Cup', m7: '1 Cup', m8: '1 Cup'
    //   });
    //   const addNewMeasurement = (e) => {
    //     const {name, value} = e.target;
    //       setMeasurements({...measurements, [name]: value})
    //   }
    //   //For the Instructions
    //   const [instructions, setInstructions] = useState({
    //     i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: ''
    //   })
    //   const addNewInstruction = (e) => {
    //     const {name, value} = e.target;
    //       setInstructions({...instructions,[name]: value })
    //   }
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
    //     let newInstructions = Object.values(instructions); 
    //     let newIngredients = Object.values(ingredients); 
    //     let newMeasurements = Object.values(measurements);
    //     let totalSending = Object.assign(formValues, {
    //       instructions: newInstructions,
    //       ingredients: newIngredients,
    //       measurements: newMeasurements,
    //       totalTime: totalTime,
    //     })
    //    const response = await httpEditUserRecipe(user, totalSending);
    //    const success = response.ok;
    //    if (success) {
    //     alert('Success')
    //     navigate('/user')
    //     } else {
    //       alert('Failure')
    //      }
    //   };
    
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
    {formValues.measurements.length !== 0 && <UserArrayMeasurements formValues={formValues} handleChange={handleChange} />}
    {formValues.instructions && <UserInstructionsArray formValues={formValues} handleChange={handleChange} />}
    {formValues.ingredients && <UserIngredientsArray formValues={formValues} handleChange={handleChange} />}
    </>
}
    </>);
}
 
export default EditRecipe;
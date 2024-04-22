import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { httpEditUserRecipe } from '../../../hooks/userRequests';
import { httpGetFullRecipeWithDetailsEditPage } from '../../../hooks/recipeRequests';
import { getTotalTime } from '../../../formattingUtils/totalTime';
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import DeleteRecipe from '../deleteRecipe/deleteRecipe.component';
import Modal from '../../../components/Modal/Model.component';
// Form Fields:
import RecipeName from '../createRecipe/recipeFormElements/userRecipeName.component';
import CookTime from '../createRecipe/recipeFormElements/userCookTime.component';
import PrepTime from '../createRecipe/recipeFormElements/userPrepTime.component';
import SubCategory from '../createRecipe/recipeFormElements/userSubCategory.component';
import UserEditPhotos from './editFormElements/userPhotosEdit';
import UserInstructionsEdit from './editFormElements/userInstructionsEdit.component';
import UserIngredientEdit from './editFormElements/usersIngredientsEdits.component';
//Styles
import { CreateRecipeForm} from '../createRecipe/userRecipe.styles';
import { ButtonDiv, TopFormEdit, LeftDivEdit, RightDivEdit, MiddleFormEdit,  PhotosSectionEdit } from './edit.styles';
import Loader from '../../../components/Loader/loader.component';
import CookingIllustration from '../../../images/undraw_cooking_p7m1.svg';
import {useDispatch} from 'react-redux';
import { fetchUserRecipes } from "../../../redux/userSlice";


const EditRecipe = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const {id} = useParams();
    const [formValues, setFormValues] = useState();
    const maxNumber = 4;
    const [instructions, setInstructions]= useState();
    const [ingredients, setIngredients] = useState();
    const [images, setImages] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();

    if(!user){
        navigate('/');
    }

    useEffect(() => {
        const fetchSingle = async() => {
            const res = await httpGetFullRecipeWithDetailsEditPage(id);
            setFormValues(res);
            setInstructions(res.instructions);
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
          totalTime: totalTime,
          recipeName: newRecipeName,
          images: images
        });
        console.log('Total Sending to the server', totalSending);
       const response = await httpEditUserRecipe(id, totalSending);
       console.log('Resoonse frond the server', response);
       const success = response.ok;
       setIsOpen(true);
       if (success) {
         setSuccess('Recipe has been updated')
        } else {
          setSuccess('Recipe has not been updated, please try again later')
        }
         dispatch(fetchUserRecipes(user.sub));
      };

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
      <UserIngredientEdit ingredients={ingredients} setIngredients={setIngredients} />
    </MiddleFormEdit>
    <hr />
    <h2 style={{marginBottom: '0.7rem'}}>Instructions</h2>
    <MiddleFormEdit>
    {formValues.instructions && 
    <UserInstructionsEdit instructions={instructions} setInstructions={setInstructions} />
    }
    </MiddleFormEdit>
    <hr />
    <PhotosSectionEdit>
    <h2>Images 
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-inbox-upload"><path class="primary" d="M8 4a1 1 0 0 1-1 1H5v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5h-2a1 1 0 0 1 0-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 1z"/><path class="secondary" d="M11 6.41V13a1 1 0 0 0 2 0V6.41l1.3 1.3a1 1 0 0 0 1.4-1.42l-3-3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 1.4 1.42L11 6.4z"/></svg>
    <br />
    <span style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 24 24" class="icon-asterisk"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M11 10.62V7a1 1 0 0 1 2 0v3.62l3.45-1.12a1 1 0 0 1 .61 1.9l-3.44 1.13 2.13 2.93a1 1 0 0 1-1.62 1.17L12 13.7l-2.13 2.93a1 1 0 1 1-1.62-1.17l2.13-2.93-3.44-1.12a1 1 0 1 1 .61-1.9L11 10.61z"/></svg>
      Image size displayed here is the actual size </span></h2>
      <UserEditPhotos images={images} setImages={setImages} maxNumber={maxNumber}/>
    </PhotosSectionEdit>
    <ButtonDiv>
    {isOpen && (
    <Modal onClose={() => setIsOpen(false)}>
      <h3>{success}</h3>
      <button onClick={() => navigate('/user/home')}>Go Home</button>
    </Modal>
  )}
    <button style={{width: '150px'}} onClick={handleSubmit}>Update Recipe</button>
    <DeleteRecipe id={id} />
    </ButtonDiv>
    </CreateRecipeForm>
}
    </>);
}
 
export default EditRecipe;
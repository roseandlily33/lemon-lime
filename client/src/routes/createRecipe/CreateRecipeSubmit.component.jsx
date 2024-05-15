import { getTotalTime } from "../../formattingUtils/totalTime";
import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../redux/userSlice";
import { httpCreateRecipe } from "../../hooks/userRequests";
import { useAuth0 } from "@auth0/auth0-react";
import { SubmitButtonContainer } from "./RecipeForm.styles";

const CreateRecipeSubmit = ({formValues, images,
    instructions, ingredients, setIsOpen, setSuccessState,
    setError}) => {
    const dispatch = useDispatch();
    const {user} = useAuth0();
    const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log('CREATING RECIPE WITH THESE', formValues, images, ingredients, instructions);
        if(images?.length > 4){
          setError('Only 4 images can be uploaded')
        } else if (!ingredients?.length){
          setError('There must be at least 1 ingredient')
        } else if(!instructions?.length){
          setError('There must be at least 1 instruction')
        } else if (!formValues?.recipeName){
          setError('There must be a recipe name')
        }
        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newRecipeName = formValues.recipeName.toLowerCase();
        let totalSending = Object.assign(formValues, {
          instructions: instructions,
          ingredients: ingredients,
          totalTime: totalTime,
          recipeName: newRecipeName,
          images: images,
          authorName: user.nickName
        });
      const response = await httpCreateRecipe(user, totalSending);
      const success = response.ok;
       if (success) {       
       setSuccessState('You have created a recipe');
       setIsOpen(true)
      } else {
          setSuccessState('Recipe has not been created')
          setIsOpen(true)
         }
        dispatch(fetchUserRecipes(user.sub));
      };
    return (  
    <SubmitButtonContainer>
      <div class="button type--A"  onClick={(e) => handleSubmit(e)}>
        <div class="button__line"></div>
        <div class="button__line"></div>
        <span class="button__text">Create Recipe</span>
        <div class="button__drow1"></div>
        <div class="button__drow2"></div>
      </div>
    </ SubmitButtonContainer>
    
    );
}
 
export default CreateRecipeSubmit;
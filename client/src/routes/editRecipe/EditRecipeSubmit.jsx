import { getTotalTime } from "../../formattingUtils/totalTime";
import { useDispatch } from "react-redux";
import { httpEditUserRecipe } from "../../hooks/userRequests";
import { fetchUserRecipes } from "../../redux/userSlice";

const EditRecipeSubmit = ({user, setIsOpen, formValues, images, instructions, ingredients, id, setError, setSuccess}) => {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
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
          images: images
        });

       const response = await httpEditUserRecipe(id, totalSending);

       const success = response.ok;
       setIsOpen(true);
       if (success) {
         setSuccess('Recipe has been updated')
        } else {
          setSuccess('Recipe has not been updated, please try again later')
        }
         dispatch(fetchUserRecipes(user.sub));
      };

    return ( 
        <>
        <button style={{width: '200px'}} onClick={handleSubmit}>Update Recipe</button>
        </>
     );
}
 
export default EditRecipeSubmit;
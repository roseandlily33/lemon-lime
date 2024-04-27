
const CreateRecipeSubmit = () => {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if(images.length > 4){
    //       setError('Only 4 images can be uploaded')
    //     } else if (!ingredients.length){
    //       setError('There must be at least 1 ingredient')
    //     } else if(!instructions.length){
    //       setError('There must be at least 1 instruction')
    //     } else if (!formValues.recipeName){
    //       setError('There must be a recipe name')
    //     }
    //     let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
    //     let newRecipeName = formValues.recipeName.toLowerCase();
    //     let totalSending = Object.assign(formValues, {
    //       instructions: instructions,
    //       ingredients: ingredients,
    //       totalTime: totalTime,
    //       recipeName: newRecipeName,
    //       images: images
    //     });
    //   const response = await httpCreateRecipe(user, totalSending);
    //   const success = response.ok;
    //    if (success) {       
    //     setSuccessState('You have created a recipe');
    //    setIsOpen(true)
    //    setFormValues({
    //     recipeName: '',
    //     prepTime: 10,
    //     cookTime: 10,
    //     subCategory: 'Breakfast'
    //     });
    //     setIngredients([]);
    //     setInstructions([]);
    //     } else {
    //       setSuccessState('Recipe has not been created')
    //       setIsOpen(true)
    //      }
    //     dispatch(fetchUserRecipes(user.sub));
    //   };
    return (  <>
    <button>Create Recipe</button>
    </>);
}
 
export default CreateRecipeSubmit;
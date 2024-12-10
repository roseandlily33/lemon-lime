import { getTotalTime } from "../../formatting-utils/total-time";
import { createRecipe } from "../../redux/crudRecipeSlice";
import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../redux/userSlice";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// prettier-ignore
const useCreateRecipe = (
  formValues,
  images,
  instructions,
  ingredients,
  setIsOpen
) => {
  const dispatch = useDispatch();
  const [errorState, setError] = useState("");
  const { user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (images?.length > 4) {
      setError("Only 4 images can be uploaded");
    } else if (!ingredients?.length) {
      setError("There must be at least 1 ingredient");
    } else if (!instructions?.length) {
      setError("There must be at least 1 instruction");
    } else if (!formValues?.recipeName) {
      setError("There must be a recipe name");
    } else if (!formValues?.description) {
      setError("There must be a description");
    }
    let totalTime = await getTotalTime(
      formValues.cookTime,
      formValues.prepTime
    );
    let newRecipeName = formValues.recipeName.toLowerCase();

    const fullRecipe = {
      ...formValues,
      instructions: instructions,
      ingredients: ingredients,
      totalTime: totalTime,
      recipeName: newRecipeName,
      images: images,
      authorName: user.nickName,
    };
    setIsOpen(true);
    dispatch(createRecipe({ user: user, recipe: fullRecipe }));
  };
  const fetchNewUserRecipes = () => {
    dispatch(fetchUserRecipes(user.sub));
  }

  return { handleSubmit, errorState, fetchNewUserRecipes };
};

export default useCreateRecipe;

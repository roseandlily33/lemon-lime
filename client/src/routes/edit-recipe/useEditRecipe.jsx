import { useState } from "react";
import { fetchUserRecipes } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { getTotalTime } from "../../formatting-utils/total-time";
import { useAuth0 } from "@auth0/auth0-react";
import { editRecipe } from "../../redux/crudRecipeSlice";

const useEditRecipe = (
  formValues,
  photos,
  instructions,
  ingredients,
  id,
  setIsOpen
) => {
  const dispatch = useDispatch();
  const [errorState, setError] = useState("");
  const { user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Editing recipe handler has been fired");
    setError("");
    if (photos?.length > 4) {
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
    const imageUrls = photos.map((img) => {
      return { publicId: img.publicId };
    });
    const fullRecipe = {
      ...formValues,
      instructions: instructions,
      ingredients: ingredients,
      totalTime: totalTime,
      recipeName: newRecipeName,
      images: imageUrls,
    };
    setIsOpen(true);
    dispatch(editRecipe({ recipe: fullRecipe, id }));
    dispatch(fetchUserRecipes(user.sub));
  };

  return { handleSubmit, errorState };
};

export default useEditRecipe;

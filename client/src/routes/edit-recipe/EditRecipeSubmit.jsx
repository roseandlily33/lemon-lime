import { getTotalTime } from "../../formatting-utils/total-time";
import { useDispatch, useSelector } from "react-redux";
import { SubmitButtonContainer } from "../create-recipe/RecipeForm.styles";
import DeleteRecipe from "./delete-recipe/DeleteRecipeEdit.component";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { editRecipe } from "../../redux/crudRecipeSlice";
import Loader from "../../components/loader/Loader.component";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";

const EditRecipeSubmit = ({
  setIsOpen,
  formValues,
  images,
  instructions,
  ingredients,
  id,
  setNotification,
  setError,
  setSuccessState,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { isLoading, success, error } = useSelector(
    (state) => state.crudRecipes
  );
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
    };
    dispatch(editRecipe({ user: user, recipe: fullRecipe, id }));
  };

  useEffect(() => {
    if (success) {
      setSuccessState("Recipe has been edited");
      setIsOpen(true);
      setNotification(true);
      // dispatch(clearState());
    }
    if (error) {
      setSuccessState("Failed to edit recipe");
      setIsOpen(true);
      setNotification(false);
      // dispatch(clearState());
    }
  }, [success, error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <CreateRecipeButton functionName={handleSubmit} span="Edit Recipe" />
      <DeleteRecipe id={id} />
    </SubmitButtonContainer>
  );
};
EditRecipeSubmit.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
    cookTime: PropTypes.number,
    prepTime: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  images: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  id: PropTypes.string.isRequired,
  setSuccessState: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default EditRecipeSubmit;

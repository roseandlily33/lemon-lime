import { getTotalTime } from "../../formatting-utils/total-time";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { SubmitButtonContainer } from "./RecipeForm.styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { createRecipe } from "../../redux/crudRecipeSlice";
import Loader from "../../components/loader/Loader.component";
import CreateEditRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";

const CreateRecipeSubmit = ({
  formValues,
  images,
  instructions,
  ingredients,
  setIsOpen,
  setSuccessState,
  setError,
  setNotificationType,
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
      authorName: user.nickName,
    };

    dispatch(createRecipe({ user: user, recipe: fullRecipe }));
  };

  useEffect(() => {
    if (success) {
      setSuccessState("Recipe Created");
      setIsOpen(true);
      setNotificationType(true);
    }
    if (error) {
      setError("Failed to create recipe");
      setIsOpen(true);
      setNotificationType(false);
    }
  }, [success, error]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <CreateEditRecipeButton functionName={handleSubmit} span="Submit" />
    </SubmitButtonContainer>
  );
};
CreateRecipeSubmit.propTypes = {
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
    cookTime: PropTypes.number,
    prepTime: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  images: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  setIsOpen: PropTypes.func.isRequired,
  setSuccessState: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setNotificationType: PropTypes.func.isRequired,
};

export default CreateRecipeSubmit;

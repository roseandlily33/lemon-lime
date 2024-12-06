import { getTotalTime } from "../../formattingUtils/total-time";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { SubmitButtonContainer } from "./RecipeForm.styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { createRecipe, clearState } from "../../redux/crudRecipeSlice";
import Loader from "../../components/Loader/loader.component";

const CreateRecipeSubmit = ({
  formValues,
  images,
  instructions,
  ingredients,
  setIsOpen,
  setSuccessState,
  setError,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { isLoading, success, error } = useSelector(
    (state) => state.crudRecipes
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images?.length > 4) {
      setError("Only 4 images can be uploaded");
    } else if (!ingredients?.length) {
      setError("There must be at least 1 ingredient");
    } else if (!instructions?.length) {
      setError("There must be at least 1 instruction");
    } else if (!formValues?.recipeName) {
      setError("There must be a recipe name");
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
      dispatch(clearState());
    }
    if (error) {
      setError("Failed to create recipe");
      setIsOpen(true);
      dispatch(clearState());
    }
  }, [success, error]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <div className="button type--A" onClick={(e) => handleSubmit(e)}>
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">Create Recipe</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </div>
    </SubmitButtonContainer>
  );
};
CreateRecipeSubmit.propTypes = {
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
    cookTime: PropTypes.number,
    prepTime: PropTypes.number,
  }).isRequired,
  images: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  setIsOpen: PropTypes.func.isRequired,
  setSuccessState: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default CreateRecipeSubmit;

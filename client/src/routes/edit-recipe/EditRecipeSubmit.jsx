import { getTotalTime } from "../../formatting-utils/total-time";
import { useDispatch, useSelector } from "react-redux";
import { SubmitButtonContainer } from "../create-recipe/RecipeForm.styles";
import DeleteRecipe from "./delete-recipe/DeleteRecipeEdit.component";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { editRecipe, clearState } from "../../redux/crudRecipeSlice";
import Loader from "../../components/loader/Loader.component";
import { useAuth0 } from "@auth0/auth0-react";

const EditRecipeSubmit = ({
  setIsOpen,
  formValues,
  images,
  instructions,
  ingredients,
  id,
  setError,
  setSuccess,
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
    } else if (!formValues?.description){
      setError("There must be a description")
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
      setSuccess("Recipe has been edited");
      setIsOpen(true);
      dispatch(clearState());
    }
    if (error) {
      setError("Failed to edit recipe");
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
        <span className="button__text">Edit Recipe</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </div>
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
  }).isRequired,
  images: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  id: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setSuccess: PropTypes.func.isRequired,
};

export default EditRecipeSubmit;

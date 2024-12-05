import { getTotalTime } from "../../formattingUtils/total-time";
import { useDispatch } from "react-redux";
import { httpEditUserRecipe } from "../../hooks/userRequests";
import { fetchUserRecipes } from "../../redux/userSlice";
import { SubmitButtonContainer } from "../createRecipe/RecipeForm.styles";
import DeleteRecipe from "./DeleteRecipe/DeleteRecipeEdit.component";
import PropTypes from "prop-types";
import React from "react";

const EditRecipeSubmit = ({
  user,
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
    let totalSending = Object.assign(formValues, {
      instructions: instructions,
      ingredients: ingredients,
      totalTime: totalTime,
      recipeName: newRecipeName,
      images: images,
    });

    const response = await httpEditUserRecipe(id, totalSending);

    const success = response.ok;
    setIsOpen(true);
    if (success) {
      setSuccess("Recipe has been updated");
    } else {
      setSuccess("Recipe has not been updated, please try again later");
    }
    dispatch(fetchUserRecipes(user.sub));
  };

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
  user: PropTypes.object.isRequired,
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

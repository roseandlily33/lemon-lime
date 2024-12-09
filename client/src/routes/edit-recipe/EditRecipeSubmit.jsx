import { getTotalTime } from "../../formatting-utils/total-time";
import { useDispatch, useSelector } from "react-redux";
import { SubmitButtonContainer } from "../create-recipe/RecipeForm.styles";
// import DeleteRecipe from "./delete-recipe/DeleteRecipeEdit.component";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { editRecipe } from "../../redux/crudRecipeSlice";
import Loader from "../../components/loader/Loader.component";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import CreateRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";
import { fetchUserRecipes } from "../../redux/userSlice";
import useNotification from "../../utils/useNotification";
import Modal from "../../components/modal/Model.component";
import Notification from "../../components/notification/Notification.component";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";

const EditRecipeSubmit = ({
  formValues,
  images,
  instructions,
  ingredients,
  id,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [errorInput, setError] = useState("");
  const { isLoading, error, alert } = useSelector((state) => state.crudRecipes);

  const { notificationType, successMessage } = useNotification(error, alert);

  console.log("Submit Recipe", notificationType, successMessage);

  const handleSubmit = async (e) => {
    console.log("Editing recipe");
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
    console.log("FULL RECIPE SENDING", fullRecipe);
    setIsOpen(true);
    dispatch(editRecipe({ recipe: fullRecipe, id }));
    dispatch(fetchUserRecipes(user.sub));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <p style={{ color: "red" }}>{errorInput}</p>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <Notification
            messageShown={successMessage}
            status={notificationType}
          />
          <PrimaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <CreateRecipeButton functionName={handleSubmit} span="Edit Recipe" />
      {/* <DeleteRecipe id={id} /> */}
    </SubmitButtonContainer>
  );
};

EditRecipeSubmit.propTypes = {
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
};

export default EditRecipeSubmit;

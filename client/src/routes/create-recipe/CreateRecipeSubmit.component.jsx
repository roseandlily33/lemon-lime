import { useSelector } from "react-redux";
import { SubmitButtonContainer } from "./RecipeForm.styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Loader from "../../components/loader-spinner/LoaderIcon.component";
import CreateEditRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";
import useNotification from "../../utils/useNotification";
import Modal from "../../components/modal-popup/Model.component";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";
import Notification from "../../components/notification/Notification.component";
import { useNavigate } from "react-router-dom";
import useCreateRecipe from "./useCreateRecipe";

const CreateRecipeSubmit = ({
  formValues,
  images,
  instructions,
  ingredients,
  clearForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { isLoading, alert, error } = useSelector((state) => state.crudRecipes);

  const { handleSubmit, errorState, fetchNewUserRecipes } = useCreateRecipe(
    formValues,
    images,
    instructions,
    ingredients,
    setIsOpen,
    clearForm
  );

  const { notificationType, successMessage } = useNotification(error, alert);

  const [validationError, setValidationError] = useState("");

  const validateForm = () => {
    if (!formValues.recipeName || formValues.recipeName.trim() === "") {
      setValidationError("Recipe name is required.");
      return false;
    }
    if (!formValues.prepTime || isNaN(formValues.prepTime)) {
      setValidationError("Prep time is required and must be a number.");
      return false;
    }
    if (!formValues.cookTime || isNaN(formValues.cookTime)) {
      setValidationError("Cook time is required and must be a number.");
      return false;
    }
    if (!formValues.description || formValues.description.trim() === "") {
      setValidationError("Description is required.");
      return false;
    }
    if (!formValues.subCategory || formValues.subCategory.trim() === "") {
      setValidationError("Subcategory is required.");
      return false;
    }
    if (!instructions || instructions.length === 0) {
      setValidationError("At least one instruction is required.");
      return false;
    }
    if (!ingredients || ingredients.length === 0) {
      setValidationError("At least one ingredient is required.");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleValidatedSubmit = () => {
    if (validateForm()) {
      handleSubmit();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <p className="error">{validationError || errorState}</p>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <Notification
            messageShown={successMessage}
            status={notificationType}
          />
          <PrimaryButton
            functionName={() => {
              navigate("/user/home");
              fetchNewUserRecipes();
            }}
            span="Go Home"
          />
        </Modal>
      )}
      <CreateEditRecipeButton functionName={handleValidatedSubmit} span="Submit" />
    </SubmitButtonContainer>
  );
};
CreateRecipeSubmit.propTypes = {
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
    cookTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    prepTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
  }),
  images: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  clearForm: PropTypes.func,
};

export default CreateRecipeSubmit;

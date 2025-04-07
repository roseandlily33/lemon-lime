import { useSelector } from "react-redux";
import { SubmitButtonContainer } from "../create-recipe/RecipeForm.styles";
import DeleteRecipe from "./delete-recipe/DeleteRecipeEdit.component";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Loader from "../../components/loader-spinner/LoaderIcon.component";
import { useNavigate } from "react-router-dom";
import CreateRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";
import useNotification from "../../utils/useNotification";
import Modal from "../../components/modal-popup/Model.component";
import Notification from "../../components/notification/Notification.component";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";
import useEditRecipe from "./useEditRecipe";

const EditRecipeSubmit = ({
  formValues,
  photos,
  instructions,
  ingredients,
  id,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, error, alert } = useSelector((state) => state.crudRecipes);
  const { handleSubmit, errorState } = useEditRecipe(
    formValues,
    photos,
    instructions,
    ingredients,
    id,
    setIsOpen
  );

  const { notificationType, successMessage } = useNotification(error, alert);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SubmitButtonContainer>
      <p className="error">{errorState}</p>
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
      <DeleteRecipe id={id} />
    </SubmitButtonContainer>
  );
};

EditRecipeSubmit.propTypes = {
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
    cookTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    prepTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
  }),
  photos: PropTypes.array,
  instructions: PropTypes.array,
  ingredients: PropTypes.array,
  id: PropTypes.string,
};

export default EditRecipeSubmit;

import { useSelector } from "react-redux";
import { SubmitButtonContainer } from "./RecipeForm.styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Loader from "../../components/loader/Loader.component";
import CreateEditRecipeButton from "../../components/buttons/create-recipe-button/CreateRecipeButton.component";
import useNotification from "../../utils/useNotification";
import Modal from "../../components/modal/Model.component";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";
import Notification from "../../components/notification/Notification.component";
import { useNavigate } from "react-router-dom";
import useCreateRecipe from "./useCreateRecipe";

const CreateRecipeSubmit = ({
  formValues,
  images,
  instructions,
  ingredients,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { isLoading, alert, error } = useSelector((state) => state.crudRecipes);

  const { handleSubmit, errorState, fetchNewUserRecipes } = useCreateRecipe(
    formValues,
    images,
    instructions,
    ingredients,
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
            functionName={() => {
              navigate("/user/home");
              fetchNewUserRecipes();
            }}
            span="Go Home"
          />
        </Modal>
      )}
      <CreateEditRecipeButton functionName={handleSubmit} span="Submit" />
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
};

export default CreateRecipeSubmit;

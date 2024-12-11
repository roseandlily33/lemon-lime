import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loader from "../../../components/loader/Loader.component";
import DestructiveButton from "../../../components/buttons/destructive-button/DestructiveButton.component";
import DeleteModalConfirmation from "./DeleteModal.component";
import useNotification from "../../../utils/useNotification";
import useDeleteRecipe from "./useDeleteSubmit";

// prettier-ignore
const DeleteRecipe = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth0();

  if (!user) {
    navigate("/");
  }
  const { deleteRecipeById, fetchNewUserRecipes } = useDeleteRecipe(
    setIsOpen,
    id
  );

  const { isLoading, error, alert } = useSelector((state) => state.crudRecipes);
  const { notificationType, successMessage } = useNotification(error, alert);

  if (isLoading) {
    return <Loader />;
  }
  console.log("IS OPEN EDIT OUTSIDE", isOpen);

  return (
    <>
      {isOpen && (
        <DeleteModalConfirmation
          notifiationType={notificationType}
          successMessage={successMessage}
          setIsOpen={setIsOpen}
        />
      )}
      <DestructiveButton
        functionName={(id) => {
          deleteRecipeById(id);
          fetchNewUserRecipes();
        }}
        span="Delete Recipe"
      />
    </>
  );
};
DeleteRecipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRecipe;

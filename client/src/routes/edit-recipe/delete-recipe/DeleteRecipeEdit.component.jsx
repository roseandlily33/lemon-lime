import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRecipes } from "../../../redux/userSlice";
import { deleteRecipe } from "../../../redux/crudRecipeSlice";
import Loader from "../../../components/loader/Loader.component";
import DestructiveButton from "../../../components/buttons/destructive-button/DestructiveButton.component";
import DeleteModalConfirmation from "./DeleteModal.component";
import useNotification from "../../../utils/useNotification";

const DeleteRecipe = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useAuth0();
  if (!user) {
    navigate("/");
  }

  const { isLoading, error, alert, success } = useSelector(
    (state) => state.crudRecipes
  );
  console.log("ALERT FOR DELETE", alert);
  const { notificationType, successMessage } = useNotification(
    success,
    error,
    alert
  );

  const handleDeleteRecipe = async (id) => {
    console.log("Deleting handle");
    setIsOpen(true);
    dispatch(deleteRecipe(id));
    dispatch(fetchUserRecipes(user.sub));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isOpen && (
        <DeleteModalConfirmation
          notifiationType={notificationType}
          successMessage={successMessage}
        />
      )}
      <DestructiveButton
        functionName={handleDeleteRecipe(id)}
        span="Delete Recipe"
      />
    </>
  );
};
DeleteRecipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRecipe;

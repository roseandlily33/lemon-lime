import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/loader/Loader.component";
import DestructiveButton from "../../../components/buttons/destructive-button/DestructiveButton.component";
import Modal from "../../../components/modal/Model.component";
import useNotification from "../../../utils/useNotification";
import { deleteRecipe, clearState } from "../../../redux/crudRecipeSlice";
import { fetchUserRecipes } from "../../../redux/userSlice";
import Notification from "../../../components/notification/Notification.component";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";
// prettier-ignore
const DeleteRecipe = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, error, alert } = useSelector((state) => state.crudRecipes);
  const { notificationType, successMessage } = useNotification(error, alert);

  if (!user) {
    navigate("/");
  }
  const handleDeleteRecipe = async(e) => {
    e.preventDefault();
    dispatch(deleteRecipe(id));
    dispatch(fetchUserRecipes(user.sub));
    setIsOpen(true);
    dispatch(clearState());
}

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
        <Notification status={notificationType} messageShown={successMessage} />
        <PrimaryButton
          functionName={() => navigate("/user/home")}
          span="Go Home"
        />
      </Modal>
      )}
      <DestructiveButton
        functionName={(e) => handleDeleteRecipe(e)}
        span="Delete Recipe"
      />
      <br />
    </>
  );
};
DeleteRecipe.propTypes = {
  id: PropTypes.string,
};

export default DeleteRecipe;

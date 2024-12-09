import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/Model.component";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRecipes } from "../../../redux/userSlice";
import { deleteRecipe } from "../../../redux/crudRecipeSlice";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";
import Loader from "../../../components/loader/Loader.component";
import DestructiveButton from "../../../components/buttons/destructive-button/DestructiveButton.component";
import Notification from "../../../components/notification/Notification.component";

const DeleteRecipe = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [successState, setSuccess] = useState("");
  const dispatch = useDispatch();
  const [notifiationType, setNotificationType] = useState(null);

  const navigate = useNavigate();
  const { user } = useAuth0();
  if (!user) {
    navigate("/");
  }

  const { isLoading, error, alert, success } = useSelector(
    (state) => state.crudRecipes
  );

  const handleDeleteRecipe = async (id) => {
    setIsOpen(true);
    dispatch(deleteRecipe(id));
    dispatch(fetchUserRecipes(user.sub));
  };

  useEffect(() => {
    if (success) {
      setSuccess(alert);
      setNotificationType(true);
    }
    if (error) {
      setSuccess(alert);
      setNotificationType(false);
    }
  }, [success, error]);

  if (isLoading) {
    return <Loader />;
  }
  console.log(
    "Success " + success,
    "Error " + error,
    "successState " + successState
  );
  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <Notification success={notifiationType} message={successState} />
          <PrimaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <DestructiveButton
        functionName={(e) => {
          e.preventDefault();
          handleDeleteRecipe(id);
        }}
        span="Delete Recipe"
        // svg={
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 24 24"
        //     className="icon icon-trash"
        //   >
        //     <path
        //       className="primary"
        //       d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
        //     />
        //     <path
        //       className="secondary"
        //       d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
        //     />
        //   </svg>
        // }
      />
    </>
  );
};
DeleteRecipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRecipe;

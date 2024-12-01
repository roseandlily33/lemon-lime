import { httpDeleteRecipe } from "../../../hooks/userRequests";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal/Model.component";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../../redux/userSlice";
import SecondaryButton from "../../../components/Buttons/SecondaryButton/secondaryButton.component";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/primaryButton.component";

const DeleteRecipe = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useAuth0();
  if (!user) {
    navigate("/");
  }

  const deleteRecipe = async (id) => {
    setIsOpen(true);
    let res = await httpDeleteRecipe(id);
    if (res.ok) {
      setSuccess("Recipe has been deleted");
    } else {
      setSuccess("Recipe has not been deleted, please try again later");
    }
    dispatch(fetchUserRecipes(user.sub));
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          {success && <h3>{success}</h3>}
          <PrimaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <SecondaryButton
        functionName={(e) => {
          e.preventDefault();
          deleteRecipe(id);
        }}
        span="Delete Recipe"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon icon-trash"
          >
            <path
              className="primary"
              d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
            />
            <path
              className="secondary"
              d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
            />
          </svg>
        }
      />
    </>
  );
};
DeleteRecipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRecipe;

import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteRecipe } from "../../../redux/crudRecipeSlice";

const useDeleteRecipe = (setIsOpen, id) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const deleteRecipeById = async () => {
    setIsOpen(true);
    dispatch(deleteRecipe(id));
  };

  const fetchNewUserRecipes = () => {
    dispatch(fetchUserRecipes(user.sub));
  };

  return { deleteRecipeById, fetchNewUserRecipes };
};

export default useDeleteRecipe;

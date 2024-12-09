import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OuterForm, RecipeForm } from "../create-recipe/RecipeForm.styles";
import { useAuth0 } from "@auth0/auth0-react";
import EditRecipeForm from "./EditRecipeForm.component";

// prettier-ignore
const EditRecipe = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    navigate("/");
  }
  const navigate = useNavigate();

  return (
    <OuterForm>
      <RecipeForm className="boxShadow">
        <h2>Edit Recipe</h2>
        <hr />
        <>
          <EditRecipeForm />
        </>
      </RecipeForm>
    </OuterForm>
  );
};

export default EditRecipe;

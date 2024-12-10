import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { OuterForm, RecipeForm } from "./RecipeForm.styles";
import CreateRecipeForm from "./CreateRecipeForm.component";
// prettier-ignore

const CreateRecipe = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <OuterForm>
      <RecipeForm className="boxShadow">
        <h2>Create Recipe</h2>
        <hr />
        <CreateRecipeForm />
      </RecipeForm>
    </OuterForm>
  );
};

export default CreateRecipe;

import React, { useState } from "react";
import {
  TopForm,
  LeftDiv,
  RightDiv,
  MiddleForm,
  BottomForm,
} from "./RecipeForm.styles";
import TopCreate from "./top-form/TopCreate.component";
import MiddleCreate from "./middle-form/MiddleCreate.component";
import BottomCreate from "./bottom-form/BottomCreate.component";
import CookingIllustration from "../../images/undraw_cooking_p7m1.svg";
import CreateRecipeSubmit from "./CreateRecipeSubmit.component";

const CreateRecipeForm = () => {
  const [formValues, setFormValues] = useState({
    recipeName: "",
    prepTime: 10,
    cookTime: 10,
    subCategory: "Breakfast",
    description: "",
  });
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [images, setImages] = useState([]);
  //For Displaying the photos
  const [photos, setPhotos] = useState([]);

  const clearForm = () => {
    setFormValues({
      recipeName: "",
      cookTime: "",
      prepTime: "",
      description: "",
    });
    setImages([]);
    setInstructions([]);
    setIngredients([]);
  };

  return (
    <>
      <TopForm>
        <LeftDiv>
          <TopCreate formValues={formValues} setFormValues={setFormValues} />
        </LeftDiv>
        <RightDiv>
          <img
            src={CookingIllustration}
            alt="Cooking Illustration"
            className="cooking-image"
          />
        </RightDiv>
      </TopForm>
      <MiddleForm>
        <MiddleCreate
          instructions={instructions}
          setInstructions={setInstructions}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </MiddleForm>
      <BottomForm>
        <BottomCreate
          images={images}
          setImages={setImages}
          setPhotos={setPhotos}
          photos={photos}
        />
      </BottomForm>
      <CreateRecipeSubmit
        formValues={formValues}
        images={images}
        instructions={instructions}
        ingredients={ingredients}
        clearForm={clearForm}
      />
    </>
  );
};

export default CreateRecipeForm;

import React, { useState, useEffect } from "react";
import {
  TopForm,
  LeftDiv,
  RightDiv,
  MiddleForm,
  BottomForm,
} from "../create-recipe/RecipeForm.styles";
import CookingIllustration from "../../images/undraw_cooking_p7m1.svg";
import TopEdit from "./top-form/TopEdit.component";
import MiddleEdit from "./middle-form/MiddleEdit.component";
import BottomEdit from "./bottom-form/BottomEdit.component";
import { useSelector } from "react-redux";
import { Cloudinary } from "@cloudinary/url-gen";
import { selectRecipeById } from "../../redux/userSlice";
import EditRecipeSubmit from "./EditRecipeSubmit";
import { useParams } from "react-router-dom";

// prettier-ignore
const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => selectRecipeById(state, id));

  const [formValues, setFormValues] = useState({
    recipeName: "",
    prepTime: 0,
    cookTime: 0,
    subCategory: "",
    description: "",
  });

  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (recipe) {
      setFormValues({
        recipeName: recipe.recipeName,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        subCategory: recipe.subCategory,
        description: recipe.description,
      });
      setInstructions(recipe.instructions);
      setIngredients(recipe.ingredients);
    }
  }, [recipe]);

  useEffect(() => { 
    const fetchSingle = async () => {
    const cloud = new Cloudinary({ cloud: { cloudName: 'dql7lqwmr' } });
    const processedImages = await Promise.all(
      (recipe?.images || []).map((img) => {
        const myImageURL = cloud.image(img.publicId).toURL();
        return {
          publicId: img.publicId,
          url: myImageURL,
        };
      })
    );
    setPhotos(processedImages);
  };

  if (recipe && recipe.images && recipe.images.length > 0) {
    fetchSingle();
  }
  }, [id]);

  return (
    <>
      <TopForm>
        <LeftDiv>
          <TopEdit formValues={formValues} setFormValues={setFormValues} />
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
        <MiddleEdit
          ingredients={ingredients}
          setIngredients={setIngredients}
          instructions={instructions}
          setInstructions={setInstructions}
        />
      </MiddleForm>
      <BottomForm>
        <BottomEdit
          setPhotos={setPhotos}
          photos={photos}
        />
      </BottomForm>
      <EditRecipeSubmit
        photos={photos}
        ingredients={ingredients}
        instructions={instructions}
        formValues={formValues}
        id={id}
      />
    </>
  );
};

export default EditRecipeForm;

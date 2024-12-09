import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  OuterForm,
  RecipeForm,
  TopForm,
  LeftDiv,
  RightDiv,
  MiddleForm,
  BottomForm,
} from "../create-recipe/RecipeForm.styles";
import EditRecipeSubmit from "./EditRecipeSubmit";
import CookingIllustration from "../../images/undraw_cooking_p7m1.svg";
import TopEdit from "./top-form/TopEdit.component";
import MiddleEdit from "./middle-form/MiddleEdit.component";
import BottomEdit from "./bottom-form/BottomEdit.component";
import { useSelector } from "react-redux";
import { Cloudinary } from "@cloudinary/url-gen";
import { selectRecipeById } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import RecipeForm from "./EditRecipeForm.component";

// prettier-ignore
const EditRecipe = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    navigate("/");
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = useSelector((state) => selectRecipeById(state, id));
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    recipeName: '',
    prepTime: 0,
    cookTime: 0,
    subCategory: '',
    description: '',
  });

  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // Contains the publicId to fetch on cloudinary
  const [images, setImages] = useState(recipe?.images || []);
  // The link for the cloudinary - actual photo
  const [photos, setPhotos] = useState(recipe?.photos || []);

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
      setImages(recipe.images || []);
    }
  }, [recipe]);
  
  const addNewInstruction = (ins) => {
    setInstructions([...instructions, ins]);
  };
    const addNewIngredient = (ing) => {
    setIngredients([...ingredients, ing]);
  };
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };
  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };

  useEffect(() => {
    const fetchSingle = async () => {
      const cloud = new Cloudinary({ cloud: { cloudName: "dql7lqwmr" } });
      if (images) {
        await images?.map((img) => {
          const myImage = cloud.image(img.publicId).toURL();
          return addNewPhotos(myImage);
        });
      }
    };
    fetchSingle();
  }, [id, images]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <OuterForm>
      <RecipeForm className="boxShadow">
        <h2>Edit Recipe</h2>
        <hr />

        <>
        <p className="errorRed">{error}</p>
          
          <EditRecipeSubmit
            images={images}
            ingredients={ingredients}
            instructions={instructions}
            formValues={formValues}
            id={id}
            setError={setError}
          />
        </>
      </RecipeForm>
    </OuterForm>
  );
};

export default EditRecipe;

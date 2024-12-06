import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import {
  OuterForm,
  RecipeForm,
  TopForm,
  LeftDiv,
  RightDiv,
  MiddleForm,
  BottomForm,
} from "../createRecipe/RecipeForm.styles";
import EditRecipeSubmit from "./EditRecipeSubmit";
import CookingIllustration from "../../images/undraw_cooking_p7m1.svg";
// The Components for the edit form
import TopEdit from "./TopForm/TopEdit.component";
import MiddleEdit from "./MiddleForm/MiddleEdit.component";
import BottomEdit from "./BottomForm/BottomEdit.component";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Model.component";
// import { Cloudinary } from "@cloudinary/url-gen";
import { selectRecipeById } from "../../redux/userSlice";

// prettier-ignore
const EditRecipe = () => {
  //const { user } = useAuth0();
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = useSelector((state) => selectRecipeById(state, id));

  const [formValues, setFormValues] = useState({
    recipeName: '',
    prepTime: 0,
    cookTime: 0,
    subCategory: '',
    description: '',
  });

  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [images, setImages] = useState(recipe?.images || []);
  const [photos, setPhotos] = useState(recipe?.photos || []);


  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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

  // useEffect(() => {
  //   const fetchSingle = async () => {
  //     const cloud = new Cloudinary({ cloud: { cloudName: "dql7lqwmr" } });
  //     if (images) {
  //       await images?.map((img) => {
  //         const myImage = cloud.image(img.publicId).toURL();
  //         return addNewPhotos(myImage);
  //       });
  //     }
  //   };
  //   fetchSingle();
  // }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <OuterForm>
      <RecipeForm className="boxShadow">
        <h2>Edit Recipe</h2>
        <hr />
        <TopForm>
          <LeftDiv>
            <TopEdit formValues={formValues} handleChange={handleChange} />
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
            addNewIngredient={addNewIngredient}
            instructions={instructions}
            setInstructions={setInstructions}
            addNewInstruction={addNewInstruction}
          />
        </MiddleForm>
        <BottomForm>
          <BottomEdit
            images={images}
            addNewImage={addNewImage}
            addNewPhotos={addNewPhotos}
            photos={photos}
          />
        </BottomForm>
        <>
          {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
              <h3>{success}</h3>
              <button onClick={() => navigate("/user/home")}>Go Home</button>
            </Modal>
          )}
          <p className="error">{error}</p>
          <EditRecipeSubmit
            images={images}
            setError={setError}
            setSuccess={setSuccess}
            ingredients={ingredients}
            instructions={instructions}
            formValues={formValues}
            id={id}
            setIsOpen={setIsOpen}
          />
        </>
      </RecipeForm>
    </OuterForm>
  );
};

export default EditRecipe;

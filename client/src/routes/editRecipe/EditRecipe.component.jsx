// Imports needed
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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

import Modal from "../../components/Modal/Model.component";
import { Cloudinary } from "@cloudinary/url-gen";

//All imported files are coming from createRecipe and the styles are located in RecipeForm.styles.jsx

const EditRecipe = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { id } = useParams();

  //Gets the recipe when loaded
  useEffect(() => {
    const fetchSingle = async () => {
      const cloud = new Cloudinary({ cloud: { cloudName: "dql7lqwmr" } });
      //const res = await httpGetFullRecipeWithDetailsEditPage(id);
      let res;
      if (res) {
        console.log("RES", res);
        setFormValues({
          recipeName: res.recipeName,
          cookTime: res.cookTime,
          prepTime: res.prepTime,
          subCategory: res.subCategory,
        });
        setInstructions(res.instructions);
        setIngredients(res.ingredients);
        setImages(res.images);
        if (res.images) {
          await images?.map((img) => {
            const myImage = cloud.image(img.publicId).toURL();
            return addNewPhotos(myImage);
          });
        }
      }
    };
    fetchSingle();
  }, [id]);

  if (!user) {
    navigate("/");
  }

  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //Recipe Name, Times, SubCategory
  const [formValues, setFormValues] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log("FORM VALUES TOP", formValues);
  //Instructions
  const [instructions, setInstructions] = useState();
  const addNewInstruction = (ins) => {
    setInstructions([...instructions, ins]);
  };
  console.log("INSTRUCTIONS TOP", instructions);
  //Ingredients
  const [ingredients, setIngredients] = useState();
  const addNewIngredient = (ing) => {
    setIngredients([...ingredients, ing]);
  };
  console.log("INGREDIENTS TOP", ingredients);
  //Images
  const [images, setImages] = useState();
  const addNewImage = (img) => {
    setImages((prev) => [...prev, img]);
  };

  //For Displaying the photos
  const [photos, setPhotos] = useState([]);
  const addNewPhotos = (photo) => {
    setPhotos((prev) => [...prev, photo]);
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
            user={user}
            setIsOpen={setIsOpen}
          />
        </>
      </RecipeForm>
    </OuterForm>
  );
};

export default EditRecipe;

// Needed Imports
import { useState } from "react";
import CookingIllustration from '../../images/undraw_cooking_p7m1.svg';
import {useAuth0} from '@auth0/auth0-react';
import { getTotalTime } from "../../formattingUtils/totalTime";
import {useNavigate} from 'react-router-dom';
import { httpCreateRecipe } from "../../hooks/userRequests";

// Components
import TopCreate from "./TopForm/TopCreate.component";
import MiddleCreate from "./MiddleForm/MiddleCreate.component";
import BottomCreate from "./BottomForm/BottomCreate.component";
import CreateRecipeSubmit from "./CreateRecipeSubmit.component";
import Modal from "../../components/Modal/Model.component";
// Redux
import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../redux/userSlice";

const CreateRecipeForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    const [successStatus, setSuccessState] = useState('');
    const [error, setError] = useState('');

    //Top Level form state
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: 10,
        cookTime: 10,
        subCategory: "Breakfast"
    });
    console.log('TOP LEVEL FORM VALUES', formValues);
    //Handle Change for the Top Level form state
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
    //Ingredients
      const [ingredients, setIngredients] = useState([]);
      const addNewIngredient = (ing) => {
        setIngredients([...ingredients, ing])
    };
    console.log('INGREDIENTS', ingredients);
    //Instructions
    const [instructions, setInstructions] = useState([])
    const addNewInstruction = (ins) => {
      setInstructions([...instructions, ins])
    };
    console.log('INSTRUCTIONS', instructions);
    //For the photos
    const [images, setImages] = useState([]);
    const addNewImage = (img) => {
     // console.log('Images 1', images);
      setImages(prev => [...prev, img])
     // console.log('Images 2', images);
    }
    //For Displaying the photos
    const [photos, setPhotos] = useState([]);
    const addNewPhotos = (photo) => {
     // console.log('Photos 1', photos)
      setPhotos(prev => [...prev, photo])
      //console.log('Photos 2', photos)
    }

    return (  
        <>
        <h2>Create Recipe</h2>
        {/* <TopCreate formValues={formValues} handleChange={handleChange} /> */}
        {/* <img src={CookingIllustration} alt="Cooking Illustration" className="cooking-image"/> */}
        <MiddleCreate 
        instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction}
        ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients}
        />
        {/* <BottomCreate images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos} photos={photos}/> */}
        <>
        <p className="error">{error}</p>
      <input className="button" style={{width: '150px', marginBlock: '1em'}} type="submit" />
      {isOpen && (
      <Modal onClose={() => setIsOpen(false)}>
      <h3>{successStatus}</h3>
      <button onClick={() => navigate('/user/home')}>Go Home</button>
    </Modal>
  )}
        </>
        <CreateRecipeSubmit />
        </>
    );
}
 
export default CreateRecipeForm;
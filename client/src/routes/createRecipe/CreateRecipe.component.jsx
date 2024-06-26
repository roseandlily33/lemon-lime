// Needed Imports
import { useState } from "react";
import CookingIllustration from '../../images/undraw_cooking_p7m1.svg';
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// Styles
import { OuterForm, RecipeForm, TopForm, MiddleForm, BottomForm, LeftDiv, RightDiv  } from "./RecipeForm.styles";
// Components
import TopCreate from "./TopForm/TopCreate.component";
import MiddleCreate from "./MiddleForm/MiddleCreate.component";
import BottomCreate from "./BottomForm/BottomCreate.component";
import CreateRecipeSubmit from "./CreateRecipeSubmit.component";
import Modal from "../../components/Modal/Model.component";

const CreateRecipeForm = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [successStatus, setSuccessState] = useState('');
    const [error, setError] = useState('');

    if(!user){
      navigate('/');
    }

    //Top Level form state
    const [formValues, setFormValues] = useState({
        recipeName: '',
        prepTime: 10,
        cookTime: 10,
        subCategory: "Breakfast"
    });

    //Handle Change for the Top Level form state
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    };
    
    //Ingredients
      const [ingredients, setIngredients] = useState([]);
      const addNewIngredient = (ing) => {
        setIngredients([...ingredients, ing])
      };

    //Instructions
    const [instructions, setInstructions] = useState([])
    const addNewInstruction = (ins) => {
      setInstructions([...instructions, ins])
    };

    //For the photos
    const [images, setImages] = useState([]);
    const addNewImage = (img) => {
      setImages(prev => [...prev, img])
    }

    //For Displaying the photos
    const [photos, setPhotos] = useState([]);
    const addNewPhotos = (photo) => {
      setPhotos(prev => [...prev, photo])
    }

    return (  
      <OuterForm>
        <RecipeForm className="boxShadow">
        <h2>Create Recipe</h2>
        <hr />
        <TopForm>
        <LeftDiv>
        <TopCreate formValues={formValues} handleChange={handleChange} />
        </LeftDiv>
        <RightDiv>
        <img src={CookingIllustration} alt="Cooking Illustration" className="cooking-image"/>
        </RightDiv>
        </TopForm>
        <MiddleForm>
        <MiddleCreate 
        instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction}
        ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients}
        />
        </MiddleForm>
        <BottomForm>
        <BottomCreate images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos} photos={photos}/>
        </BottomForm>
        <>
        <p className="error">{error}</p>
        {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
        <h3>{successStatus}</h3>
        <button onClick={() => navigate('/user/home')}>Go Home</button>
         </Modal>
        )}
        </>
        <CreateRecipeSubmit formValues={formValues} images={images} instructions={instructions} 
        setSuccessState={setSuccessState} setIsOpen={setIsOpen}
        ingredients={ingredients} setError={setError} />
        </RecipeForm>
        </OuterForm>
    );
}
 
export default CreateRecipeForm;
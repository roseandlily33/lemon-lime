// Imports needed
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getTotalTime } from "../../formattingUtils/totalTime";
import CookingIllustration from '../../images/undraw_cooking_p7m1.svg';
// HTTP requests
import { httpEditUserRecipe } from "../../hooks/userRequests";
import { httpGetFullRecipeWithDetailsEditPage } from "../../hooks/recipeRequests";
// The Components for the edit form
import TopEdit from "./TopForm/TopEdit.component";
import MiddleEdit from "./MiddleForm/MiddleEdit.component";
import BottomEdit from "./BottomForm/BottomEdit.component";
import DeleteRecipe from "./DeleteRecipe/DeleteRecipeEdit.component";
import Modal from "../../components/Modal/Model.component";
//Redux
import { useDispatch } from "react-redux";
import { fetchUserRecipes } from "../../redux/userSlice";
//Cloudinary
import { Cloudinary } from "@cloudinary/url-gen";
//import SinglePhoto from "../user/createRecipe/recipeFormElements/userPhotos.component";


const EditRecipe = () => {
    const {user} = useAuth0();
    const navigate = useNavigate();
    const {id} = useParams();
    const [formValues, setFormValues] = useState();
    const [instructions, setInstructions]= useState();
    const [ingredients, setIngredients] = useState();
    const [images, setImages] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
   
    if(!user){
        navigate('/');
    }

    const addNewImage = (img) => {
       setImages(prev => [...prev, img]);
     }
     //For Displaying the photos
     const [photos, setPhotos] = useState([]);
     const addNewPhotos = (photo) => {
      console.log('Adding a new photo', photo)
       setPhotos(prev => [...prev, photo])
       console.log('After set photos', photos)
     }
     console.log('All URL photos', photos)

    useEffect(() => {
        const fetchSingle = async() => {
        const cloud = new Cloudinary({cloud: {cloudName: 'dql7lqwmr'}});

            const res = await httpGetFullRecipeWithDetailsEditPage(id);
            setFormValues(res);
            setInstructions(res.instructions);
            setIngredients(res.ingredients);
            setImages(res.images);
            if(res.images){
              images.map(img => {
                const myImage = cloud
               .image(img.publicId).toURL();
               return addNewPhotos(myImage);
      });
            }
        }
        fetchSingle();
    }, [id]);

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
   };
   
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(images.length > 4){
          setError('Only 4 images can be uploaded')
        } else if (!ingredients.length){
          setError('There must be at least 1 ingredient')
        } else if(!instructions.length){
          setError('There must be at least 1 instruction')
        } else if (!formValues.recipeName){
          setError('There must be a recipe name')
        }


        let totalTime = await getTotalTime(formValues.cookTime, formValues.prepTime);
        let newRecipeName = formValues.recipeName.toLowerCase();
        let totalSending = Object.assign(formValues, {
          instructions: instructions,
          ingredients: ingredients,
          totalTime: totalTime,
          recipeName: newRecipeName,
          images: images
        });
        //console.log('Total Sending to the server', totalSending);
       const response = await httpEditUserRecipe(id, totalSending);
       //console.log('Resoonse frond the server', response);
       const success = response.ok;
       setIsOpen(true);
       if (success) {
         setSuccess('Recipe has been updated')
        } else {
          setSuccess('Recipe has not been updated, please try again later')
        }
         dispatch(fetchUserRecipes(user.sub));
      };

    return ( 
        <>
        <h2>Edit Recipe</h2>
        <TopEdit formValues={formValues} handleChange={handleChange} />
        <MiddleEdit ingredients={ingredients} setIngredients={setIngredients}
        instructions={instructions} setInstructions={setInstructions}
        />
        <BottomEdit images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos} photos={photos} />
        <>
        {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
        <h3>{success}</h3>
        <button onClick={() => navigate('/user/home')}>Go Home</button>
        </Modal>
         )}
        <p className='error'>{error}</p>
        <button style={{width: '150px'}} onClick={handleSubmit}>Update Recipe</button>
        <DeleteRecipe id={id} />
        </>
        </>
     );
}
 
export default EditRecipe;
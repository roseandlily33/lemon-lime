// import {CreateRecipeForm, TopForm, MiddleForm, PhotosSection} from './userRecipe.styles';
// import UserInstructions from "./recipeFormElements/userInstructionsSingle.component";
// import PrepTime from "./recipeFormElements/userPrepTime.component";
// import CookTime from "./recipeFormElements/userCookTime.component";
// import SubCategory from "./recipeFormElements/userSubCategory.component";
// import RecipeName from "./recipeFormElements/userRecipeName.component";
// import IngredientsAndMeasurements from "./recipeFormElements/dynamicIngMea.component";
// import UserPhotos from "./recipeFormElements/userPhotos.component";
// import { RightDiv, LeftDiv } from "./userRecipe.styles";
// //import Modal from "../../../components/Modal/Model.component";
// //import {useDispatch} from 'react-redux';
// //import { fetchUserRecipes } from "../../../redux/userSlice";
// import SinglePhoto from './recipeFormElements/userPhotos.component';
// import EachPhoto from "./recipeFormElements/eachPhotos";
// //import Resizer from "react-image-file-resizer";
// //import Compress from 'compress.js';

// const CreateRecipe = () => {
    
//     //const compress = new Compress()
//     //All forms values excpet Instructions,Ingredient, Measurements, Photos
    
   
     
     
      
      

   
     
//     return (
//     <>
//     <CreateRecipeForm onSubmit={handleSubmit} className="boxShadow">
//       <h1>Create a recipe</h1>
//       <TopForm>
//       <LeftDiv>
//       {/* Recipe Name */}
//       <RecipeName />
//       {/* Prep Time */}
//       <PrepTime formValues={formValues} handleChange={handleChange}/>
//       {/* Cook Time */}
//       <CookTime formValues={formValues} handleChange={handleChange} />
//       {/* SubCategory */}
//       <SubCategory formValues={formValues} handleChange={handleChange} />
//       </LeftDiv>
//       <RightDiv>
      
//       </RightDiv>
//       </TopForm>
//       <hr/>
//       <h2>Ingredients</h2>
//       <MiddleForm>
//          {/* Measurements and Ingredients */}
//         <IngredientsAndMeasurements  />
//       </MiddleForm>
//       <hr />
//       <h2>Instructions</h2>
//       <MiddleForm>
//         {/* Instructions */}
//       <UserInstructions />
//       </MiddleForm>
//       <hr />
//       <PhotosSection>
//       <h2>Images 
//       <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-inbox-upload"><path class="primary" d="M8 4a1 1 0 0 1-1 1H5v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5h-2a1 1 0 0 1 0-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 1z"/><path class="secondary" d="M11 6.41V13a1 1 0 0 0 2 0V6.41l1.3 1.3a1 1 0 0 0 1.4-1.42l-3-3a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 1.4 1.42L11 6.4z"/></svg>
//       <br />
//       <span style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
//       <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 24 24" class="icon-asterisk"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M11 10.62V7a1 1 0 0 1 2 0v3.62l3.45-1.12a1 1 0 0 1 .61 1.9l-3.44 1.13 2.13 2.93a1 1 0 0 1-1.62 1.17L12 13.7l-2.13 2.93a1 1 0 1 1-1.62-1.17l2.13-2.93-3.44-1.12a1 1 0 1 1 .61-1.9L11 10.61z"/></svg>
//       Image size displayed here is the size they will be presented as</span></h2>
//       {/* <UserPhotos images={images} onChange={onChange} maxNumber={maxNumber}/> */}
//       <SinglePhoto />
//       <EachPhoto photos={photos} />
//       </PhotosSection>
      
//     </CreateRecipeForm>
//  </>
// );
// }
 
// export default CreateRecipe;
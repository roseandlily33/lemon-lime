import { UserContainer, UserRecipesContainer, UserOptionsContainer} from "./user.styles";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import RecipeContainer3 from "../../components/Recipe/recipe3.component";
import Loader from "../../components/Loader/loader.component";
import { useSelector } from "react-redux";

const UserHome = () => {
  const {user, isAuthenticated} = useAuth0();
  const navigate = useNavigate();
  
  const recipes = useSelector(state => state.user.userRecipes);
  console.log('USERS RECIPES', recipes)
    const createRecipe = () => {
      navigate('/user/create')
    }
    const editComments = () => {
      navigate('/user/comments')
    }

    return ( 
        <UserContainer>
         {isAuthenticated ?
         <>
          <UserRecipesContainer>
          {!recipes ? <Loader />:
          <>
          <UserOptionsContainer>
          <h1>Welcome {user.nickname}</h1>
          <button onClick={createRecipe}>Create a recipe</button>
          <button onClick={editComments}>Edit Comments</button>
          </UserOptionsContainer>
          {recipes.map((r) => {
            return <RecipeContainer3 recipe={r}/>
          })}
           </>
          }
          </UserRecipesContainer>
         </> :
         <h2>Login To View Your Recipes</h2>
        }
        </UserContainer>
     );
}
 
export default UserHome;
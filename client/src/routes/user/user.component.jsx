import { UserContainer, UserRecipesContainer, UserOptionsContainer} from "./user.styles";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import RecipeContainer3 from "../../components/Recipe/recipe3.component";
import Loader from "../../components/Loader/loader.component";
import { useSelector } from "react-redux";
import Background from '../../images/Background3.jpg';

const UserHome = () => {
  const {user, isAuthenticated} = useAuth0();
  const navigate = useNavigate();
  
  const recipes = useSelector(state => state.user.userRecipes);
  const loading = useSelector(state => state.user.isLoading);
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
          {loading ? <Loader />:
          <>
          <UserOptionsContainer>
            <div className="imgDiv">
          <img src={Background} alt="lemons background" />
          </div>
          <div className="userDiv">
          <h2>Welcome {user.nickname}</h2>
          <div className="buttonDiv">
          <button onClick={createRecipe}>Create a recipe</button>
          <button onClick={editComments}>Edit Comments</button>
          </div>
          </div>
          </UserOptionsContainer>
          <UserRecipesContainer>
          {recipes.map((r) => {
            return <RecipeContainer3 recipe={r}/>
          })}
           </UserRecipesContainer>
          </>
          }
         </> :
         <h2>Login To View Your Recipes</h2>
        }
        </UserContainer>
     );
}
 
export default UserHome;
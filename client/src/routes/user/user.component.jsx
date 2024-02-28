import { UserContainer, UserRecipesContainer, UserOptionsContainer} from "./user.styles";
import { useEffect, useState } from "react";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import RecipeContainer3 from "../../components/Recipe/recipe3.component";
import { httpGetUserRecipes } from "../../hooks/userRequests";
import Loader from "../../components/Loader/loader.component";

const UserHome = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState();
  const {user, isAuthenticated} = useAuth0();

    useEffect(() => {
      const getRecipes = async() => {
        if(user.sub){
          const response = await httpGetUserRecipes(user.sub);
          setRecipes(response.recipes)
        } 
       }
      getRecipes();
    }, [user]);

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
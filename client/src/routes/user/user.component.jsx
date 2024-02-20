import { UserContainer, UserRecipesContainer, UserOptionsContainer} from "./user.styles";
import { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import RecipeContainer2 from '../../components/Recipe/recipe2.container';
import {useNavigate} from 'react-router-dom';
import RecipeContainer3 from "../../components/Recipe/recipe3.component";
import { httpGetUserRecipes } from "../../hooks/requests";
import CreateRecipe from "./createRecipe/userRecipe.component";
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

    return ( 
        <UserContainer>
         {isAuthenticated ?
         <>
          <UserRecipesContainer>
          {!recipes ? <h3>Loading Recipes</h3>:
          <>
          <UserOptionsContainer>
          <h1>Welcome {user.nickname}</h1>
          <button onClick={createRecipe}>Create a recipe</button>
          </UserOptionsContainer>
          {recipes.map((r) => {
            return <RecipeContainer3 recipe={r}/>
          })}
           </>
          }
          </UserRecipesContainer>
          {/* <Outlet /> */}
          {/* <CreateRecipe httpCreateRecipe={httpCreateRecipe}/> */}
         </> :
         <h2>Login To View Your Recipes</h2>
        }
        </UserContainer>
     );
}
 
export default UserHome;
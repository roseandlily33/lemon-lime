import { UserContainer, UserRecipesContainer, UserContentContainer, UserOptionsContainer, UserOptions, UserInfo} from "./user.styles";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import RecipeContainer3 from "../../components/Recipe/recipe3.component";
import Loader from "../../components/Loader/loader.component";
import { useSelector } from "react-redux";
import Background from '../../images/Background2.jpg';
import Profile from '../../images/Profile1.jpg'

const UserHome = () => {
  const {user, isAuthenticated} = useAuth0();
  const navigate = useNavigate();
  const buttonItems = [
    {id: 1, title: 'Create a recipe', color: 'hsla(349, 43%, 66%, 0.2)', action: 'createRecipe'},
    {id: 2, title: 'Edit comments', color: 'hsla(349, 43%, 66%, 0.4)', action: 'editComments'}, 
    // {id: 3, title: 'Not in use', color: 'hsla(349, 43%, 66%, 0.6)', action: ''},
    // {id: 4, title: 'Not in use', color: 'hsla(349, 43%, 66%, 0.8)', action: ''}
  ];
  
  const recipes = useSelector(state => state.user.userRecipes);
  const loading = useSelector(state => state.user.isLoading);
  const switchFunction = (action) => {
    switch(action){
      case 'createRecipe': navigate('/user/create'); break;
      case  'editComments' : navigate('/user/comments'); break;
      default: return;
    }
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
          </UserOptionsContainer>
          <UserInfo>
              <img src={Profile} alt="User Profile" style={{height: '150px', width: '150px', borderRadius: '50%'}}/>
              <h2>Welcome {user.nickname}</h2>
          </UserInfo>
          <UserContentContainer>
          <UserOptions>
            {buttonItems.map((button) => {
            return <button key={button.id} onClick={() => switchFunction(button.action)} 
            style={{ backgroundColor:`${button.color}`, border: `${button.color}`}} className="box boxShadowHover">
              <p style={{color: '#77340D'}} onClick={() => switchFunction(button.action)}>{button.title}</p>
            </button>
           })}
          </UserOptions>
          <UserRecipesContainer className="scrollBar">
          {recipes.map((r) => {
            return <RecipeContainer3 recipe={r}/>
          })}
           </UserRecipesContainer>
          </UserContentContainer>
         
     
          
           
          </>
          }
         </> :
         <h2>Login To View Your Recipes</h2>
        }
        </UserContainer>
     );
}
 
export default UserHome;
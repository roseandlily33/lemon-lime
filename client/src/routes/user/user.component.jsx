import { UserContainer, UserRecipesContainer, UserOptionsContainer, UserOptions} from "./user.styles";
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
    
    {id: 1, title: 'Create A Recipe', color: 'hsla(21.599999999999994, 100%, 95.09803921568627%, 0.8)', action: 'createRecipe'},
    {id: 2, title: 'Edit Comments', color: 'hsla(21.739130434782602, 100%, 86.47058823529412%, 0.6)', action: 'editComments'}, 
    {id: 3, title: 'Not in use', color: 'hsla(21.62162162162162, 91.73553719008265%, 76.27450980392156%, 0.6)', action: ''},
    {id: 4, title: 'Not in use', color: 'hsla(21.456953642384107, 82.5136612021858%, 64.11764705882352%, 0.6)', action: ''}
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
          <div className="userDiv">
            <div className="userInfo">
              <img src={Profile} alt="User Profile" style={{height: '150px', width: '150px', borderRadius: '50%'}}/>
          <h2>Welcome {user.nickname}</h2>
          </div>
          </div>
          </UserOptionsContainer>
          <UserOptions>
           
            {buttonItems.map((button) => {
            return <div key={button.id} onClick={() => switchFunction(button.action)} style={{ backgroundColor:`${button.color}`}} className="boxShadowHover">
              <h3 style={{color: '#77340D'}} onClick={() => switchFunction(button.action)}>{button.title}</h3>
            </div>
           })}
       
          </UserOptions>
          
          <UserRecipesContainer className="scrollBar">
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
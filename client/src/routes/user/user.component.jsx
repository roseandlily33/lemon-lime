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
    
    {id: 1, title: 'Create A Recipe', color: '#FFEFE6', action: 'createRecipe'},
    {id: 2, title: 'Edit Comments', color: '#FFD3BA', action: 'editComments'}, 
    {id: 3, title: 'Not in use', color: '#FAB38B', action: ''},
    {id: 4, title: 'Not in use', color: '#EF8E58', action: ''}
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
            return <div key={button.id} style={{ backgroundColor:`${button.color}`}}>
              <h3 onClick={() => switchFunction(button.action)}>{button.title}</h3>
            </div>
           })}
       
          </UserOptions>
          
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
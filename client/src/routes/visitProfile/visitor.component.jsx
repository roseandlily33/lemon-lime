import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { VisitorContainer, LeftContainer, RightContainer, UsersInfo, UsersRecipes, UserOptions, UserRecipeContainer } from "./visitor.styles";
import { httpGetUserRecipes, httpGetUsersFavoriteRecipes } from "../../hooks/userRequests";
import RecipeContainer from "../../components/Recipe/recipe.component";
import Background from '../../images/Background4.jpg';
import Profile from '../../images/Profile1.jpg';


const VisitorPage = () => {
    const {id} = useParams();
    const [userRecipes, setUserRecipes] = useState();
    const [username, setUserName] = useState('');
    const [favorites, setFavorites] = useState();
    const [showRecipe, setShowRecipe] = useState(true);
    const [showFave, setShowFave] = useState(false);
    console.log('On visitors page', id)
    useEffect(() => {
        const fetchUser = async() => {
           let visitingUser = await httpGetUserRecipes(id);
           let favorites = await httpGetUsersFavoriteRecipes(id);
            setUserRecipes(visitingUser.recipes);
            setUserName(visitingUser.name);
            setFavorites(favorites.favoriteRecipes);
        }
        fetchUser();
    }, [id])
    //console.log('Visitor faves', favorites);
    const switchTab = () => {
        if(showRecipe === true){
            setShowRecipe(false);
            setShowFave(true)
        } else {
            setShowFave(false);
            setShowRecipe(true);
        }
    }

    return (
        <VisitorContainer>
            <LeftContainer>
                <img src={Background} alt="Grapefruits, lemons, limes" />
            </LeftContainer>
            <RightContainer>
            <UsersInfo className="boxShadow">
            <img src={Profile} alt="User Profile Avatar"/>
            <h2>{username}</h2> 
            </UsersInfo>
            <UsersRecipes>
                <UserOptions>
                    {/* Apply a condition to what is shown later : <div .trim()} */}
                    <h3 onClick={switchTab} className={`${showRecipe ? ' selected' : ''}`}>Recipes</h3>
                    <h3 onClick={switchTab} className={`${showFave ? ' selected' : ''}`}>Favorites</h3>
                </UserOptions>
                <UserRecipeContainer>
                <>
                    {showRecipe ?  
                   <>
                    {userRecipes?.map((recipe) => {
                        return <RecipeContainer recipe={recipe} />
                    })}
                  </> :  <>
                    {favorites?.map((recipe) => {
                    return <RecipeContainer recipe={recipe} />
                        })}
                    </>
                        } 
                    </>
                
                </UserRecipeContainer>
            </UsersRecipes>
            </RightContainer>
        </VisitorContainer>
     );
}
 
export default VisitorPage;
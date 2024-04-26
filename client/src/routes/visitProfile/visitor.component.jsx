import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { VisitorContainer, LeftContainer, RightContainer, UsersInfo, UsersRecipes, UserOptions, UserRecipeContainer } from "./visitor.styles";
import { httpGetUserRecipes } from "../../hooks/userRequests";
import RecipeContainer from "../../components/Recipe/recipe.component";
import Background from '../../images/Background4.jpg';
import Profile from '../../images/Profile1.jpg';

const VisitorPage = () => {
    const {id} = useParams();
    const [userRecipes, setUserRecipes] = useState();
    const [username, setUserName] = useState('');
    console.log('On visitors page', id)
    useEffect(() => {
        const fetchUser = async() => {
           let visitingUser = await httpGetUserRecipes(id);
            setUserRecipes(visitingUser.recipes);
            setUserName(visitingUser.name);
        }
        fetchUser();
    }, [id])


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
                    {/* Apply a condition to what is shown later : <div className={`container${some condition ? ' bg-green' : ''}`.trim()} */}
                <h3 className="selected">Recipes</h3>
                    <h3>Favorites</h3>
                </UserOptions>
                <UserRecipeContainer>
                {userRecipes?.map((recipe) => {
                    return <RecipeContainer recipe={recipe} />
                })}
                </UserRecipeContainer>
            </UsersRecipes>
            </RightContainer>
        </VisitorContainer>
     );
}
 
export default VisitorPage;
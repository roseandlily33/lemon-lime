import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { VisitorContainer, UsersInfo, UsersRecipes } from "./visitor.styles";
const VisitorPage = () => {
    const {id} = useParams();
    const [userRecipes, setUserRecipes] = useState();
    const [username, setUserName] = useState('');

    useEffect(() => {
        const fetchUser = async(id) => {
            let visitingUser = await httpFetchUser()
        }
        fetchUser(id);
    }, [id])


    return (
        <VisitorContainer>
            <UsersInfo>
            <h2>Visitor page for {id}</h2> 
            </UsersInfo>
            <UsersRecipes>
                <h3>Recipes</h3>
                {/* Map through the fetched users recipes and display them in either 1 or 2 */}
            </UsersRecipes>
        </VisitorContainer>
     );
}
 
export default VisitorPage;
import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
const HomePage = ({ allRecipes, popularRecipes}) => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
          console.log('Cookies', cookies.token);
          if (!cookies.token) {
            navigate("/signin");
          }
          const { data } = await axios.post(
            "http://localhost:8000",
            {},
            { withCredentials: true }
          );
          console.log('Returned data from home page', data);
          const { status, user } = data;
          console.log('Status', status, 'User', user);
          setUsername(user);
          return status
            ? toast(`Hello ${user}`, {
                position: "top-right",
              })
            : (removeCookie("token"), navigate("/signin"));
        };
        verifyCookie();
      }, [cookies, navigate, removeCookie]);
    //   const Logout = () => {
    //     removeCookie("token");
    //     navigate("/signup");
    //   };
    return (
        <MainDiv>
            <h1>Welcome {username}</h1>
        <LeftMainDiv>
            <h2>New Recipes</h2>
            {
                allRecipes.map((recipe) => {
                    return <RecipeContainer recipe={recipe} /> 
                })
            }
        </LeftMainDiv>
        <RightMainDiv>
            <h2>Popular Recipes</h2>
            {
                popularRecipes.map((recipe) => {
                    return <RecipeContainer2 recipe={recipe} /> 
                })
            }
        </RightMainDiv>
        </MainDiv>
    
       );
}
 
export default HomePage;
import {
  UserContainer,
  Sidebar,
  MainContent,
  SearchBar,
  RecipeGrid,
  UserInfo,
} from "./user.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import RecipeContainer3 from "../../components/recipe-containers/Recipe3.components";
import Loader from "../../components/loader-spinner/LoaderIcon.component";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchUserRecipes } from "../../redux/userSlice";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";

const UserHome = () => {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { userRecipes, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && !userRecipes) {
      dispatch(fetchUserRecipes(user.sub));
    }
  }, [userRecipes, user, dispatch]);

  const searchUserRecipes = () => {
    console.log("Searching for recipes:", searchQuery);
  };

  if (error) {
    return <h3>An error has occurred</h3>;
  }
  if (isLoading || authLoading) {
    return <Loader />;
  }

  return (
    <UserContainer>
      <Sidebar>
        <UserInfo>
          <img
            src={user?.picture || "default-profile.png"}
            alt="User Profile"
            className="profile-img"
          />
          <h2>{user?.nickname}</h2>
        </UserInfo>
        <div className="options">
          <PrimaryButton
            functionName={() => navigate("/user/create")}
            span="Create Recipe"
          />
          <PrimaryButton functionName={() => navigate()} span="Edit Comments" />
        </div>
      </Sidebar>
      <MainContent>
        <SearchBar>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a recipe"
          />
          <PrimaryButton span="Search" functionName={searchUserRecipes} />
        </SearchBar>
        <RecipeGrid>
          {userRecipes?.map((recipe) => (
            <RecipeContainer3 key={recipe._id} recipe={recipe} />
          ))}
        </RecipeGrid>
      </MainContent>
    </UserContainer>
  );
};

export default UserHome;

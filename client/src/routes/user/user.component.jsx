import {
  UserContainer,
  UserRecipesContainer,
  UserContentContainer,
  UserOptions,
  UserInfo,
} from "./User.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import RecipeContainer3 from "../../components/recipe/Recipe3.component";
import Loader from "../../components/loader/Loader.component";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../../images/Profile1.jpg";
import React, { useEffect, useState } from "react";
import { fetchUserRecipes } from "../../redux/userSlice";

const UserHome = () => {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth0();
  const dispatch = useDispatch();
  const [userLoading, setUserLoading] = useState(true);

  const { userRecipes, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && !userRecipes) {
      dispatch(fetchUserRecipes(user.sub));
    } else if (!authLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [userRecipes, user, isAuthenticated, dispatch]);
  useEffect(() => {
    if (!authLoading && user) {
      setUserLoading(false);
    }
  }, [authLoading, user]);

  const navigate = useNavigate();
  const buttonItems = [
    {
      id: 1,
      title: "Create a recipe",
      color: "hsla(349, 43%, 66%, 0.2)",
      action: "createRecipe",
    },
    {
      id: 2,
      title: "Edit comments",
      color: "hsla(349, 43%, 66%, 0.4)",
      action: "editComments",
    },
    // {id: 3, title: 'Not in use', color: 'hsla(349, 43%, 66%, 0.6)', action: ''},
    // {id: 4, title: 'Not in use', color: 'hsla(349, 43%, 66%, 0.8)', action: ''}
  ];

  const switchFunction = (action) => {
    switch (action) {
      case "createRecipe":
        navigate("/user/create");
        break;
      case "editComments":
        navigate("/user/comments");
        break;
      default:
        return;
    }
  };

  if (error) {
    return <h3>An error has occured</h3>;
  }
  if (isLoading || userLoading) {
    return <Loader />;
  }

  return (
    <UserContainer>
      {isAuthenticated ? (
        <>
          <UserInfo>
            <img
              src={Profile}
              alt="User Profile"
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
              }}
            />
            <h2>Welcome {user?.nickname}</h2>
          </UserInfo>
          <UserContentContainer>
            <UserOptions>
              {buttonItems.map((button) => {
                return (
                  <button
                    key={button.id}
                    onClick={() => switchFunction(button?.action)}
                    style={{
                      backgroundColor: `${button.color}`,
                      border: `${button.color}`,
                    }}
                    className="box boxShadowHover"
                  >
                    <h4
                      style={{ color: "#77340D" }}
                      onClick={() => switchFunction(button.action)}
                    >
                      {button.title}
                    </h4>
                  </button>
                );
              })}
            </UserOptions>
            <UserRecipesContainer className="scrollBar">
              {userRecipes?.map((r) => {
                return <RecipeContainer3 key={r?._id} recipe={r} />;
              })}
            </UserRecipesContainer>
          </UserContentContainer>
        </>
      ) : (
        <h2>Login To View Your Recipes</h2>
      )}
    </UserContainer>
  );
};

export default UserHome;

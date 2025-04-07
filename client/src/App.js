import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//Pages:
import HomePage from "./routes/home/HomePage.component.jsx";
import NavBar from "./routes/navigation/NavComponent.component.jsx";
import FavoritesPage from "./routes/favorites/FavoritesPage.component.jsx";
import EditRecipe from "./routes/edit-recipe/EditRecipe.component.jsx";
import UserHome from "./routes/user/UserPage.component.jsx";
import SearchPage from "./routes/search/SearchPage.component.jsx";
import Footer from "./routes/footer/FooterComponent.component.jsx";
import SingleRecipeComponent from "./routes/single-recipe/SingleRecipePage.component.jsx";
import CreateRecipeForm from "./routes/create-recipe/CreateRecipe.component.jsx";
import BasePage from "./routes/base/BasePage.component.jsx";
import NotFound from "./routes/not-found/NotFoundPage.component.jsx";
import VisitorPage from "./routes/visit-profile/Visitor.component.jsx";
import UserComments from "./components/comments-template/user-comments/UserComments.component.js";
import UserBaseTemplate from "./routes/user/UserBaseTemplate.component.jsx";
// Authentication:
import { useAuth0 } from "@auth0/auth0-react";
// Redux:
import { fetchFavorites } from "./redux/favoritesSlice.js";
import { fetchUserRecipes } from "./redux/userSlice";
// import { fetchUserComments } from "./redux/userCommentsSlice.js";
import { store } from "./redux/store.js";
// Colours:
import { theme } from "./visuals/colors.jsx";
// hi
function App() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    store.dispatch(fetchUserRecipes(user.sub));
    //store.dispatch(fetchUserComments(user.sub));
    store.dispatch(fetchFavorites(user.sub));
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<BasePage />}>
              <Route index element={<HomePage />} />
              <Route path="user/:id" element={<VisitorPage />} />
              <Route path="recipe">
                <Route path=":id" element={<SingleRecipeComponent />} />
              </Route>
              <Route path="user" element={<UserBaseTemplate />}>
                <Route index path="home" element={<UserHome />} />
                <Route path="create" element={<CreateRecipeForm />} />
                <Route path="edit/:id" element={<EditRecipe />} />
                <Route path="comments" element={<UserComments />} />
              </Route>
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

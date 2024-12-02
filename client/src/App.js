import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
//Pages:
import HomePage from "./routes/home/Home.component.jsx";
import NavBar from "./routes/navigation/Nav.component.jsx";
import FavoritesPage from './routes/favorites/Favorites.component.jsx';
import EditRecipe from './routes/editRecipe/EditRecipe.component.jsx';
import UserHome from './routes/user/User.component.jsx';
import SearchPage from './routes/search/Search.component.jsx';
import Footer from './routes/footer/Footer.component.jsx';
import SingleRecipeComponent from './components/SingleRecipe/SingleRecipe.component.jsx';
import CreateRecipeForm from './routes/createRecipe/CreateRecipe.component.jsx';
import UserBase from './routes/user/UserBase.component.jsx';
import BasePage from './routes/base/Base.component.jsx';
import NotFound from './routes/notFound/NotFound.component.jsx';
import VisitorPage from './routes/visitProfile/Visitor.component.jsx';
import UserComments from './components/Comments/userComments/UserComments.component.jsx';
// Authentication:
import {useAuth0} from '@auth0/auth0-react';
// Redux:
import { fetchFavorites } from './redux/favoritesSlice.js';
import { fetchUserRecipes } from './redux/userSlice';
import { fetchUserComments } from './redux/userCommentsSlice.js';
import { store } from './redux/store.js';
// Colours:
import {theme} from './visuals/colors.jsx';
 
function App() {
  const {user, isAuthenticated} = useAuth0(); 
  if(isAuthenticated){
    store.dispatch(fetchUserRecipes(user.sub));
    store.dispatch(fetchUserComments(user.sub));
    store.dispatch(fetchFavorites(user.sub));
    console.log('STORE', store.getState())
  }

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <NavBar  />
       <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path="user/:id" element={<VisitorPage />} />
            <Route path="recipe">
            <Route path=':id' element={<SingleRecipeComponent />} />
            </Route>
            <Route path='user' element={<UserBase />}>
              <Route index path="home" element={<UserHome />} />
              <Route path='create' element={<CreateRecipeForm />}/>
              <Route path="edit/:id" element={<EditRecipe />}/>
              <Route path="comments" element={<UserComments/>} />
          </Route>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='search' element={<SearchPage />} />
          {/* <Route path='signin' element={<AuthComponent />} /> */}
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
       <Footer />
     </BrowserRouter>
     </ThemeProvider>
    </div>
  );
}

export default App;

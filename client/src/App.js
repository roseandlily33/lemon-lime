import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
//Pages:
import HomePage from "./routes/home/home.component";
import NavBar from "./routes/navigation/nav.component";
import FavoritesPage from './routes/favorites/favorites.component';
import EditRecipe from './routes/user/editRecipe/edit.component.jsx';
import UserHome from './routes/user/user.component';
import SearchPage from './routes/search/search.component';
import Footer from './routes/footer/footer.component';
import SingleRecipeComponent from './components/SingleRecipe/singleRecipe.component';
import CreateRecipe from './routes/user/createRecipe/userRecipe.component';
import UserBase from './routes/user/userBase.component.jsx';
import BasePage from './routes/base/base.component';
import NotFound from './routes/notFound/notFound.component.jsx';
import VisitorPage from './routes/visitProfile/visitor.component.jsx';
import UserComments from './components/Comments/userComments/userComments.component.jsx';
import {useAuth0} from '@auth0/auth0-react';
import { fetchFavorites } from './redux/favoritesSlice.js';
import { fetchUserRecipes } from './redux/userSlice';
import { fetchUserComments } from './redux/userCommentsSlice.js';
import { store } from './redux/store.js';

const theme = {
  colors: {
      white: 'hsl(40, 23%, 97%)',
      offWhite: 'hsl(43, 13%, 90%)',
      yellow: 'hsl(48, 86%, 55%)',
      mediumYellow: 'hsl(48, 94%, 68%)',
      lightYellow: 'hsl(48, 100%, 77%)',
      green: 'hsl(79, 25%, 35%)',
      lightGreen: 'hsl(69, 37%, 55%)',
      mediumGreen: 'hsl(83, 70%, 34%)',
      orange: "#E3A445",
      darkOrange: 'hsl(29, 80%, 44%)',
      border: '3px solid var(--yellow)',
      grey: 'hsl(40, 15%, 80%)',
      grey2: 'hsl(39, 11%, 69%)',
      grey3: 'hsl(41, 8%, 61%)',
      darkGrey: 'hsl(0, 0%, 38%)',
      errorRed: 'hsl(354, 85%, 44%)',
      peachyPink: 'hsl(360, 83%, 62%)',
      lightPeachyPink: '#ffe5e5'
  }
}
 
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
              <Route path='create' element={<CreateRecipe />}/>
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

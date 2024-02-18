import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import HomePage from "./routes/home/home.component";
import NavBar from "./routes/navigation/nav.component";
import FavoritesPage from './routes/favorites/favorites.component';
import UserHome from './routes/user/user.component';
import SearchPage from './routes/search/search.component';
import BasePage from './routes/base/base.component';
import AuthComponent from './routes/authentication/auth.component';
import Footer from './routes/footer/footer.component';
import Recipe from './routes/recipe/recipe.component';
import CreateRecipe from './routes/user/createRecipe/userRecipe.component';
import useRecipes from './hooks/useRecipes';
import {httpCreateRecipe} from './hooks/requests';
import SingleRecipe from './components/SingleRecipe/singleRecipe.component';
import { UserContainer } from './routes/user/user.styles';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);
const theme = {
  colors: {
      white:' #F8F9F8',
      beige: '#C9B6A1',
      yellow: '#E8B634',
      lightYellow: '#FFE27C',
      green: '#758650',
      lightGreen: '#B5C267',
      orange: "#E3A547",
      grey: '#DEDEDE',
      border: '3px solid var(--yellow)'
  }
}

function App() {
  const [user, setUser] = useState();
  console.log('USER APP LEVEL', user);

  const {
    allRecipes,
    popularRecipes
  } = useRecipes();

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage allRecipes={allRecipes} popularRecipes={popularRecipes}/>} />
            <Route path="recipe">
            <Route path=':id' element={<SingleRecipe />} />
            </Route>
          <Route  path='user' element={<UserHome httpCreateRecipe={httpCreateRecipe}/>}>
          </Route>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='search' element={<SearchPage />} />
          <Route path='signin' element={<AuthComponent />} />
          </Route>
          {/* <Route path='*' element={<ErrorPage/>} /> */}
     </Routes>
     <Footer />
     </BrowserRouter>
     </ThemeProvider>
     </UserContext.Provider>
    </div>
  );
}

export default App;

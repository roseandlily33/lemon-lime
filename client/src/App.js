import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createContext} from 'react';
import useRecipes from './hooks/mainPageRecipes.js';
import {ThemeProvider} from 'styled-components';
//Pages:
import HomePage from "./routes/home/home.component";
import NavBar from "./routes/navigation/nav.component";
import FavoritesPage from './routes/favorites/favorites.component';
import EditRecipe from './routes/user/editRecipe/edit.component.jsx';
import UserHome from './routes/user/user.component';
import SearchPage from './routes/search/search.component';
import AuthComponent from './routes/authentication/auth.component';
import Footer from './routes/footer/footer.component';
import SingleRecipe from './components/SingleRecipe/singleRecipe.component';
import CreateRecipe from './routes/user/createRecipe/userRecipe.component';
import UserBase from './routes/user/userBase.component.jsx';
import BasePage from './routes/base/base.component';
import NotFound from './routes/notFound/notFound.component.jsx';
import UserComments from './components/Comments/userComments/userComments.component.jsx';

export const UserContext = createContext(null);
const theme = {
  colors: {
      white: 'hsl(40, 23%, 97%)',
      offWhite: 'hsl(43, 13%, 90%)',
      yellow: 'hsl(42, 87%, 55%)',
      mediumYellow: 'hsl(48, 94%, 68%)',
      lightYellow: ' hsl(48, 100%, 88%)',
      green: 'hsl(83, 74%, 27%)',
      lightGreen: 'hsl(83, 64%, 42%)',
      mediumGreen: 'hsl(83, 70%, 34%)',
      orange: "#E3A547",
      border: '3px solid var(--yellow)',
      grey: 'hsl(40, 15%, 80%)',
      grey2: 'hsl(39, 11%, 69%)',
      grey3: 'hsl(41, 8%, 61%)',
      darkGrey: 'hsl(0, 0%, 38%)'
  }
}
function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <NavBar  />
       <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage />} />
            <Route path="recipe">
            <Route path=':id' element={<SingleRecipe />} />
            </Route>
            <Route path='user' element={<UserBase />}>
              <Route index path="home" element={<UserHome />} />
              <Route path='create' element={<CreateRecipe />}/>
              <Route path="edit/:id" element={<EditRecipe />}/>
              <Route path="/user/comments" element={<UserComments/>}/>
          </Route>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='search' element={<SearchPage />} />
          <Route path='signin' element={<AuthComponent />} />
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

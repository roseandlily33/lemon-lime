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
  const {
    allRecipes,
    popularRecipes
  } = useRecipes();

  //const [user, setUser] = useState();
  //let cookies = localStorage.getItem('jwt');
  // console.log('TOP LEVEL COOKIES', cookies);
  // console.log('TOP LEVEL User', user);
  // useEffect(() => {
  //     const verifyCookie = async () => {
  //       console.log('Cookies', cookies.token);
  //       if (!cookies.token) {
  //         console.log('No cookies', cookies)
  //         //navigate("/signin");
  //       } 
  //       let myCookies = localStorage.getItem('jwt');
  //        const { data } = await axios.post(
  //         "http://localhost:8000/home",
  //         {...myCookies},
  //         { withCredentials: true }
  //       );
  //       console.log('Returned data from home page', data);
  //       const { status, user } = data;
  //       console.log('Status', status, 'User', user);
  //       setUser(user);
        
  //     };
  //     verifyCookie();
  //   },[cookies]);
   //<UserContext.Provider value={{user, setUser}}>
   //cookies={cookies}  user={user}
//</UserContext.Provider>
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <NavBar  />
       <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage allRecipes={allRecipes} popularRecipes={popularRecipes}/>} />
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

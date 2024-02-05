import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./routes/home/home.component";
import NavBar from "./routes/navigation/nav.component";
import FavoritesPage from './routes/favorites/favorites.component';
import UserHome from './routes/user/user.component';
import SearchPage from './routes/search/search.component';
import BasePage from './routes/base/base.component';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar/>
     <Routes>
        <Route path='/' element={<BasePage />}>
          <Route path='home' element={<HomePage />} />
          <Route path='user' element={<UserHome />}/>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='search' element={<SearchPage />} />

        </Route>

     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;

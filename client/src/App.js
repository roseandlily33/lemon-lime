import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import HomePage from "./routes/home/home.component";
import NavBar from "./routes/navigation/nav.component";
import FavoritesPage from './routes/favorites/favorites.component';
import UserHome from './routes/user/user.component';
import SearchPage from './routes/search/search.component';
import BasePage from './routes/base/base.component';
import Footer from './routes/footer/footer.component';

const theme = {
  colors: {
      white:' #F8F9F8',
      beige: '#C9B6A1',
      yellow: '#E8B634',
      lightYellow: '#FFE27C',
      green: '#758650',
      lightGreen: '#B5C267',
      orange: "#E3A547",
      border: '5px solid var(--yellow)'
  }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
     <BrowserRouter>
      <NavBar/>
     <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path='user' element={<UserHome />}/>
          <Route path='favorites' element={<FavoritesPage />}/>
          <Route path='search' element={<SearchPage />} />
        </Route>
     </Routes>
     <Footer />
     </BrowserRouter>
     </ThemeProvider>
    </div>
  );
}

export default App;

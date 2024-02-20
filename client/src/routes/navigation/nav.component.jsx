import Logo from '../../images/Logo2.png';
import { Navbar, RightNav} from './nav.styles';
import heart from '../../images/icons/icons8-heart-material-outlined/icons8-heart-24.png';
import userIcon from '../../images/icons/icons8-user-windows/icons8-user-32.png';
import search from '../../images/icons/search-icon/icons8-search-24.png';
import login from '../../images/icons/icons8-login-puffy/icons8-login-32.png';
import logout from '../../images/icons/icons8-logout-material-filled/icons8-logout-24.png';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

const NavBar = () => {
  //{cookies, user}
  const {loginWithRedirect, logout, user, isLoading, isAuthenticated} = useAuth0();
  console.log('USER', user);
  console.log('LOADING', isLoading);
  console.log('IS AUTH', isAuthenticated);

    return (
        <Navbar>
            <NavLink to="/"><img src={Logo} alt="lemon lime logo" title="home" /></NavLink>
            <RightNav>
                <NavLink to='search'><img src={search} title="search" alt="search" /></NavLink>
                {isAuthenticated ?  
                <>
                <NavLink to='favorites'><img src={heart} title="favourites" alt="favourites" /></NavLink>
                <NavLink to='user'><img src={userIcon} title="user page" alt="user page" /></NavLink>
                <button onClick={() =>logout()}>Logout</button>
                </>
               :
                 <button onClick={() => loginWithRedirect()}>Login</button>
                 }
            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
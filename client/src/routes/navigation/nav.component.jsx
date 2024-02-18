import Logo from '../../images/Logo2.png';
import { Navbar, RightNav, SearchDiv } from './nav.styles';
import heart from '../../images/icons/icons8-heart-material-outlined/icons8-heart-24.png';
import user from '../../images/icons/icons8-user-windows/icons8-user-32.png';
import search from '../../images/icons/search-icon/icons8-search-24.png';
import login from '../../images/icons/icons8-login-puffy/icons8-login-32.png';
import logout from '../../images/icons/icons8-logout-material-filled/icons8-logout-24.png';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // const Logout = () => {
    //     removeCookie("token");
    //     navigate("/signup");
    //   };
    return (
        <Navbar>
            <NavLink to="/"><img src={Logo} alt="lemon lime logo" /></NavLink>
            <RightNav>
                <NavLink to='search'><img src={search} alt="search" /></NavLink>
                <NavLink to='favorites'><img src={heart} alt="favourites" /></NavLink>
                <NavLink to='user'><img src={user} alt="user page" /></NavLink>
                { !loggedIn ? 
                    <NavLink to='signin' onClick={() => setLoggedIn(true)}><img src={login} alt="sign in page" /></NavLink> :
                    <NavLink to='/' onClick={() => setLoggedIn(false)}><img src={logout} alt="logout" /></NavLink>
                }
            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
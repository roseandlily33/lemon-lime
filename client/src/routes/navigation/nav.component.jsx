import Logo from '../../images/Logo2.png';
import { Navbar, RightNav} from './nav.styles';
import heart from '../../images/icons/icons8-heart-material-outlined/icons8-heart-24.png';
import userIcon from '../../images/icons/icons8-user-windows/icons8-user-32.png';
import search from '../../images/icons/search-icon/icons8-search-24.png';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import { Turn as Hamburger } from 'hamburger-react'

const NavBar = () => {

  const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
  const [isOpen, setOpen] = useState(false)
  const isMobile = window.innerWidth < 900;

    return (
        <Navbar>
            <NavLink to="/"><img src={Logo} alt="lemon lime logo" title="home" /></NavLink>
            <RightNav>
              { isAuthenticated ? 
                  <>
              {isMobile ? 
              <>
              {isOpen ? 
                <> 
                 <Hamburger direction="right" size={28} color="#ca4a81" toggled={isOpen} toggle={setOpen} />
                 <NavLink to='search'><img src={search} title="search" alt="search" /></NavLink>
                <NavLink to='favorites'><img src={heart} title="favourites" alt="favourites" /></NavLink>
              <NavLink to='user/home'><img src={userIcon} title="user page" alt="user page" /></NavLink>
              <button onClick={() =>logout()}>Logout</button>
                </>
              :  <Hamburger direction="right" size={28} color="#ca4a81" toggled={isOpen} toggle={setOpen} />}
              </>
              : 
              <> 
               <NavLink to='search'><img src={search} title="search" alt="search" /></NavLink>
              <NavLink to='favorites'><img src={heart} title="favourites" alt="favourites" /></NavLink>
              <NavLink to='user/home'><img src={userIcon} title="user page" alt="user page" /></NavLink>
              <button onClick={() =>logout()}>Logout</button>
              </>
              
              }
              </> 
              : 
              <button onClick={() => loginWithRedirect()}>Login</button>
              }



               
            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
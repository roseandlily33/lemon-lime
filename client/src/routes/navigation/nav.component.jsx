import Logo from '../../images/Logo2.png';
import { Navbar, RightNav} from './nav.styles';
import userIcon from '../../images/icons/user.svg';
import search from '../../images/icons/search.svg';
import heart from '../../images/icons/heart.svg';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import { Turn as Hamburger } from 'hamburger-react';

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
                 <NavLink to='search'><img src={search} title="search" alt="search" height="20" width="20"/></NavLink>
                <NavLink to='favorites'><img src={heart} title="favourites" alt="favourites" height="20" width="20"/></NavLink>
              <NavLink to='user/home'><img src={userIcon} title="user page" alt="user page" height="20" width="20"/></NavLink>
              <button onClick={() =>logout()}>Logout</button>
                </>
              :  <Hamburger direction="right" size={28} color="#ca4a81" toggled={isOpen} toggle={setOpen} />}
              </>
              : 
              <> 
               <NavLink to='search'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-search"><circle cx="10" cy="10" r="7" class="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
               </NavLink>
              <NavLink to='favorites'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-thumbs-up"><path class="primary" d="M13 4.8l2.92 6.8a1 1 0 0 1 .08.4v8a2 2 0 0 1-2 2H8a4.28 4.28 0 0 1-3.7-2.45L2.07 14.4A1 1 0 0 1 2 14v-2a3 3 0 0 1 3-3h4V5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v1.8z"/><rect width="4" height="11" x="18" y="11" class="secondary" rx="1"/></svg>

              </NavLink>
              <NavLink to='user/home'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30"  class="icon-user"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>

              </NavLink>
              <button onClick={() =>logout()}>Logout</button>
              </>
              
              }
              </> 
              : 
              <>
              <NavLink to='search'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-search"><circle cx="10" cy="10" r="7" class="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
               </NavLink>
              <button onClick={() => loginWithRedirect()}>Login</button>
              </>
              }

            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
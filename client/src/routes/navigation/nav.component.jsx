import Logo from '../../images/Lemon - Lime.svg';
import { Navbar, RightNav} from './nav.styles';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import { Turn as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
  const [isOpen, setOpen] = useState(false)
  const isMobile = window.innerWidth < 900;

    return (
        <Navbar className='boxShadow'>
            <NavLink to="/"><img className="logoImage" src={Logo} alt="lemon lime logo" title="home" style={{marginInline: '2rem', marginBlock: '1rem'}}/></NavLink>
            <RightNav>
              {/* Checks if it is a mobile devices depending on screen size */}
             {isMobile ?
                <>
                {isOpen ?
                <>
                {/* Mobile and open, dont put anything here */}
                {isAuthenticated ? 
                  <div style={{display: 'flex',gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                  <NavLink to='search' onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-search"><circle cx="10" cy="10" r="7" className="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </NavLink>
               <NavLink to='favorites' onClick={() => setOpen(false)}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-thumbs-up">
               <path className="primary" d="M13 4.8l2.92 6.8a1 1 0 0 1 .08.4v8a2 2 0 0 1-2 2H8a4.28 4.28 0 0 1-3.7-2.45L2.07 14.4A1 1 0 0 1 2 14v-2a3 3 0 0 1 3-3h4V5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v1.8z"/>
               <rect width="4" height="11" x="18" y="11" className="secondary" rx="1"/></svg>
               </NavLink>
               <NavLink to='user/home' onClick={() => setOpen(false)} >
               <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-user">
                 <path className="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
               <path className="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>
               </NavLink>
               <button onClick={() =>logout()}>Logout</button>
                  </div>
                  : 
                  <>
                  <Hamburger direction="right" size={28} color="hsl(0, 71%, 66%)" toggled={isOpen} toggle={setOpen} />
                  </>
              }               
                </>       
                  : 
                <>
                {/* mobile and not open */}
                <Hamburger direction="right" size={28} color="hsl(0, 71%, 66%)" toggled={isOpen} toggle={setOpen} />
                </>
              }
                </>
             :
              <>
              {/* Isn't mobile and checks for authenticated */}
             {isAuthenticated ? 
             <>
             {/* Isn't mobile and is authenticated */}
              <NavLink to='search'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="icon icon-search"><circle cx="10" cy="10" r="7" className="primary"/><path className="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </NavLink>
               <NavLink to='favorites'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-thumbs-up">
               <path class="primary" d="M13 4.8l2.92 6.8a1 1 0 0 1 .08.4v8a2 2 0 0 1-2 2H8a4.28 4.28 0 0 1-3.7-2.45L2.07 14.4A1 1 0 0 1 2 14v-2a3 3 0 0 1 3-3h4V5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v1.8z"/>
               <rect width="4" height="11" x="18" y="11" className="secondary" rx="1"/></svg>
               </NavLink>
               <NavLink to='user/home' onClick={() => setOpen(false)} >
               <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-user">
                 <path className="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
               <path className="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>
               </NavLink>
               <button onClick={() =>logout()}>Logout</button>
             </>
             :
              <>
              {/* Isn't mobile and isn't authenticated */}
              <NavLink to='search'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-search"><circle cx="10" cy="10" r="7" className="primary"/><path className="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </NavLink>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </>
          
              }
              </>
            
            }

            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
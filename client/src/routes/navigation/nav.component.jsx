import Logo from '../../images/Logo2.png';
import { Navbar, RightNav, SearchDiv } from './nav.styles';
import heart from '../../images/icons/icons8-heart-material-outlined/icons8-heart-24.png';
import user from '../../images/icons/icons8-user-windows/icons8-user-32.png';
import search from '../../images/icons/search-icon/icons8-search-24.png';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar>
            <NavLink to="/"><img src={Logo} alt="lemon lime logo" /></NavLink>
            <RightNav>
                <NavLink to='search'><img src={search} alt="search" /></NavLink>
                <NavLink to='favorites'><img src={heart} alt="favourites" /></NavLink>
                <NavLink to='user'><img src={user} alt="user page" /></NavLink>
            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
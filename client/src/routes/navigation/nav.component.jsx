import Logo from '../../images/Logo2.png';
import { Navbar, RightNav, SearchDiv } from './nav.styles';
import heart from '../../images/icons/icons8-heart-material-outlined/icons8-heart-24.png';
import user from '../../images/icons/icons8-user-windows/icons8-user-32.png';
import search from '../../images/icons/search-icon/icons8-search-24.png';
import login from '../../images/icons/icons8-login-puffy/icons8-login-32.png';
import logout from '../../images/icons/icons8-logout-material-filled/icons8-logout-24.png';
import {NavLink} from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
const NavBar = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
          console.log('Cookies', cookies.token);
          if (!cookies.token) {
            navigate("/signin");
          }
          const { data } = await axios.post(
            "http://localhost:8000",
            {},
            { withCredentials: true }
          );
          console.log('Returned data from home page', data);
          const { status, user } = data;
          console.log('Status', status, 'User', user);
          setUsername(user);
          return status
            ? toast(`Hello ${user}`, {
                position: "top-right",
              })
            : (removeCookie("token"), navigate("/signin"));
        };
        verifyCookie();
      }, [cookies, navigate, removeCookie]);
      const Logout = () => {
        removeCookie("token");
        navigate("/signup");
      };
    // const cookies = true;
    // const username = 'me';
    // const Logout = () => {console.log('me')}
    return (
        <Navbar>
            <NavLink to="/"><img src={Logo} alt="lemon lime logo" title="home" /></NavLink>
            <RightNav>
            <h1>Welcome {username}</h1>
                <NavLink to='search'><img src={search} title="search" alt="search" /></NavLink>
                <NavLink to='favorites'><img src={heart} title="favourites" alt="favourites" /></NavLink>
                <NavLink to='user'><img src={user} title="user page" alt="user page" /></NavLink>
                { cookies ? 
                    <NavLink to='signin'><img src={login} title="sign in page" alt="sign in page" /></NavLink> :
                    <NavLink to='/' onClick={Logout}><img src={logout} title="logout" alt="logout" /></NavLink>
                }
            </RightNav>
        </Navbar>
      );
}
 
export default NavBar;
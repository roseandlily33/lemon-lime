import Logo from "../../images/Lemon - Lime.svg";
import { Navbar, RightNav } from "./nav.styles";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Turn as Hamburger } from "hamburger-react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";
import SearchIcon from "../../images/icons/SearchIcon.icon";
import ThumbsUpIcon from "../../images/icons/ThumbsUpIcon.icon";
import UserIcon from "../../images/icons/UserIcon.icon";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isOpen, setOpen] = useState(false);
  const isMobile = window.innerWidth < 900;

  return (
    <Navbar className="boxShadow">
      <NavLink to="/">
        <img
          className="logoImage"
          src={Logo}
          alt="lemon lime logo"
          title="home"
          style={{ marginInline: "2rem", marginBlock: "1rem" }}
        />
      </NavLink>
      <RightNav>
        {/* Checks if it is a mobile devices depending on screen size */}
        {isMobile ? (
          <>
            {isOpen ? (
              <>
                {/* Mobile and open, dont put anything here */}
                {isAuthenticated ? (
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <NavLink to="search" onClick={() => setOpen(false)}>
                      <SearchIcon />
                    </NavLink>
                    <NavLink to="favorites" onClick={() => setOpen(false)}>
                      <ThumbsUpIcon />
                    </NavLink>
                    <NavLink to="user/home" onClick={() => setOpen(false)}>
                      <UserIcon />
                    </NavLink>
                    <PrimaryButton
                      functionName={() => logout()}
                      span="Logout"
                    />
                  </div>
                ) : (
                  <>
                    <Hamburger
                      direction="right"
                      size={28}
                      color="hsl(0, 71%, 66%)"
                      toggled={isOpen}
                      toggle={setOpen}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {/* mobile and not open */}
                <Hamburger
                  direction="right"
                  size={28}
                  color="hsl(0, 71%, 66%)"
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </>
            )}
          </>
        ) : (
          <>
            {/* Isn't mobile and checks for authenticated */}
            {isAuthenticated ? (
              <>
                {/* Isn't mobile and is authenticated */}
                <NavLink to="search">
                  <SearchIcon />
                </NavLink>
                <NavLink to="favorites">
                  <ThumbsUpIcon />
                </NavLink>
                <NavLink to="user/home" onClick={() => setOpen(false)}>
                  <UserIcon />
                </NavLink>
                <PrimaryButton functionName={() => logout()} span="Logout" />
              </>
            ) : (
              <>
                {/* Isn't mobile and isn't authenticated */}
                <NavLink to="search">
                  <SearchIcon />
                </NavLink>
                <PrimaryButton
                  functionName={() => loginWithRedirect()}
                  span="Login"
                />
              </>
            )}
          </>
        )}
      </RightNav>
    </Navbar>
  );
};

export default NavBar;

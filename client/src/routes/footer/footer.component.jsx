import { FooterContainer } from "./footer.styles";
import Logo from '../../images/Logo2.png';
const Footer = () => {
    return (
        <FooterContainer>
            <img src={Logo} alt="Lemon Lime Logo" />
            <h4>Home</h4>
            <h4>Login</h4>
            <h4>Favorite Recipes</h4>
            <h4>User Home Page</h4>
        </FooterContainer>
      );
}
 
export default Footer;
import { FooterContainer } from "./Footer.styles";
import Logo from '../../images/Lemon - Lime.svg';


const Footer = () => {
    return (
        <FooterContainer>
            <img src={Logo} alt="Lemon Lime Logo" className="logoImage" style={{marginInline: '2rem'}}/>
          
        </FooterContainer>
      );
}
 
export default Footer;
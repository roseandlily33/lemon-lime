import {Outlet} from 'react-router-dom'
import { MainContainer } from './Base.styles';
const BasePage = () => {
    return ( 
        <MainContainer>
        <Outlet />
        </MainContainer>
     );
}
 
export default BasePage;
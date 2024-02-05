import {Outlet} from 'react-router-dom'
import { MainContainer } from './base.styles';
const BasePage = () => {
    return ( 
        <MainContainer>
        <Outlet />
        </MainContainer>
     );
}
 
export default BasePage;
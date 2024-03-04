import FilledHeart from '../../images/icons/icons8-heart-material-sharp/icons8-heart-24.png';
import UnfilledHeart from '../../images/icons/icons8-heart-material-outlined (2)/icons8-heart-24.png'
import { FavoriteDiv } from './favorites.styles';
const Heart = () => {
    return ( 
        <FavoriteDiv>
        <img src={UnfilledHeart} alt="Not Favourited" />
        </FavoriteDiv>
     );
}
 
export default Heart;
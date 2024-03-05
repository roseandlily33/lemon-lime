import UnfilledHeart from '../../images/icons/icons8-heart-material-outlined (2)/icons8-heart-24.png'
import { FavoriteDiv } from './favorites.styles';
import { httpAddFavoriteRecipe } from '../../hooks/userRequests';
import {useAuth0} from '@auth0/auth0-react';


const Heart = ({id}) => {
    const {user} = useAuth0();
    const addFavorite = async(id) => {
        await httpAddFavoriteRecipe(user.sub, id);
    }

    return ( 
        <FavoriteDiv>
        <img src={UnfilledHeart} alt="Click to add favorite" onClick={() => addFavorite(id)}/>
        </FavoriteDiv>
     );
}
 
export default Heart;
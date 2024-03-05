import FilledHeart from '../../images/icons/icons8-heart-material-sharp/icons8-heart-24.png';
import UnfilledHeart from '../../images/icons/icons8-heart-material-outlined (2)/icons8-heart-24.png'
import { FavoriteDiv } from './favorites.styles';
import { httpAddFavoriteRecipe } from '../../hooks/userRequests';
import {useAuth0} from '@auth0/auth0-react';

const Heart = ({id}) => {
    const {user} = useAuth0();

        const addFavorite = async(id) => {
        console.log('Adding this recipe to favorites ', user.sub, id);
        let addingRecipe = await httpAddFavoriteRecipe(user.sub, id);
        console.log('Addeded Recipe?', addingRecipe);
        }


    return ( 
        <FavoriteDiv>
        <img src={UnfilledHeart} alt="Not Favourited" onClick={() => addFavorite(id)} />
        </FavoriteDiv>
     );
}
 
export default Heart;
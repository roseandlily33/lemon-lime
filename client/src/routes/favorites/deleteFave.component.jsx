import FilledHeart from '../../images/icons/icons8-heart-material-sharp/icons8-heart-24.png';
import { FavoriteDiv } from './favorites.styles';
//import {useAuth0} from '@auth0/auth0-react';

const DeleteHeart = ({id}) => {
    //const {user} = useAuth0();
    const deleteFavorite = async(id) => {
        console.log('Deleting recipe', id)
       // await httpDeleteFavoriteRecipe(user.sub, id);
    }
    return ( 
        <FavoriteDiv>
        <img src={FilledHeart} alt="Click to add favorite" onClick={() => deleteFavorite(id)}/>
        </FavoriteDiv>
         );
}
 
export default DeleteHeart;
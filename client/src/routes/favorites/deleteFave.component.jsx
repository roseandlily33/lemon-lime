import FilledHeart from '../../images/icons/icons8-heart-material-sharp/icons8-heart-24.png';
import { FavoriteDiv } from './favorites.styles';
import {useAuth0} from '@auth0/auth0-react';
import { httpDeleteFavoriteRecipe } from '../../hooks/userRequests';

const DeleteHeart = ({id}) => {
    const {user} = useAuth0();
    const deleteFavorite = async(id) => {
        console.log('Deleting recipe', id)
       let res = await httpDeleteFavoriteRecipe(user.sub, id);
       if(res.ok){
        alert('Recipe has been removed from your favorites')
       } else {
        alert('Recipe has not been removed from your favorites')
       }
    }
    return ( 
        <FavoriteDiv>
        <img src={FilledHeart} alt="Click to add favorite" onClick={() => deleteFavorite(id)}/>
        </FavoriteDiv>
         );
}
 
export default DeleteHeart;
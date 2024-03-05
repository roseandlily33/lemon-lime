import UnfilledHeart from '../../images/icons/icons8-heart-material-outlined (2)/icons8-heart-24.png'
import { FavoritesContainer } from '../../routes/favorites/favorites.styles';
import { httpAddFavoriteRecipe } from '../../hooks/userRequests';
import {useAuth0} from '@auth0/auth0-react';


const AddHeart = ({id}) => {
    const {user} = useAuth0();
    const addFavorite = async(id) => {
       let res =  await httpAddFavoriteRecipe(user.sub, id);
       if(res.ok){
        alert('Recipes has been added to your favorites')
       } else {
        alert ('Recipe has not been added to your favorites ')
       }
    }

    return ( 
        <FavoritesContainer>
        <img src={UnfilledHeart} alt="Click to add favorite" onClick={() => addFavorite(id)}/>
        </FavoritesContainer>
     );
}
 
export default AddHeart;

import { FavoritesContainer } from '../../routes/favorites/favorites.styles';
//import { httpAddFavoriteRecipe } from '../../hooks/userRequests';
import {useAuth0} from '@auth0/auth0-react';


const AddHeart = ({id}) => {
    const {user} = useAuth0();
   //  const addFavorite = async(id) => {
   //     let res =  await httpAddFavoriteRecipe(user.sub, id);
   //     if(res.ok){
   //      alert('Recipes has been added to your favorites')
   //     } else {
   //      alert ('Recipe has not been added to your favorites ')
   //     }
   //  }

    return ( 
        <FavoritesContainer>
       
        </FavoritesContainer>
     );
}
 
export default AddHeart;
import { httpDeleteRecipe } from "../../../hooks/requests";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';

const DeleteRecipe = ({id}) => {
    const navigate = useNavigate();
    const {user} = useAuth0();
    if(!user){
        navigate('/');
    }
    const deleteRecipe = async(id) => {
        window.confirm('Are you sure you want to delete this recipe?')
        let res = await httpDeleteRecipe(id);
        if(res.ok){
            alert('Recipe has been deleted');
            navigate('/user/home');
        } else {
            alert('Recipe has not been deleted')
        }
    }
    return ( <button onClick={() => deleteRecipe(id)}>Delete Recipe</button> );
}
 
export default DeleteRecipe;
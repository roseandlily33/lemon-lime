import { httpDeleteRecipe } from "../../../hooks/requests";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
// import Modal from "../../../components/Modal/modal.component";
// import { useState } from "react";

const DeleteRecipe = ({id}) => {
    //const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {user} = useAuth0();
    if(!user){
        navigate('/');
    }

    const deleteRecipe = async(id) => {
       let res = await httpDeleteRecipe(id);
        if(res.ok){
           alert('Recipe has been deleted')
           navigate('/user/home');
        } else {
           alert('Recipe has not been deleted')
        }
    }
    return ( <>
    {/* {isOpen && (
    <Modal onClose={() => {setIsOpen(false) && navigate('/')}}>
        <h3>Are you sure you would like to delete this recipe? </h3>
        {result}
        <button onClick={() => deleteRecipe(id)}></button>
    </Modal>
    )} */}
    <button onClick={() => {deleteRecipe(id)}}>Delete Recipe</button> 
    </>);
}
 
export default DeleteRecipe;
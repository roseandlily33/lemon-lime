import {useNavigate} from 'react-router-dom';
import { httpDeleteComment } from '../../../hooks/commentRequests';
const DeleteComment = ({id}) => {

    const navigate = useNavigate();

    const deleteComment = async() => {
        console.log('Deleted comment', id);
        let res = await httpDeleteComment(id);
         if(res.ok){
            alert('Comment has been deleted')
            navigate('/user/home');
         } else {
            alert('Comment has not been deleted')
         }
     }
    return ( 
        <button onClick={deleteComment}>Delete</button>
     );
}
 
export default DeleteComment;
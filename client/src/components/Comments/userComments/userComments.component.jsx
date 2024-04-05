import {httpGetUserComments} from '../../../hooks/userRequests';
import { UserCommentsContainer, SingleCommentDiv } from './userComments.styles';
import { useEffect, useState } from 'react';
import {useAuth0} from '@auth0/auth0-react';
import SingleComment from './singleComment.component';
import Loader from '../../Loader/loader.component';

const UserComments = () => {
    const {user} = useAuth0();
    
    const [comments, setComments] = useState();

    useEffect(() => {
        const fetchComments = async() => {
            const res = await httpGetUserComments(user.sub);
            setComments(res.comments); 
        }
        fetchComments();
    }, [user])

    return ( 
        <UserCommentsContainer>
            <div>
            <h2 style={{marginLeft: '1em', marginBlock: '1em'}}>User Comments</h2>
            </div>
            {!comments ? <Loader />
            :
            <div className='comments'>
            <SingleComment comments={comments} />
            </div>
            }
        </UserCommentsContainer>
     );
}
 
export default UserComments;
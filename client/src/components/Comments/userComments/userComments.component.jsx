import {httpGetUserComments} from '../../../hooks/userRequests';
import { useEffect, useState } from 'react';
import {useAuth0}
 from '@auth0/auth0-react';

const UserComments = () => {
    const {user} = useAuth0();
    
    const [comments, setComments] = useState();

    useEffect(() => {
        const fetchComments = async() => {
            const res = await httpGetUserComments(user.sub);
            setComments(res);
        }
        fetchComments();
    }, [user])

    console.log('Comments for user', comments);
    return ( <h1>User Comments</h1> );
}
 
export default UserComments;
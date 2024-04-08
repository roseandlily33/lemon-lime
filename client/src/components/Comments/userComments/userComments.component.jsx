import { UserCommentsContainer} from './userComments.styles';
import SingleComment from './singleComment.component';
import Loader from '../../Loader/loader.component';
import { useSelector } from 'react-redux';

const UserComments = () => {
    const {comments} = useSelector(state => state.userComments.userComments);

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
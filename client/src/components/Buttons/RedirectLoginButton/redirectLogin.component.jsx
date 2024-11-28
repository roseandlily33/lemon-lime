import {useAuth0} from '@auth0/auth0-react';

const RedirectLoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return ( 
    <>
        <p><span style={{fontStyle: 'normal', color: 'orange'}} onClick={() => loginWithRedirect()}>Login</span> to post a comment</p>
    </> 
    );
}
 
export default RedirectLoginButton;
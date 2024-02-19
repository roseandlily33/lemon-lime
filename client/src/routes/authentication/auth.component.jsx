import { AuthForm, AuthPage } from "./auth.styles";
import { useState } from "react";
import LoginComponent from "./login.component";
import SignUpComponent from "./signup.component";

const AuthComponent = () => {
    const [page, setPage]=useState(true);
    return (
    <AuthPage>
    <AuthForm>
        {page ? 
         <LoginComponent setPage={setPage}/>
            : 
        <SignUpComponent setPage={setPage} />
        }
    </AuthForm>
    </AuthPage>  
    
);
}
 
export default AuthComponent;
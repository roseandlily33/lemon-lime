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
         <LoginComponent setPage={setPage}  page={page}/>
            : 
        <SignUpComponent setPage={setPage} page={page}/>
        }
    </AuthForm>
    </AuthPage>  
    
);
}
 
export default AuthComponent;
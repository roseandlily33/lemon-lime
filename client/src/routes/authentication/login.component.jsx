import { useState } from "react";
import {EachInput} from './auth.styles';
const LoginComponent = ({setPage, page}) => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
    };
    return ( 
       <>
        <h3>Login</h3>
        <EachInput>
        <label>Email: </label>
            <input type="text" value={formState.email} name='email' onChange={handleChange} required/> 
            </EachInput>
            <EachInput>
            <label>Password:</label>
            <input type="password" value={formState.password} name='password' onChange={handleChange} required/> 
            </EachInput>
   
       <div>
       <button className="button">Submit</button>
       <div>
       <h4> Dont Have An Account?</h4>
       <button onClick={() => setPage(false)}>Sign Up</button>
       </div>
       </div>
       </>
     );
}
 
export default LoginComponent;
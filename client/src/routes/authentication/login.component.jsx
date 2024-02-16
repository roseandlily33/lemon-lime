import { useState } from "react";
import {EachInput} from './auth.styles';
import { httpLoginUser } from "../../hooks/requests";
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
       console.log('Submiting', formState);
       const response = await httpLoginUser(formState);
       const success = response.ok;
       if (success) {
        alert('Created User')
        } else {
          alert('User not created')
         }
        setFormState({
            email: '',
            password: '',
      });
        
    };
    return ( 
       <>
        <h3>Login</h3>
        <form onSubmit={handleFormSubmit}>
        <EachInput>
        <label>Email: </label>
            <input type="text" value={formState.email} name='email' onChange={handleChange} required/> 
            </EachInput>
            <EachInput>
            <label>Password:</label>
            <input type="password" value={formState.password} name='password' onChange={handleChange} required/> 
            </EachInput>
       <button className="button">Submit</button>
       </form>
       <div>
       <h4> Dont Have An Account?</h4>
       <button onClick={() => setPage(false)}>Sign Up</button>
       </div>
       </>
     );
}
 
export default LoginComponent;
import { useState } from "react";
import { EachInput } from "./auth.styles";
import { httpCreateNewUser } from "../../hooks/requests";
const SignUpComponent = ({setPage, page}) => {
    const [formState, setFormState] = useState({
        username: '',
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
        const response = await httpCreateNewUser(formState);
        const success = response.ok;
        if (success) {
         alert('Created User')
         } else {
           alert('User not created')
          }
         setFormState({
            username: '',
             email: '',
             password: '',
       });
       
    };
    return ( 
        <>
        <form onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
        <EachInput>
        <label>Username: </label>
            <input type="text" value={formState.username} name='username' onChange={handleChange} required />
            </EachInput>
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
            <h4>Have An Account?</h4>
         <button onClick={() => setPage(true)}>Log In</button>
         </div>
 
        </>
     );
}
 
export default SignUpComponent;
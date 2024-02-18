import { useState } from "react";
import {EachInput} from './auth.styles';
// import { httpLoginUser } from "../../hooks/requests";
import {useNavigate} from 'react-router-dom';

import axios from "axios";

const LoginComponent = ({setPage}) => {
    const navigate = useNavigate();
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
    //    const response = await httpLoginUser(formState);
    //    console.log("Login Page", response);
    //    if (response) {
    //      setUser(response);
    //      navigate('/')
    //     } else {
    //       alert('Not logged in');
    //      }
    //     setFormState({
    //         email: '',
    //         password: '',
    //   }); 
    try {
        const { data } = await axios.post(
          "http://localhost:8000/home/login",
          {
            ...formState,
          },
          { withCredentials: true }
        );
        console.log('SIGN UP ', data);
        const { success, message } = data;
        console.log('SIGN INSUCESS', success, 'Message', message)
        if (success) {
          alert(message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log('SIGN UP ERRO', error);
      }
     setFormState({
         name: '',
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
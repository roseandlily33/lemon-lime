import { useState } from "react";
import {EachInput} from './auth.styles';
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../App";
import RequiredInput from "../../components/Input/RequiredInput/requiredInput.component";
import axios from "axios";
import PrimaryButton from "../../components/Buttons/PrimaryButton/primaryButton.component";

const LoginComponent = ({setPage}) => {
  const {setUser} = useContext(UserContext);
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
    const newRoute = `${process.env.REACT_APP_API_URL}/home/login`;
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
          newRoute,
          {
            ...formState,
          },
          { withCredentials: true }
        );
        const { success, message, token, userData } = data;
        if (success) {
          alert(message);
          setUser(userData)
          localStorage.setItem("jwt", token);
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
          <RequiredInput label="Email:" value={formState.email} name='email' onChange={handleChange}/>
        </EachInput>
        <EachInput>
            <label>Password:</label>
            <input type="password" value={formState.password} name='password' onChange={handleChange} required/> 
            </EachInput>
        <PrimaryButton functionName={handleFormSubmit} span="Submit"/>
       </form>
       <div>
       <h4>Don't Have An Account?</h4>
       <PrimaryButton functionName={setPage(false)} span="Sign Up" />
       </div>
       </>
     );
}
 
export default LoginComponent;
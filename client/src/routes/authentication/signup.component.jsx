// import { useState } from "react";
// import { EachInput } from "./auth.styles";
// // import { httpCreateNewUser } from "../../hooks/requests";
// import {useNavigate} from 'react-router-dom';
// import axios from "axios";
// import { useContext } from "react";
// import { UserContext } from "../../App";

// const SignUpComponent = ({setPage}) => {
//   const {setUser} = useContext(UserContext);
//     const navigate = useNavigate();
//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         // const response = await httpCreateNewUser(formState);
//         // if (response.ok) {
//         //    navigate('/')
//         //  } else {
//         //    alert('User not created')
//         // }
//         try {
//             const { data } = await axios.post(
//               "http://localhost:10000/home/create",
//               {
//                 ...formState,
//               },
//               { withCredentials: true }
//             );
//             console.log('SIGN UP ', data);
//             const { success, message, token, userData } = data;
//             console.log('SIGN INSUCESS', success, 'Message', message)
//             if (success) {
//               alert(message);
//               setUser(userData);
//               localStorage.setItem("jwt", token);
//               setTimeout(() => {
//                 navigate("/");
//               }, 1000);
//             } else {
//               alert(message);
//             }
//           } catch (error) {
//             console.log('SIGN UP ERRO', error);
//           }
//          setFormState({
//              name: '',
//              email: '',
//              password: '',
//        });
//     };
//     return ( 
//         <>
//         <form onSubmit={handleFormSubmit}>
//         <h3>Sign Up</h3>
//         <EachInput>
//         <label>Name:</label>
//             <input type="text" value={formState.name} name='name' onChange={handleChange} required />
//             </EachInput>
//             <EachInput>
//             <label>Email: </label>
//             <input type="text" value={formState.email} name='email' onChange={handleChange} required/>
//             </EachInput>
//             <EachInput>
//             <label>Password:</label>
//             <input type="password" value={formState.password} name='password' onChange={handleChange} required/>
//             </EachInput>
//             <button className="button">Submit</button>
//             </form>
//             <div>
//             <h4>Have An Account?</h4>
//          <button onClick={() => setPage(true)}>Log In</button>
//          </div>
 
//         </>
//      );
// }
 
// export default SignUpComponent;
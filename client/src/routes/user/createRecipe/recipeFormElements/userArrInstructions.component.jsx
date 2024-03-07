import { useState } from "react";
const UserInstructionsArray = ({formValues, setFormValues}) => {
    const {instructions} = formValues;
    const newInstructions = Object.assign({}, instructions);
    const [newIns, setNewIns] = useState(newInstructions);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewIns({...newIns, [name]: value});
        setFormValues({...formValues, instructions: newIns});
    }
    return ( 
        <>
        {Object.entries(newIns).map((x, idx) => {
            return <>
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={x[0]}   
               value={x[1]}
               onChange={handleChange}
             />
            </>
        })}
        </>
     );
}
 
export default UserInstructionsArray;
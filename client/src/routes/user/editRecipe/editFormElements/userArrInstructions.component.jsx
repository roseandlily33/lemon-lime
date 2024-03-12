import { useState } from "react";
import { SingleMeaIngDiv } from "../../createRecipe/userRecipe.styles";
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
            return <SingleMeaIngDiv className="glass" key="i">
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={x[0]}   
               value={x[1]}
               onChange={handleChange}
             />
            </SingleMeaIngDiv>
        })}
        </>
     );
}
 
export default UserInstructionsArray;
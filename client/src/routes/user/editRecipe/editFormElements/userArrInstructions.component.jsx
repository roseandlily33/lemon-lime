import { useState } from "react";
import { SingleMeaIngDiv, BottomIngDiv } from "../../createRecipe/userRecipe.styles";

const UserInstructionsArray = ({formValues, setFormValues}) => {

    const {instructions} = formValues;
    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(0);
    const newInstructions = Object.assign({}, instructions);
    const [myIns, setMyIns] = useState(newInstructions);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMyIns({...myIns, [name]: value});
        const newInsValues = Object.values(myIns);
        setFormValues({...formValues, instructions: newInsValues});
    }
    
    const addCard = (e) => {
      e.preventDefault();
      console.log('Add e', e)
        if(maxSteps > count){
            setMyIns({...myIns, ing});
            console.log('My ins and incoming ins', myIns, ing)
            setIng('');
            setCount(count + 1);
        } else {
            alert('Cannot add more cards');
        }
    }
  
    const deleteInstruction = (e, deleteI) => {
      e.preventDefault();
      const newInstructions = instructions.filter((x, i) => {
        return i !== deleteI
      })
      setMyIns(newInstructions)
    }

    return ( 
        <>
        {Object.entries(myIns).map((x, idx) => {
            return <SingleMeaIngDiv className="glass" key="i">
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={x[0]}   
               value={x[1]}
               onChange={handleChange}
             />
             <button onClick={(e) => deleteInstruction(e, idx)}>Delete Instruction</button>
            </SingleMeaIngDiv>
        })}
         <BottomIngDiv>
       <input type="text" value={ing} onChange={(e) => setIng(e.target.value)} />
        <button onClick={addCard}>Add Instruction</button>
       </BottomIngDiv>
        </>
     );
}
 
export default UserInstructionsArray;
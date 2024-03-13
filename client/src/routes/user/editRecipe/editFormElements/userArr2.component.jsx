import { useState } from "react";
import { SingleMeaIngDiv, BottomIngDiv } from "../../createRecipe/userRecipe.styles";

const UserInstructionsArray2 = ({instructions, setInstructions}) => {
    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(0);
    const [myIns, setMyIns] = useState(instructions);
    const handleChange = (e) => {
        setMyIns([...myIns, ing])
        setInstructions([...instructions, myIns])
    }
    
    const addCard = (e) => {
      e.preventDefault();
        if(maxSteps > count){
            setMyIns([...myIns, ing]);
            setIng('');
            setCount(count + 1);
        } else {
            alert('Cannot add more cards');
        }
    }
  
    const deleteInstruction = (e, deleteI) => {
      e.preventDefault();
      const newInstructions = myIns.filter((x, i) => {
        return i !== deleteI
      });
      setMyIns(newInstructions)
      setInstructions(newInstructions)
    }

    return ( 
        <>
        {myIns.map((x, idx) => {
            return <SingleMeaIngDiv className="glass" key="i">
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={x}   
               value={x}
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
 
export default UserInstructionsArray2;
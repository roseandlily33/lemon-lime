import { useState} from "react";
import {SingleMeaIngDivEdit, BottomIngDivEdit, InstructionsEdit} from '../edit.styles';
import EachInstruction from "./EachInstruction.component";
import { v4 as uuidv4 } from 'uuid';

const UserInstructionsEdit = ({instructions, setInstructions, setMyInstructions}) => {

    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(instructions.length);
    
    const addCard = (e, ing) => {
      e.preventDefault();
        if(maxSteps > count){
           const newIns = {id: uuidv4(), ins: ing};
            setInstructions([...instructions, newIns]);
            setIng('');
            setCount(count + 1);
        } else {
            alert('Cannot add more cards');
        }
    }
  
    const deleteInstruction = (e, idx)=> {
      e.preventDefault();
      const newArray = instructions.filter(({id}) => {
        return idx !== id
      });
      setInstructions(newArray);
    }

    console.log('Instructions total', instructions)
    return ( 
        <>
        <InstructionsEdit className="glass">
        {instructions.map(({id, ins}, idx) => (
            <EachInstruction idx={idx} id={id} ins={ins} deleteInstruction={deleteInstruction} setInstructions={setInstructions} instructions={instructions} />
        ))}
        </InstructionsEdit>
         <BottomIngDivEdit>
            <input 
            type="text" 
            value={ing} 
            onChange={(e) => setIng(e.target.value)} />
              <button onClick={(e) => {
                addCard(e, ing)
              }}>Add Instruction</button>
            </BottomIngDivEdit>
        </>
     );
}
 
export default UserInstructionsEdit;
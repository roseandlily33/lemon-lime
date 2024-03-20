import { useState} from "react";
import {SingleMeaIngDivEdit, BottomIngDivEdit, InstructionsEdit} from '../edit.styles';
import EachInstruction from "./EachInstruction.component";
import { v4 as uuidv4 } from 'uuid';


const UserInstructionsEdit = ({instructions, setInstructions}) => {

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
  
    const deleteIngredient = (e, idx)=> {
      e.preventDefault();
      const newArray = instructions.filter(({id}) => {
        return idx !== id
      });
      setInstructions(newArray);
    }

    return ( 
        <>
       
        <InstructionsEdit className="glass">
        {instructions.map((ins, idx) => (
            <EachInstruction idx={idx} id={ins.id} ins={ins.ins} deleteIngredient={deleteIngredient} setInstructions={setInstructions} instructions={instructions} />
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
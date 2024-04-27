import { useState} from "react";
import {SingleMeaIngDivEdit, BottomIngDivEdit, InstructionsEdit} from '../edit.styles';
import EachInstruction from "./EachInstruction.component";
import { v4 as uuidv4 } from 'uuid';


const UserInstructionsEdit = ({instructions, setInstructions}) => {

    


    return ( 
        <>
       
        <InstructionsEdit className="boxShadow">
        {instructions.map((ins, idx) => (
            <EachInstruction idx={idx} id={ins.id} ins={ins.ins} deleteIngredient={deleteIngredient} setInstructions={setInstructions} instructions={instructions} />
        ))}
        </InstructionsEdit>
         <BottomIngDivEdit>
            <input 
            type="text" 
            value={ing} 
            placeholder="Add an instruction"
            onChange={(e) => setIng(e.target.value)} />
              <button className="buttonWithIcon" onClick={(e) => {
                addCard(e, ing)
              }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-add"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
              Add Instruction
              </button>
            </BottomIngDivEdit>
        </>
     );
}
 
export default UserInstructionsEdit;
import EachInstruction from "./EachInstruction.component";
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";

const InstructionsEdit = ({instructions, setInstructions}) => {


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
        <h2> Instructinos edit</h2>

        <EachInstruction />
        </>
      );
}
 
export default InstructionsEdit;
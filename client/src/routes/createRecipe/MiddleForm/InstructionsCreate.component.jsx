import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EachInstructionCreate from "./EachInstructionCreate.component";

const InstructionsCreate = ({instructions, setInstructions, addNewInstruction}) => {
  console.log('Instructions inside create', instructions);
    const maxSteps = 15;
    const [ins, setIns] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
  
    const addCard = (e) => {
      e.preventDefault();
      if(!ins.length){
        return;
      }
        if(maxSteps > count){
            const newIns = {id: uuidv4(), ins: ins};
            addNewInstruction(newIns);
            setIns('');
            setCount(count + 1);
        } else {
            setError('Cannot add more than 15 instructions')
        }
    }
    const deleteInstruction = (e, deleteI) => {
        e.preventDefault();
        const newInstructions = instructions.filter((x) => {
          return x.id !== deleteI
        });
        setInstructions(newInstructions)
    };

    const changeOrder = (opt1, opt2) => {
      console.log('Switching', opt1, opt2);
      let ins = [...instructions];
        let item1 = {
            ...instructions[opt1],
           // ins: inst
        };
         let item2 = {
          ...instructions[opt2],
         // ins: inst
      }
        console.log('ITEM 1', item1)
        console.log('Item 2', item2)
        ins[opt1] = item2;
        ins[opt2] = item1;
        console.log('FINAL', ins)
        setInstructions(ins);
    }
    return ( 
        <>
        <h2>Create Instructions</h2>
        <>
        {instructions.length ? 
          <>
          {instructions.map((ins, idx) => <EachInstructionCreate deleteInstruction={deleteInstruction} ins={ins} idx={idx} instructions={instructions} setInstructions={setInstructions}/>)}
          </>
          :
          <h4>Add some instructions</h4>
          }
        </>

        <>
        <p className="error">{error}</p>
        <input type="text" value={ins} placeholder='Add an instruction' onChange={(e) => setIns(e.target.value)} />
        <button className="buttonWithIcon" onClick={addCard}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-add"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
          Add Instruction
          </button>
        </>
        <div>
          <h2>Change Instructions</h2>
          <h2>one {one}</h2>
          <select onChange={(e) => setOne(e.target.value)}>
            {instructions.map((e, i) => {
              return <option value={i}>{i + 1}</option>
            })}
          </select>
          <h2>Change Instructions</h2>
          <h2> two {two}</h2>
          <select onChange={(e) => setTwo(e.target.value)}>
            {instructions.map((e, i) => {
              return <option value={i}>{i + 1}</option>
            })}
          </select>
            <button onClick={(e) => {
              e.preventDefault();
              changeOrder(one, two);
            }}>Change Recipes</button>
          
        </div>
        </>
     );
}
 
export default InstructionsCreate;
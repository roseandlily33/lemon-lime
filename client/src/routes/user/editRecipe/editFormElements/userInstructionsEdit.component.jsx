import { useState} from "react";
import {SingleMeaIngDivEdit, BottomIngDivEdit, InstructionsEdit} from '../edit.styles';
const UserInstructionsEdit = ({instructions, setInstructions}) => {

    const objInstructions = Object.assign({}, instructions);
    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(instructions.length);
    const [myIns, setMyIns] = useState(objInstructions);

 
    const handleChange = (e) => {
      e.preventDefault()
        const {name, value} = e.target;
        setMyIns({...myIns, [name]: value});
        const mainHomeInstructions = Object.values(myIns);
        setInstructions(mainHomeInstructions);
    }
    
    const addCard = (e, ing) => {
      e.preventDefault();
        if(maxSteps > count){
          const objIns = Object.assign({}, instructions);
            setMyIns(objIns);
            setInstructions([...instructions, ing]);
            setIng('');
            setCount(count + 1);
        } else {
            alert('Cannot add more cards');
        }
    }
  
    const deleteInstruction = (e, deleteI) => {
      e.preventDefault();
      const newInstructions = Object.values(myIns).filter((x, i) => {
        return i !== deleteI
      });
      const newInstructionsObj = Object.assign({}, newInstructions);
      setMyIns(newInstructionsObj)
      setInstructions(newInstructions)
    }

    return ( 
        <>
        <InstructionsEdit className="glass">
        {Object.values(objInstructions).map((x, idx) => {
            return <div  key={idx}>
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={idx}   
               value={x}
               onChange={handleChange}
             />
            {/* <div className="mobileRight"> */}
            <button className="secondaryButton" onClick={(e) => deleteInstruction(e, idx)}>Delete Instruction</button>
            {/* </div> */}
            </div>
        })}
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
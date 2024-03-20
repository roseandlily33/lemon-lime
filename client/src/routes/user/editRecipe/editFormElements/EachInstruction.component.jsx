import { useState, useEffect } from "react";

const EachInstruction = ({ins, id, idx, deleteInstruction, setInstructions, instructions}) => {

    const [insState, setInsState] = useState(ins);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        setInsState(ins);
    }, [ins]);  

    const setMyInstructions = (e) => {
        e.preventDefault();
        let ins = [...instructions];
        let item = {
            ...instructions[idx],
            ins: insState
        }
        ins[idx] = item;
        setInstructions(ins);
    }

    return ( 
        <div key={id}>
            <label for={insState}></label>
             <input 
               id={id}
               type="text" 
               name={ins}   
               value={insState}
               onChange={(e) => {
                setInsState(e.target.value);}}
             /><button id={id} onClick={(e) => {
                setMyInstructions(e)
                setUpdated(true)
             }}>{updated ? 'Update Complete' : 'Update'}</button>
            <button className="secondaryButton" id={id} onClick={(e) => deleteInstruction(e, id)}>Delete Instruction</button>
        </div>
     );
}
 
export default EachInstruction;
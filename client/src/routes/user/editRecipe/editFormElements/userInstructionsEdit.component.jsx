import { useState, useEffect } from "react";
import { SingleMeaIngDiv, BottomIngDiv } from "../../createRecipe/userRecipe.styles";

const UserInstructionsEdit = ({instructions, setInstructions}) => {

    const objInstructions = Object.assign({}, instructions);
    const maxSteps = 15;
    const [ing, setIng] = useState('');
    const [count, setCount] = useState(0);
    const [myIns, setMyIns] = useState(objInstructions);

    useEffect(() => {
      const objIns = Object.assign({},
        instructions);
        setMyIns(objIns);
    }, [instructions])
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setMyIns({...myIns, [name]: value});
        const mainHomeInstructions = Object.values(myIns);
        setInstructions(mainHomeInstructions)
    }
    
    const addCard = (e) => {
      e.preventDefault();
        if(maxSteps > count){
          const objIns = Object.assign({},   instructions);
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
      setMyIns(newInstructions)
      setInstructions(newInstructions)
    }

    return ( 
        <>
        {Object.values(myIns).map((x, idx) => {
            return <SingleMeaIngDiv className="glass" key={idx}>
            <label name={idx}>{idx + 1}</label>
             <input 
               type="text" 
               name={idx}   
               value={x}
               onChange={handleChange}
             />
             <button onClick={(e) => deleteInstruction(e, idx)}>Delete Instruction</button>
            </SingleMeaIngDiv>
        })}
         <BottomIngDiv>
       <input 
       type="text" 
       value={ing} 
       onChange={(e) => setIng(e.target.value)} />
        <button onClick={addCard}>Add Instruction</button>
       </BottomIngDiv>
        </>
     );
}
 
export default UserInstructionsEdit;
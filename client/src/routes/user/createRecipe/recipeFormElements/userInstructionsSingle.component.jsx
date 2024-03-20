import { useState } from 'react';
import { SingleMeaIngDiv, MiddleForm, TopIngDiv, BottomIngDiv } from '../userRecipe.styles';
import { v4 as uuidv4 } from 'uuid';

const UserInstructions = ({instructions, addNewInstruction, setInstructions}) => {

  const maxSteps = 15;
  const [ins, setIns] = useState('');
  const [count, setCount] = useState(0);

  const addCard = (e) => {
    e.preventDefault();
      if(maxSteps > count){
          const newIns = {id: uuidv4(), ins: ins};
          addNewInstruction(newIns);
          setIns('');
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
    setInstructions(newInstructions)
  }

    return (
    <>
       <MiddleForm>
        <TopIngDiv>
          {instructions ? 
          <>
          {instructions.map((ins, idx) => {
            console.log('Instructions', ins , idx)
              return <SingleMeaIngDiv className="glass">
                <div key={ins.id}>
                <h4>{ins.id + 1}</h4>
                <p>{ins.ins}</p>
                </div>
                <div>
                <button onClick={(e) => deleteInstruction(e, ins.id)}>Delete Instruction</button>
                </div>
              </SingleMeaIngDiv>
            })
          }
          </>
          :
          <h4>Add some instructions</h4>
          }
        </TopIngDiv>
       <BottomIngDiv>
       <input type="text" value={ins} onChange={(e) => setIns(e.target.value)} />
        <button onClick={addCard}>Add Card</button>
       </BottomIngDiv>
       </MiddleForm>
    </>
    );
}
 
export default UserInstructions;
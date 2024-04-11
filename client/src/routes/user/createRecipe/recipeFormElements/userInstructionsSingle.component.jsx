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
              return <SingleMeaIngDiv className="glass">
                <div key={ins.id}>
                <h4>{idx+ 1}</h4>
                <p>{ins.ins}</p>
                </div>
                <div>
                <button onClick={(e) => deleteInstruction(e, ins.id)}>
                  
<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-trash"><path class="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>

                  </button>
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
       <input type="text" value={ins} placeholder='Add an instruction' onChange={(e) => setIns(e.target.value)} />
        <button className="buttonWithIcon" onClick={addCard}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30" class="icon-add"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
          Add Instruction
          </button>
       </BottomIngDiv>
       </MiddleForm>
    </>
    );
}
 
export default UserInstructions;
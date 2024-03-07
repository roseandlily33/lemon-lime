import { useState } from 'react';
import { SingleMeaIngDiv, MiddleForm, TopIngDiv, BottomIngDiv } from '../userRecipe.styles';

const UserInstructions = ({instructions, addNewInstruction, setInstructions}) => {

  const maxSteps = 15;
  const [ing, setIng] = useState('');
  const [count, setCount] = useState(0);

  const addCard = (e) => {
    e.preventDefault();
      if(maxSteps > count){
          addNewInstruction(ing);
          setIng('');
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
          {instructions.map((ins, i) => {
              return <SingleMeaIngDiv className="glass" key="i">
                <div>
                <h4>{i + 1}</h4>
                <p>{ins}</p>
                </div>
                <div>
                <button onClick={(e) => deleteInstruction(e, i)}>Delete Instruction</button>
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
       <input type="text" value={ing} onChange={(e) => setIng(e.target.value)} />
        <button onClick={addCard}>Add Card</button>
       </BottomIngDiv>
       </MiddleForm>
    </>
    );
}
 
export default UserInstructions;
//import {InstructionsDiv} from '../userRecipe.styles'
import { useState } from 'react';
const UserInstructions = ({instructions, addNewInstruction}) => {

  const maxSteps = 15;
  //const [list, setList] = useState([]);
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
    return (
    <>
        <input type="text" value={ing} onChange={(e) => setIng(e.target.value)} />
        <button onClick={addCard}>Add Card</button>
    </>
    );
}
 
export default UserInstructions;
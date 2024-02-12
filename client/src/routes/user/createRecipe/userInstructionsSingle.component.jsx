import { EachInput } from "./userRecipe.styles";
const UserInstructions = ({instructions, addNewInstruction}) => {
    return (
    <>
      {Object.entries(instructions).map((x, idx) => {
        return  <EachInput>
        <h3>{idx + 1}</h3>
        <input 
          type="text" 
          name={x[0]}
          value={x[1]}
          onChange={addNewInstruction}
        />
        </EachInput>
      })}
    </>
    );
}
 
export default UserInstructions;
import IngredientsCreate from "./IngredientsCreate.component";
import InstructionsCreate from "./InstructionsCreate.component";

const MiddleCreate = ({ingredients, addNewIngredient, setIngredients, instructions, setInstructions, addNewInstruction}) => {

    return (
        <>
        <h2>Middle Create</h2>
        {/* {/* <IngredientsCreate ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients} /> */}
        <InstructionsCreate instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction} /> 
        </>
      );
}
 
export default MiddleCreate;
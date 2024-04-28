import IngredientsCreate from "./Ingredients/IngredientsCreate.component";
import InstructionsCreate from "./Instructions/InstructionsCreate.component";

const MiddleCreate = ({ingredients, addNewIngredient, setIngredients, instructions, setInstructions, addNewInstruction}) => {

    return (
        <>
         <IngredientsCreate ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients} />
         <InstructionsCreate instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction} /> 
        </>
      );
}
 
export default MiddleCreate;
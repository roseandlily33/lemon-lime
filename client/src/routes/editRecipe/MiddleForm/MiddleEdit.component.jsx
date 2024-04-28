import IngredientsCreate from "../../createRecipe/MiddleForm/Ingredients/IngredientsCreate.component";
import InstructionsCreate from "../../createRecipe/MiddleForm/Instructions/InstructionsCreate.component";

const MiddleEdit = ({ingredients, setIngredients, addNewIngredient ,instructions, setInstructions, addNewInstruction}) => {
    return (
        <> 
         <IngredientsCreate ingredients={ingredients} addNewIngredient={addNewIngredient}  setIngredients={setIngredients} /> 
         <InstructionsCreate instructions={instructions} setInstructions={setInstructions} addNewInstruction={addNewInstruction} /> 
        </>
     );
}
 
export default MiddleEdit;
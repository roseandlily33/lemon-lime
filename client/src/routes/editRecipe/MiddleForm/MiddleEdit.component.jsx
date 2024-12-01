import IngredientsCreate from "../../createRecipe/MiddleForm/Ingredients/IngredientsCreate.component";
import InstructionsCreate from "../../createRecipe/MiddleForm/Instructions/InstructionsCreate.component";
import PropTypes from "prop-types";
import React from "react";

const MiddleEdit = ({
  ingredients,
  setIngredients,
  addNewIngredient,
  instructions,
  setInstructions,
  addNewInstruction,
}) => {
  return (
    <>
      <IngredientsCreate
        ingredients={ingredients}
        addNewIngredient={addNewIngredient}
        setIngredients={setIngredients}
      />
      <InstructionsCreate
        instructions={instructions}
        setInstructions={setInstructions}
        addNewInstruction={addNewInstruction}
      />
    </>
  );
};
MiddleEdit.propTypes = {
  ingredients: PropTypes.array.isRequired,
  setIngredients: PropTypes.func.isRequired,
  addNewIngredient: PropTypes.func.isRequired,
  instructions: PropTypes.array.isRequired,
  setInstructions: PropTypes.func.isRequired,
  addNewInstruction: PropTypes.func.isRequired,
};

export default MiddleEdit;

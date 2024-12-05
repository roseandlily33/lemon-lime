import IngredientsCreate from "./Ingredients/IngredientsCreate.component";
import InstructionsCreate from "./Instructions/InstructionsCreate.component";
import PropTypes from "prop-types";
import React from "react";

const MiddleCreate = ({
  ingredients,
  addNewIngredient,
  setIngredients,
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
MiddleCreate.propTypes = {
  ingredients: PropTypes.array.isRequired,
  addNewIngredient: PropTypes.func.isRequired,
  setIngredients: PropTypes.func.isRequired,
  instructions: PropTypes.array.isRequired,
  setInstructions: PropTypes.func.isRequired,
  addNewInstruction: PropTypes.func.isRequired,
};

export default MiddleCreate;

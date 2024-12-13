import IngredientsCreate from "./Ingredients/IngredientsCreate.component";
import InstructionsCreate from "./Instructions/InstructionsCreate.component";
import PropTypes from "prop-types";
import React from "react";

const MiddleCreate = ({
  ingredients = [],
  setIngredients,
  instructions = [],
  setInstructions,
}) => {
  const addNewIngredient = (ing) => {
    setIngredients([...ingredients, ing]);
  };
  const addNewInstruction = (ins) => {
    setInstructions([...instructions, ins]);
  };
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
  ingredients: PropTypes.array,
  setIngredients: PropTypes.func.isRequired,
  instructions: PropTypes.array,
  setInstructions: PropTypes.func.isRequired,
};

export default MiddleCreate;

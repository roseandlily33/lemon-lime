import IngredientsCreate from "../../create-recipe/middle-form/Ingredients/IngredientsCreate.component";
import InstructionsCreate from "../../create-recipe/middle-form/Instructions/InstructionsCreate.component";
import PropTypes from "prop-types";
import React from "react";

const MiddleEdit = ({
  ingredients,
  setIngredients,
  instructions,
  setInstructions,
}) => {
  const addNewInstruction = (ins) => {
    setInstructions([...instructions, ins]);
  };
  const addNewIngredient = (ing) => {
    setIngredients([...ingredients, ing]);
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
MiddleEdit.propTypes = {
  ingredients: PropTypes.array.isRequired,
  setIngredients: PropTypes.func.isRequired,
  instructions: PropTypes.array.isRequired,
  setInstructions: PropTypes.func.isRequired,
};

export default MiddleEdit;

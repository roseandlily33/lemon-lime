import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { InputDiv, MiddleContainer } from "../../RecipeForm.styles";
import EachInstructionCreate from "./EachInstructionCreate.component";
import IconButton from "../../../../components/buttons-template/icon-button/IconButton.component";
import AddIcon from "../../../../images/icons/AddIcon.icon";

const InstructionsCreate = ({
  instructions = [],
  setInstructions,
  addNewInstruction,
}) => {
  const maxSteps = 15;
  const [ins, setIns] = useState("");
  const [count, setCount] = useState(instructions?.length);
  const [error, setError] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    if (!ins?.length) {
      setError("Please enter an instruction");
      return;
    }
    if (maxSteps > count) {
      const newIns = { id: uuidv4(), ins: ins };
      addNewInstruction(newIns);
      setIns("");
      setCount(count + 1);
      setError("");
    } else {
      setError("Cannot add more than 15 instructions");
    }
  };
  const deleteInstruction = (e, deleteI) => {
    e.preventDefault();
    const newInstructions = instructions.filter((x) => {
      return x.id !== deleteI;
    });
    setInstructions(newInstructions);
  };

  return (
    <MiddleContainer>
      <h3>
        Instructions
        <span> max 15 </span>
        <span className="required"> * </span>
      </h3>
      <hr />
      <>
        {instructions?.length > 0 ? (
          <>
            {instructions.map((ins, idx) => (
              <EachInstructionCreate
                key={ins._id || idx}
                deleteInstruction={deleteInstruction}
                instr={ins}
                idx={idx}
                instructions={instructions}
                setInstructions={setInstructions}
                insID={ins._id || idx}
              />
            ))}
          </>
        ) : (
          <h4 style={{ textAlign: "center", marginBlock: "2rem" }}>
            Add Instructions
          </h4>
        )}
      </>
      <p className="error">{error}</p>
      <InputDiv className="boxShadow">
        <input
          type="text"
          value={ins}
          placeholder="Add an instruction"
          onChange={(e) => setIns(e.target.value)}
        />
        <IconButton
          functionName={addCard}
          span="Add Instruction"
          svg={<AddIcon />}
        />
      </InputDiv>
    </MiddleContainer>
  );
};
InstructionsCreate.propTypes = {
  instructions: PropTypes.array,
  setInstructions: PropTypes.func.isRequired,
  addNewInstruction: PropTypes.func.isRequired,
};

export default InstructionsCreate;

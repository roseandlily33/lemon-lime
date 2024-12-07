import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { InputDiv, MiddleContainer } from "../../RecipeForm.styles";
import EachInstructionCreate from "./EachInstructionCreate.component";
import IconButton from "../../../../components/buttons/icon-button/IconButton.component";

const InstructionsCreate = ({
  instructions,
  setInstructions,
  addNewInstruction,
}) => {
  const maxSteps = 15;
  const [ins, setIns] = useState("");
  const [count, setCount] = useState(instructions?.length);
  const [error, setError] = useState("");
  // const [one, setOne] = useState(0);
  // const [two, setTwo] = useState(0);

  const addCard = (e) => {
    e.preventDefault();
    if (!ins?.length) {
      return;
    }
    if (maxSteps > count) {
      const newIns = { id: uuidv4(), ins: ins };
      addNewInstruction(newIns);
      setIns("");
      setCount(count + 1);
    } else {
      setError("Cannot add more than 15 instructions");
    }
  };
  const deleteInstruction = (e, deleteI) => {
    e.preventDefault();
    console.log("Delete ID", deleteI);
    const newInstructions = instructions.filter((x) => {
      return x.id !== deleteI;
    });
    console.log("New ins", newInstructions);
    setInstructions(newInstructions);
  };

  // const changeOrder = (opt1, opt2) => {
  //   if(opt1 === opt2){
  //     setError('Cannot change the same instruction');
  //     return;
  //   }
  //     let ins = [...instructions];
  //     let item1 = {
  //         ...instructions[opt1]
  //     };
  //      let item2 = {
  //       ...instructions[opt2]
  //   }
  //     ins[opt1] = item2;
  //     ins[opt2] = item1;
  //     setInstructions(...ins);
  // }
  return (
    <MiddleContainer>
      <h3>
        Instructions <span>max 15</span>
      </h3>
      <hr />

      {/* <p>Pick 2 recipes to change the order of</p>
        <OptionsContainer>
          <select onChange={(e) => setOne(e.target.value)}>
            {instructions.map((e, i) => {
              return <option value={i}>{i + 1}</option>
            })}
          </select>
          <select onChange={(e) => setTwo(e.target.value)}>
            {instructions.map((e, i) => {
              return <option value={i}>{i + 1}</option>
            })}
          </select>
            <button onClick={(e) => {
              e.preventDefault();
              changeOrder(one, two);
            }}>Change Recipes</button>
        </OptionsContainer> */}
      <>
        {instructions?.length > 0 ? (
          <>
            {instructions.map((ins, idx) => (
              <EachInstructionCreate
                key={ins._id}
                deleteInstruction={deleteInstruction}
                instr={ins}
                idx={idx}
                instructions={instructions}
                setInstructions={setInstructions}
              />
            ))}
          </>
        ) : (
          <h4 style={{ textAlign: "center", marginBlock: "2rem" }}>
            Add Instructions
          </h4>
        )}
      </>

      <InputDiv className="boxShadow">
        <p className="error">{error}</p>
        <input
          type="text"
          value={ins}
          placeholder="Add an instruction"
          onChange={(e) => setIns(e.target.value)}
        />
        <IconButton
          functionName={addCard}
          span="Add Instruction"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon icon-add"
            >
              <path
                className="secondary"
                fillRule="evenodd"
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </svg>
          }
        />
      </InputDiv>
    </MiddleContainer>
  );
};
InstructionsCreate.propTypes = {
  instructions: PropTypes.array.isRequired,
  setInstructions: PropTypes.func.isRequired,
  addNewInstruction: PropTypes.func.isRequired,
};

export default InstructionsCreate;

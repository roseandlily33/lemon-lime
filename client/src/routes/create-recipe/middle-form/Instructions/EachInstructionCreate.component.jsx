import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EachI } from "../../RecipeForm.styles";
import EditIcon from "../../../../images/icons/EditIcon.icon";
import CheckIcon from "../../../../images/icons/CheckIcon.icon";
import DeleteIcon from "../../../../images/icons/DeleteIcon.icon";

const EachInstructionCreate = ({
  instr,
  idx,
  deleteInstruction,
  instructions,
  setInstructions,
}) => {
  useEffect(() => {
    const { id, ins } = instr;
    setInst(ins);
    setInsID(id);
  }, [instr]);

  const [insID, setInsID] = useState();
  const [inst, setInst] = useState();
  const [updating, setUpdating] = useState(false);

  const setMyInstructions = (e) => {
    e.preventDefault();
    let ins = [...instructions];
    let item = {
      ...instructions[idx],
      id: insID,
      ins: inst,
    };
    ins[idx] = item;
    setInstructions(ins);
  };

  return (
    <>
      <EachI className="boxShadow" key={insID}>
        {updating ? (
          <>
            <div className="left">
              <h4>{idx + 1}</h4>
              <input
                type="text"
                value={inst}
                name="ins"
                onChange={(e) => {
                  e.preventDefault();
                  setInst(e.target.value);
                }}
              />
            </div>
            <div className="right">
              {/* Check Mark icon */}
              <CheckIcon
                functionName={(e) => {
                  e.preventDefault();
                  setUpdating(false);
                  setMyInstructions(e);
                }}
              />

              {/* Delete icon */}
              <DeleteIcon functionName={(e) => deleteInstruction(e, insID)} />
            </div>
          </>
        ) : (
          <>
            <div className="left">
              <h4>{idx + 1}</h4>
              <p>{inst}</p>
            </div>
            <div className="right">
              {/* Edit Icon */}
              <EditIcon
                functionName={(e) => {
                  e.preventDefault();
                  setUpdating(true);
                }}
              />

              {/* Delete Icon */}
              <DeleteIcon functionName={(e) => deleteInstruction(e, insID)} />
            </div>
          </>
        )}
      </EachI>
    </>
  );
};
EachInstructionCreate.propTypes = {
  instr: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    ins: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  deleteInstruction: PropTypes.func.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ins: PropTypes.string.isRequired,
    })
  ).isRequired,
  setInstructions: PropTypes.func.isRequired,
};

export default EachInstructionCreate;

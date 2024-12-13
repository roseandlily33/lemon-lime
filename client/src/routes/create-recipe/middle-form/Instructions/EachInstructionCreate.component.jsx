import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EachI } from "../../RecipeForm.styles";
import EditIcon from "../../../../images/icons/EditIcon.icon";
import CheckIcon from "../../../../images/icons/CheckIcon.icon";
import DeleteIcon from "../../../../images/icons/DeleteIcon.icon";

const EachInstructionCreate = ({
  instr = "",
  key,
  idx = 1,
  insID,
  deleteInstruction,
  instructions = [],
  setInstructions,
}) => {
  useEffect(() => {
    //id,
    const { ins } = instr;
    setInst(ins);
    // setInsID(id);
  }, [instr]);

  // const [insID, setInsID] = useState();
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
      <EachI className="boxShadow" key={key}>
        {updating ? (
          <>
            <div className="left" key={key}>
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
            <div className="left" key={key}>
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
  }),
  key: PropTypes.string,
  idx: PropTypes.number,
  insID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteInstruction: PropTypes.func.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ins: PropTypes.string.isRequired,
    })
  ),
  setInstructions: PropTypes.func.isRequired,
};

export default EachInstructionCreate;

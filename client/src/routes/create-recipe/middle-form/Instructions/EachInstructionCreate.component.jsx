import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EachI } from "../../RecipeForm.styles";

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
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  setUpdating(false);
                  setMyInstructions(e);
                }}
                className="primary icon icon-check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" className="primary" />
                <path
                  className="secondary"
                  d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                />
              </svg>
              {/* Delete icon */}
              <svg
                onClick={(e) => deleteInstruction(e, insID)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon icon-trash"
              >
                <path
                  className="primary"
                  d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
                />
                <path
                  className="secondary"
                  d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
                />
              </svg>
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
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  setUpdating(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon icon-edit"
              >
                <path
                  className="primary"
                  d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
                />
                <rect
                  width="20"
                  height="2"
                  x="2"
                  y="20"
                  className="secondary"
                  rx="1"
                />
              </svg>
              {/* Delete Icon */}
              <svg
                onClick={(e) => deleteInstruction(e, insID)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon icon-trash"
              >
                <path
                  className="primary"
                  d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
                />
                <path
                  className="secondary"
                  d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
                />
              </svg>
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

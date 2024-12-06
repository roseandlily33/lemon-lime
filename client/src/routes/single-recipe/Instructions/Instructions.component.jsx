import { InstructionsDiv } from "../SingleRecipe.styles";
import React from "react";
import PropTypes from "prop-types";

const InstructionSection = ({ singleRecipe }) => {
  return (
    <>
      <InstructionsDiv>
        <h4>Instructions</h4>
        <ol>
          {singleRecipe?.instructions?.map(({ id, ins }, index) => {
            return (
              <div style={{ display: "flex" }} key={id}>
                <p style={{ paddingRight: "0.7em", color: "#6C9251" }}>
                  {index + 1}
                </p>
                <p>{ins}</p>
              </div>
            );
          })}
        </ol>
      </InstructionsDiv>
    </>
  );
};
InstructionSection.propTypes = {
  singleRecipe: PropTypes.shape({
    instructions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        ins: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default InstructionSection;

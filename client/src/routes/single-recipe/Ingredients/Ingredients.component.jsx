import { IngredientsDiv } from "../singleRecipe.styles";
import PropTypes from "prop-types";
import React from "react";

const IngredientSection = ({ singleRecipe }) => {
  return (
    <>
      <IngredientsDiv>
        <h4>Ingredients</h4>
        <ul className="outside">
          <div className="ing1">
            {singleRecipe?.ingredients?.map(({ id, mea }, index) => {
              return (
                <div className="insideIng1" key={index}>
                  <p
                    key={id}
                    style={{ color: "#6C9251", paddingRight: "0.7em" }}
                  >
                    {index + 1}
                  </p>
                  <p key={mea}>{mea}</p>
                </div>
              );
            })}
          </div>
          <div className="ing2">
            {singleRecipe?.ingredients?.map(({ id, ing }) => {
              return <p key={id}>{ing}</p>;
            })}
          </div>
        </ul>
      </IngredientsDiv>
    </>
  );
};
IngredientSection.propTypes = {
  singleRecipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        mea: PropTypes.string,
        ing: PropTypes.string,
      })
    ),
  }),
};

export default IngredientSection;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EachMeasurementCreate from "./EachMeasurementCreate.component";
import { EachI } from "../../RecipeForm.styles";
import DeleteIcon from "../../../../images/icons/DeleteIcon.icon";
import EditIcon from "../../../../images/icons/EditIcon.icon";
import CheckIcon from "../../../../images/icons/CheckIcon.icon";

// prettier-ignore
const EachIngredientCreate = ({
  ing = "",
  id = 1,
  idx = 1,
  deleteIngredient,
  setIngredients,
  ingredients = [],
  mea = "",
}) => {
  useEffect(() => {
    setIngId(id);
    setIng(ing);
    setMeas(mea);
  }, [ing, id, mea]);

  const [ingState, setIng] = useState();
  const [ingID, setIngId] = useState();
  const [meas, setMeas] = useState();
  const [updated, setUpdated] = useState(false);

  const setMyIngredients = (e) => {
    e.preventDefault();
    let ing = [...ingredients];
    let item = {
      ...ingredients[idx],
      id: ingID,
      mea: meas,
      ing: ingState,
    };
    ing[idx] = item;
    setIngredients(ing);
  };

  return (
    <>
      {updated ? (
        <EachI className="boxShadow">
          <div className="left">
            <h4>{idx + 1}</h4>
            <EachMeasurementCreate
              mea={meas}
              id={ingID}
              idx={idx}
              setMeas={setMeas}
            />
            <input
              type="text"
              value={ingState}
              name="ing"
              onChange={(e) => {
                e.preventDefault();
                setIng(e.target.value);
              }}
            />
          </div>
          <div className="right">
            {/* Check Mark icon */}
            <CheckIcon
              functionName={(e) => {
                e.preventDefault();
                setUpdated(false);
                setMyIngredients(e);
              }}
            />
            {/* Delete icon */}
            <DeleteIcon functionName={(e) => deleteIngredient(e, ingID)} />
          </div>
        </EachI>
      ) : (
        <EachI className="boxShadow">
          <div className="left">
            <h4>{idx + 1}</h4>
            <p style={{ marginRight: "1rem" }}>{mea}</p>
            <p>{ingState}</p>
          </div>
          <div className="right">
            {/* Edit Icon */}
            <EditIcon functionName={() => setUpdated(true)} />
            {/* Delete Icon */}
            <DeleteIcon functionName={(e) => deleteIngredient(e, ingID)} />
          </div>
        </EachI>
      )}
    </>
  );
};
EachIngredientCreate.propTypes = {
  ing: PropTypes.string,
  id: PropTypes.string,
  idx: PropTypes.number,
  deleteIngredient: PropTypes.func.isRequired,
  setIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.array,
  mea: PropTypes.string,
};

export default EachIngredientCreate;

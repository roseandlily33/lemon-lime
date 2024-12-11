import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Measurement from "./Measurement.component";
import EachIngredientCreate from "./EachIngredientCreate.component";
import { MiddleContainer, InputDiv } from "../../RecipeForm.styles";
import IconButton from "../../../../components/buttons/icon-button/IconButton.component";
import RegularInput from "../../../../components/input/regular-input/RegularInput.component";
import AddIcon from "../../../../images/icons/AddIcon.icon";

const IngredientsCreate = ({
  ingredients,
  addNewIngredient,
  setIngredients,
}) => {
  const [ing, setIng] = useState("");
  const [mea, setMea] = useState();
  const [count, setCount] = useState(ingredients?.length);
  const [error, setError] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    if (count <= 15) {
      const newIng = { id: uuidv4(), ing: ing, mea: mea };
      addNewIngredient(newIng);
      setIng("");
      setCount(count + 1);
    } else {
      setError("Cannot add more than 15 ingredients");
    }
  };

  const deleteIngredient = (e, idx) => {
    e.preventDefault();
    const newArray = ingredients.filter(({ id }) => {
      return idx !== id;
    });
    setIngredients(newArray);
  };

  return (
    <MiddleContainer>
      <h3>
        Ingredients
        <span> max 15 </span>
        <span className="required"> * </span>
      </h3>
      <hr />
      <>
        {ingredients?.length > 0 ? (
          <>
            {ingredients?.map(({ id, ing, mea }, idx) => (
              <EachIngredientCreate
                key={id}
                idx={idx}
                id={id}
                ing={ing}
                mea={mea}
                deleteIngredient={deleteIngredient}
                setIngredients={setIngredients}
                ingredients={ingredients}
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
        {error && <p className="error">{error}</p>}
        <Measurement mea={mea} setMea={setMea} />
        <RegularInput
          type="text"
          value={ing}
          placeholder="Add an ingredient"
          onChange={(e) => setIng(e.target.value)}
        />
        <IconButton
          functionName={(e) => addCard(e, ing)}
          span="Add Ingredient"
          svg={<AddIcon />}
        />
      </InputDiv>
    </MiddleContainer>
  );
};
IngredientsCreate.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ing: PropTypes.string.isRequired,
      mea: PropTypes.string.isRequired,
    })
  ).isRequired,
  addNewIngredient: PropTypes.func.isRequired,
  setIngredients: PropTypes.func.isRequired,
};

export default IngredientsCreate;

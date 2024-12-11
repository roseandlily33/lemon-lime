import React from "react";
import PropTypes from "prop-types";

const Measurement = ({ mea, setMea }) => {
  return (
    <select name={mea} onChange={(e) => setMea(e.target.value)}>
      <option value={"1/8 tsp"}>1/8 tsp</option>
      <option value={"1/4 tsp"}>1/4 tsp</option>
      <option value={"1/2 tsp"}>1/2 tsp</option>
      <option value={"3/4 tsp"}>3/4 tsp</option>
      <option value={"1 tsp"}>1 tsp</option>
      <option value={"1 1/4 tsp"}>1 1/4 tsp</option>
      <option value={"1 1/2 tsp"}>1 1/2 tsp</option>
      <option value={"2 tsp"}>2 tsp</option>
      <option value={"2 1/4 tsp"}>2 1/4 tsp</option>
      <option value={"2 1/2 tsp"}>2 1/2 tsp</option>
      <option value={"3 tsp"}>3 tsp</option>
      <option value={"1/8 cup"}>1/8 Cup</option>
      <option value={"1/4 cup"}>1/4 Cup</option>
      <option value={"1/2 cup"}>1/2 Cup</option>
      <option value={"3/4 cup"}>3/4 Cup</option>
      <option value={"1 cup"}>1 Cup</option>
      <option value={"1 1/4 cups"}>1 1/4 Cup</option>
      <option value={"1 1/2 cups"}>1 1/2 Cup</option>
      <option value={"1 3/4 cups"}>1 3/4 Cup</option>
      <option value={"2 cups"}>2 Cups</option>
      <option value={"2 1/4 cups"}>2 1/4 Cup</option>
      <option value={"2 1/2 cups"}>2 1/2 Cup</option>
      <option value={"2 3/4 cups"}>2 3/4 Cup</option>
      <option value={"3 cups"}>3 Cups</option>
      <option value={"3 1/4 cups"}>3 1/4 Cup</option>
      <option value={"3 1/2 cups"}>3 1/2 Cup</option>
      <option value={"3 3/4 cups"}>3 3/4 Cup</option>
      <option value={"4 cups"}>4 Cups</option>
      <option value={"1"}>1</option>
      <option value={"2"}>2</option>
      <option value={"3"}>2</option>
      <option value={"4"}>2</option>
      <option value={"5"}>2</option>
      <option value={"6"}>6</option>
    </select>
  );
};
Measurement.propTypes = {
  mea: PropTypes.string.isRequired,
  setMea: PropTypes.func.isRequired,
};

export default Measurement;

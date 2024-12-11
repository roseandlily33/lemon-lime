import PropTypes from "prop-types";
import React from "react";

// Took out idx from props
const EachMeasurementCreate = ({ mea, id, setMeas }) => {
  const defaultMea = mea || "1/8 tsp";
  return (
    <>
      <div key={id}>
        <select
          name={mea}
          value={defaultMea}
          //defaultValue={defaultMea}
          onChange={(e) => setMeas(e.target.value)}
          style={{ marginInline: "1.4rem" }}
        >
          <option value={["1"]}>1</option>
          <option value={["2"]}>2</option>
          <option value={["3"]}>2</option>
          <option value={["4"]}>2</option>
          <option value={["5"]}>2</option>
          <option value={["6"]}>6</option>
          <option value={["1/16 tsp"]}>1/16 tsp</option>
          <option value={["1/8 tsp"]}>1/8 tsp</option>
          <option value={["1/4 tsp"]}>1/4 tsp</option>
          <option value={["1/2 tsp"]}>1/2 tsp</option>
          <option value={["3/4 tsp"]}>3/4 tsp</option>
          <option value={["1 tsp"]}>1 tsp</option>
          <option value={["1 1/4 tsp"]}>1 1/4 tsp</option>
          <option value={["1 1/2 tsp"]}>1 1/2 tsp</option>
          <option value={["2 tsp"]}>2 tsp</option>
          <option value={["2 1/4 tsp"]}>2 1/4 tsp</option>
          <option value={["2 1/2 tsp"]}>2 1/2 tsp</option>
          <option value={["3 tsp"]}>3 tsp</option>
          <option value={["1/8 Cup"]}>1/8 Cup</option>
          <option value={["1/4 Cup"]}>1/4 Cup</option>
          <option value={["1/2 Cup"]}>1/2 Cup</option>
          <option value={["3/4 Cup"]}>3/4 Cup</option>
          <option value={["1 Cup"]}>1 Cup</option>
          <option value={["1 1/4 Cup"]}>1 1/4 Cup</option>
          <option value={["1 1/2 Cup"]}>1 1/2 Cup</option>
          <option value={["1 3/4 Cup"]}>1 3/4 Cup</option>
          <option value={["2 Cups"]}>2 Cups</option>
          <option value={["2 1/4 Cup"]}>2 1/4 Cup</option>
          <option value={["2 1/2 Cup"]}>2 1/2 Cup</option>
          <option value={["2 3/4 Cup"]}>2 3/4 Cup</option>
          <option value={["3 Cups"]}>3 Cups</option>
          <option value={["3 1/4 Cup"]}>3 1/4 Cup</option>
          <option value={["3 1/2 Cup"]}>3 1/2 Cup</option>
          <option value={["3 3/4 Cup"]}>3 3/4 Cup</option>
          <option value={["4 Cups"]}>4 Cups</option>
        </select>
      </div>
    </>
  );
};
EachMeasurementCreate.propTypes = {
  mea: PropTypes.string,
  id: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  setMeas: PropTypes.func.isRequired,
};

export default EachMeasurementCreate;

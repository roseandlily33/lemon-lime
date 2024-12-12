import React from "react";
import PropTypes from "prop-types";

const EachMeasurementCreate = ({ mea = "", id = "", setMeas }) => {
  const defaultMea = mea || "1/8 tsp";
  return (
    <div key={id}>
      <select
        name={mea}
        value={defaultMea}
        onChange={(e) => setMeas(e.target.value)}
        style={{ marginInline: "1.4rem" }}
      >
        <option value="1/16 tsp">1/16 tsp</option>
        <option value="1/8 tsp">1/8 tsp</option>
        <option value="1/4 tsp">1/4 tsp</option>
        <option value="1/2 tsp">1/2 tsp</option>
        <option value="3/4 tsp">3/4 tsp</option>
        <option value="1 tsp">1 tsp</option>
        <option value="1 1/4 tsp">1 1/4 tsp</option>
        <option value="1 1/2 tsp">1 1/2 tsp</option>
        <option value="2 tsp">2 tsp</option>
        <option value="2 1/4 tsp">2 1/4 tsp</option>
        <option value="2 1/2 tsp">2 1/2 tsp</option>
        <option value="3 tsp">3 tsp</option>
        <option value="1/8 cup">1/8 Cup</option>
      </select>
    </div>
  );
};

EachMeasurementCreate.propTypes = {
  mea: PropTypes.string,
  id: PropTypes.string,
  setMeas: PropTypes.func.isRequired,
};

export default EachMeasurementCreate;

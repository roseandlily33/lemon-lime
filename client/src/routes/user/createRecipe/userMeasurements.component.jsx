import { MeasurementsDiv } from "./userRecipe.styles";
const UserMeasurements = ({ measurements, addNewMeasurement}) => {
    return ( 
        <MeasurementsDiv>
        {Object.entries(measurements).map((measurement, idx)=> {
        return  <div>
      <h3>{idx + 1}</h3>
        <label for={measurement[0]}></label>
        <select name={measurement[0]} onChange={addNewMeasurement}>
          <option value={measurement[1]['1 Cup']}>1 Cup</option>
          <option value={measurement[1]['2 Cups']}>2 Cups</option>
          <option value={measurement[1]['3 Cups']}>3 Cups</option>
          <option value={measurement[1]['1 tsp']}>1 tsp</option>
          <option value={measurement[1]['2 tsp']}>2 tsp</option>
        </select>
        </div>
      })}
        </MeasurementsDiv>
     );
}
 
export default UserMeasurements;
import { MeasurementsDiv } from "../userRecipe.styles";
const UserMeasurements = ({ measurements, addNewMeasurement}) => {
    return ( 
        <MeasurementsDiv>
        {Object.entries(measurements).map((measurement, idx)=> {
        return  <div>
      <h3>{idx + 1}</h3>
        <label for={measurement[0]}></label>
        <select name={measurement[0]} defaultValue={measurement[0]} onChange={addNewMeasurement}>
          <option value={measurement[1]['1/8 tsp']}>1/8 tsp</option>
          <option value={measurement[1]['1/4 tsp']}>1/4 tsp</option>
          <option value={measurement[1]['1/2 tsp']}>1/2 tsp</option>
          <option value={measurement[1]['3/4 tsp']}>3/4 tsp</option>
          <option value={measurement[1]['1 tsp']}>1 tsp</option>
          <option value={measurement[1]['1 1/4 tsp']}>1 1/4 tsp</option>
          <option value={measurement[1]['1 1/2 tsp']}>1 1/2 tsp</option>
          <option value={measurement[1]['2 tsp']}>2 tsp</option>
          <option value={measurement[1]['2 1/4 tsp']}>2 1/4 tsp</option>
          <option value={measurement[1]['2 1/2 tsp']}>2 1/2 tsp</option>
          <option value={measurement[1]['3 tsp']}>3 tsp</option>
          <option value={measurement[1]['1/8 Cup']}>1/8 Cup</option>
          <option value={measurement[1]['1/4 Cup']}>1/4 Cup</option>
          <option value={measurement[1]['1/2 Cup']}>1/2 Cup</option>
          <option value={measurement[1]['3/4 Cup']}>3/4 Cup</option>
          <option value={measurement[1]['1 Cup']}>1 Cup</option>
          <option value={measurement[1]['1 1/4 Cup']}>1 1/4 Cup</option>
          <option value={measurement[1]['1 1/2 Cup']}>1 1/2 Cup</option>
          <option value={measurement[1]['1 3/4 Cup']}>1 3/4 Cup</option>
          <option value={measurement[1]['2 Cups']}>2 Cups</option>
          <option value={measurement[1]['2 1/4 Cup']}>2 1/4 Cup</option>
          <option value={measurement[1]['2 1/2 Cup']}>2 1/2 Cup</option>
          <option value={measurement[1]['2 3/4 Cup']}>2 3/4 Cup</option>
          <option value={measurement[1]['3 Cups']}>3 Cups</option>
          <option value={measurement[1]['3 1/4 Cup']}>3 1/4 Cup</option>
          <option value={measurement[1]['3 1/2 Cup']}>3 1/2 Cup</option>
          <option value={measurement[1]['3 3/4 Cup']}>3 3/4 Cup</option>
          <option value={measurement[1]['4 Cups']}>4 Cups</option>
        </select>
        </div>
      })}
        </MeasurementsDiv>
     );
}
 
export default UserMeasurements;
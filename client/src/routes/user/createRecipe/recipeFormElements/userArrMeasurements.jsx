

const UserArrayMeasurements = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.measurements.map((measurement, idx) => {
            return <> 
            <h3>{idx + 1}</h3>
        <label for={measurement[0]}></label>
        <select name={measurement[0]} defaultValue={measurement[0]} onChange={handleChange}>
          <option value={measurement[1]['1 Cup']}>1 Cup</option>
          <option value={measurement[1]['2 Cups']}>2 Cups</option>
          <option value={measurement[1]['3 Cups']}>3 Cups</option>
          <option value={measurement[1]['1 tsp']}>1 tsp</option>
          <option value={measurement[1]['2 tsp']}>2 tsp</option>
        </select>
            
            </>
        })}
        
        </>
     );
}
 
export default UserArrayMeasurements;
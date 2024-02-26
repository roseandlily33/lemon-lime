import { useState } from "react";

const UserArrayMeasurements = ({formValues, setFormValues}) => {
    const {measurements} = formValues;
    const newMeasurements = Object.assign({}, measurements);
    const [newMea, setNewMea] = useState(newMeasurements);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewMea({...newMea, [name]: value});
        setFormValues({...formValues, measurements: newMea});
    }

    return ( 
        <>
        {
            Object.entries(newMea).map((x,idx) => {
                console.log('Mea', x);
                return <> 
            <label name={idx}>{idx + 1}</label>
         <select name={x[0]} defaultValue={x[0]} onChange={handleChange}>
          <option value={x[1]['1 Cup']}>1 Cup</option>
          <option value={x[1]['2 Cups']}>2 Cups</option>
          <option value={x[1]['3 Cups']}>3 Cups</option>
          <option value={x[1]['1 tsp']}>1 tsp</option>
          <option value={x[1]['2 tsp']}>2 tsp</option>
        </select>
            </>
            })
        }
        {/* {formValues.measurements.map((measurement, idx) => {
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
        })} */}
        
        </>
     );
}
 
export default UserArrayMeasurements;
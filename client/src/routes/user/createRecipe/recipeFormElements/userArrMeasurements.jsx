import { useState } from "react";
import { MeasurementsDiv } from "../userRecipe.styles";

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
        <MeasurementsDiv>
        {
            Object.entries(newMea).map((x,idx) => {
                console.log('Mea', x);
                return <div> 
            <h3>{idx + 1}</h3>
            <label name={idx}></label>
         <select name={x[0]} defaultValue={x[0]} onChange={handleChange}>
          <option value={x[1]['1 Cup']}>1 Cup</option>
          <option value={x[1]['2 Cups']}>2 Cups</option>
          <option value={x[1]['3 Cups']}>3 Cups</option>
          <option value={x[1]['1 tsp']}>1 tsp</option>
          <option value={x[1]['2 tsp']}>2 tsp</option>
        </select>
            </div>
            })
        }
        </MeasurementsDiv>
     );
}
 
export default UserArrayMeasurements;
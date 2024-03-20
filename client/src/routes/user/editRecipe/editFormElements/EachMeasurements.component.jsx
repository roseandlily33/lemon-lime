import { useState } from "react";

const EachMeasurement = ({x, idx, deleteIngredient, setMeasurements, measurements}) => {
    console.log('Each measurement', x)
const handleChangeMea = (e) => {

}
    return ( 
        <>
        <div className="left" key={idx}> 
           <label style={{fontSize: '1.4rem', paddingRight: '1em'}} name={idx}>{idx + 1}</label>
           <select name={x[0]} defaultValue={x} onChange={handleChangeMea}>
           <option value={x['1/8 tsp']}>1/8 tsp</option>
           <option value={x['1/4 tsp']}>1/4 tsp</option>
           <option value={x['1/2 tsp']}>1/2 tsp</option>
           <option value={x['3/4 tsp']}>3/4 tsp</option>
           <option value={x['1 tsp']}>1 tsp</option>
           <option value={x['1 1/4 tsp']}>1 1/4 tsp</option>
           <option value={x['1 1/2 tsp']}>1 1/2 tsp</option>
           <option value={x['2 tsp']}>2 tsp</option>
           <option value={x['2 1/4 tsp']}>2 1/4 tsp</option>
           <option value={x['2 1/2 tsp']}>2 1/2 tsp</option>
           <option value={x['3 tsp']}>3 tsp</option>
           <option value={x['1/8 Cup']}>1/8 Cup</option>
           <option value={x['1/4 Cup']}>1/4 Cup</option>
           <option value={x['1/2 Cup']}>1/2 Cup</option>
           <option value={x['3/4 Cup']}>3/4 Cup</option>
           <option value={x['1 Cup']}>1 Cup</option>
           <option value={x['1 1/4 Cup']}>1 1/4 Cup</option>
           <option value={x['1 1/2 Cup']}>1 1/2 Cup</option>
           <option value={x['1 3/4 Cup']}>1 3/4 Cup</option>
           <option value={x['2 Cups']}>2 Cups</option>
           <option value={x['2 1/4 Cup']}>2 1/4 Cup</option>
           <option value={x['2 1/2 Cup']}>2 1/2 Cup</option>
           <option value={x['2 3/4 Cup']}>2 3/4 Cup</option>
           <option value={x['3 Cups']}>3 Cups</option>
           <option value={x['3 1/4 Cup']}>3 1/4 Cup</option>
           <option value={x['3 1/2 Cup']}>3 1/2 Cup</option>
           <option value={x['3 3/4 Cup']}>3 3/4 Cup</option>
           <option value={x['4 Cups']}>4 Cups</option>
         </select>
             </div>
        </>
     );
}
 
export default EachMeasurement;
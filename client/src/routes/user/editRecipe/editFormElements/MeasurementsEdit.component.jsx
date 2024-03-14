import { SingleMeaIngDivEdit } from '../edit.styles';

const MeasurementsEdit = ({objMeasurements, handleChangeMea}) => {
    return ( 
        <>
         {
             Object.values(objMeasurements)?.map((x,idx) => {
                 return <SingleMeaIngDivEdit className="glass" key={idx}> 
             <h3>{idx + 1}</h3>
           <label name={idx}></label>
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
             </SingleMeaIngDivEdit>
             })
         }
        </>
     );
}
 
export default MeasurementsEdit;
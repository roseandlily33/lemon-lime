
const Measurement = ({mea, setMea}) => {
    return (
        <select name={mea} onChange={(e) => setMea(e.target.value)}>
        <option value={'1/8 tsp'}>1/8 tsp</option>
        <option value={'1/4 tsp'}>1/4 tsp</option>
        <option value={'1/2 tsp'}>1/2 tsp</option>
        <option value={'3/4 tsp'}>3/4 tsp</option>
        <option value={'1 tsp'}>1 tsp</option>
        <option value={'1 1/4 tsp'}>1 1/4 tsp</option>
        <option value={'1 1/2 tsp'}>1 1/2 tsp</option>
        <option value={'2 tsp'}>2 tsp</option>
        <option value={'2 1/4 tsp'}>2 1/4 tsp</option>
        <option value={'2 1/2 tsp'}>2 1/2 tsp</option>
        <option value={'3 tsp'}>3 tsp</option>
        <option value={'1/8 Cup'}>1/8 Cup</option>
        <option value={'1/4 Cup'}>1/4 Cup</option>
        <option value={'1/2 Cup'}>1/2 Cup</option>
        <option value={'3/4 Cup'}>3/4 Cup</option>
        <option value={'1 Cup'}>1 Cup</option>
        <option value={'1 1/4 Cup'}>1 1/4 Cup</option>
        <option value={'1 1/2 Cup'}>1 1/2 Cup</option>
        <option value={'1 3/4 Cup'}>1 3/4 Cup</option>
        <option value={'2 Cups'}>2 Cups</option>
        <option value={'2 1/4 Cup'}>2 1/4 Cup</option>
        <option value={'2 1/2 Cup'}>2 1/2 Cup</option>
        <option value={'2 3/4 Cup'}>2 3/4 Cup</option>
        <option value={'3 Cups'}>3 Cups</option>
        <option value={'3 1/4 Cup'}>3 1/4 Cup</option>
        <option value={'3 1/2 Cup'}>3 1/2 Cup</option>
        <option value={'3 3/4 Cup'}>3 3/4 Cup</option>
        <option value={'4 Cups'}>4 Cups</option>
      </select>
      );
}
 
export default Measurement;
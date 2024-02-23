
const CookTime = ({formValues, handleChange}) => {
    return ( 
        <>
        <label for={formValues.cookTime}>Cook Time:</label>
        <select name="cookTime" defaultValue={formValues.cookTime} onChange={handleChange}>
          <option value={formValues.cookTime[10]}>10</option>
          <option value={formValues.cookTime[20]}>20</option>
          <option value={formValues.cookTime[30]}>30</option>
          <option value={formValues.cookTime[40]}>40</option>
          <option value={formValues.cookTime[50]}>50</option>
        </select>
        </>
     );
}
 
export default CookTime;

const CookTimeCreate = ({formValues, handleChange}) => {
    return (  
        <>
        <label for={formValues.cookTime}>Cook Time: <span>in minutes</span></label>
        <select name="cookTime" defaultValue={formValues.cookTime} onChange={handleChange}>
          <option value={formValues.cookTime[5]}>5</option>
          <option value={formValues.cookTime[10]}>10</option>
          <option value={formValues.cookTime[15]}>15</option>
          <option value={formValues.cookTime[20]}>20</option>
          <option value={formValues.cookTime[25]}>25</option>
          <option value={formValues.cookTime[30]}>30</option>
          <option value={formValues.cookTime[30]}>35</option>
          <option value={formValues.cookTime[40]}>40</option>
          <option value={formValues.cookTime[45]}>45</option>
          <option value={formValues.cookTime[50]}>50</option>
          <option value={formValues.cookTime[55]}>55</option>
          <option value={formValues.cookTime[60]}>60</option>
          <option value={formValues.cookTime[65]}>65</option>
          <option value={formValues.cookTime[70]}>70</option>
        </select>
        </>
    );
}
 
export default CookTimeCreate;

const PrepTimeEdit = ({formValues, handleChange}) => {
    return (
        <>
        <label for={formValues.prepTime}>Prep Time: <span>in minutes</span></label>
        <select name="prepTime" defaultValue={formValues.prepTime} onChange={handleChange}>
          <option value={formValues.prepTime[10]}>10</option>
          <option value={formValues.prepTime[15]}>15</option>
          <option value={formValues.prepTime[20]}>20</option>
          <option value={formValues.prepTime[25]}>25</option>
          <option value={formValues.prepTime[30]}>30</option>
          <option value={formValues.prepTime[35]}>35</option>
          <option value={formValues.prepTime[40]}>40</option>
          <option value={formValues.prepTime[45]}>45</option>
          <option value={formValues.prepTime[50]}>50</option>
          <option value={formValues.prepTime[55]}>55</option>
          <option value={formValues.prepTime[60]}>60</option>
          <option value={formValues.prepTime[70]}>70</option>
          <option value={formValues.prepTime[80]}>80</option>
          <option value={formValues.prepTime[90]}>90</option>
          <option value={formValues.prepTime[100]}>100</option>
        </select>
        </>
     );
}
 
export default PrepTimeEdit;
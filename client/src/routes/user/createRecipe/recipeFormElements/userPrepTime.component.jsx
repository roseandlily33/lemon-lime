
const PrepTime = ({formValues, handleChange}) => {
    return (  
        <>
        <label for={formValues.prepTime}>Prep Time:</label>
        <select name="prepTime" defaultValue={formValues.prepTime} onChange={handleChange}>
          <option value={formValues.prepTime[10]}>10</option>
          <option value={formValues.prepTime[20]}>20</option>
          <option value={formValues.prepTime[30]}>30</option>
          <option value={formValues.prepTime[40]}>40</option>
          <option value={formValues.prepTime[50]}>50</option>
        </select>
        </>
    );
}
 
export default PrepTime;
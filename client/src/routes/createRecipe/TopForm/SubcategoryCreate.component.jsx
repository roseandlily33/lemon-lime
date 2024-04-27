
const SubcategoryCreate = ({formValues, handleChange}) => {
    return (  <>
     <label for={formValues.subCategory}>Choose SubCategory:</label>
         <select style={{width: '100px'}} name="subCategory" defaultValue={formValues.subCategory} onChange={handleChange}>
          <option value={formValues.subCategory["Breakfast"]}>Breakfast</option>
          <option value={formValues.subCategory["Lunch"]}>Lunch</option>
          <option value={formValues.subCategory["Dinner"]}>Dinner</option>
          <option value={formValues.subCategory["Dessert"]}>Dessert</option>
          <option value={formValues.subCategory["Drinks"]}>Drinks</option>
        </select>
    </>);
}
 
export default SubcategoryCreate;
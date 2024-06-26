
const SubcategoryCreate = ({formValues, handleChange}) => {
    return (  <div className="each">
     <label for={formValues?.subCategory}> Subcategory:</label>
         <select style={{width: '100px'}} name="subCategory" defaultValue={formValues?.subCategory} onChange={handleChange}>
          <option value={formValues?.subCategory["Breakfast"]}>Breakfast</option>
          <option value={formValues?.subCategory["Lunch"]}>Lunch</option>
          <option value={formValues?.subCategory["Dinner"]}>Dinner</option>
          <option value={formValues?.subCategory["Dessert"]}>Dessert</option>
          <option value={formValues?.subCategory["Drinks"]}>Drinks</option>
        </select>
    </div>);
}
 
export default SubcategoryCreate;
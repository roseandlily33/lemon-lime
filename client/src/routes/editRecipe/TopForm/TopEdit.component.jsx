import CookTimeEdit from "./CookTimeEdit.component";
import PrepTimeEdit from "./PrepTime.component";
import EditRecipeName from "./RecipeNameEdit.component";
import SubcategoryEdit from "./SubcategoryEdit.component";

const TopEdit = ({formValues, handleChange}) => {
    return (<>
     <h2>Top</h2> 
     <EditRecipeName formValues={formValues} handleChange={handleChange}/>
     <CookTimeEdit formValues={formValues} handleChange={handleChange} />
     <PrepTimeEdit  formValues={formValues} handleChange={handleChange}/>
     <SubcategoryEdit  formValues={formValues} handleChange={handleChange} />
    </>);
}
 
export default TopEdit;
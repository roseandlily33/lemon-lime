import RecipeNameCreate from "./RecipeNameCreate.component";
import CookTimeCreate from "./CookTimeCreate.component";
import PrepTimeCreate from "./PrepTimeCreate.component";
import SubcategoryCreate from "./SubcategoryCreate.component";

const TopCreate = ({formValues, handleChange}) => {
    return ( 
        <>
        <h2>Top Create</h2>
        <RecipeNameCreate formValues={formValues} handleChange={handleChange} />
        <CookTimeCreate formValues={formValues} handleChange={handleChange} />
        <PrepTimeCreate formValues={formValues} handleChange={handleChange} />
        <SubcategoryCreate formValues={formValues} handleChange={handleChange} />
        </>
     );
}
 
export default TopCreate;
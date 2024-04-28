import RecipeNameCreate from "../../createRecipe/TopForm/RecipeNameCreate.component";
import CookTimeCreate from "../../createRecipe/TopForm/CookTimeCreate.component";
import PrepTimeCreate from "../../createRecipe/TopForm/PrepTimeCreate.component";
import SubcategoryCreate from "../../createRecipe/TopForm/SubcategoryCreate.component";

const TopEdit = ({formValues, handleChange}) => {
    return (<>
        <RecipeNameCreate formValues={formValues} handleChange={handleChange} />
        <CookTimeCreate formValues={formValues} handleChange={handleChange} />
        <PrepTimeCreate formValues={formValues} handleChange={handleChange} />
        <SubcategoryCreate formValues={formValues} handleChange={handleChange} /> 
    </>);
}
 
export default TopEdit;
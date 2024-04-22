import { SingleInputDiv } from "../userRecipe.styles";

//Recipe name for creating a recipe
const RecipeName = ({formValues, handleChange}) => {
    return ( 
        <SingleInputDiv>
        <label>Recipe Name:</label>
        <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          placeholder="Ice Cream Cake"
        />
        </SingleInputDiv>
     );
}
 
export default RecipeName;
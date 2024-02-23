import { IngredientsDiv } from "../userRecipe.styles";
const UserIngredients = ({ingredients, addNewIngredient}) => {
    return (
    <IngredientsDiv>
      {Object.entries(ingredients).map((x)=> {
        return  <div>
        <input 
          type="text" 
          name={x[0]}
          value={x[1]}
          onChange={addNewIngredient}
        />
        </div>
      })}
    </IngredientsDiv>
    );
}
 
export default UserIngredients;
import { EachInput } from "./userRecipe.styles";
const UserIngredients = ({ingredients, addNewIngredient}) => {
  console.log('Ingredients', ingredients);
    return (
    <>
      {Object.entries(ingredients).map((x, idx)=> {
        console.log('Ingredients',ingredients,  x, idx)
        return  <EachInput>
        <h3>{idx + 1}</h3>
        <input 
          type="text" 
          name="ingredients"
          value={x}
          onChange={addNewIngredient}
        />
        </EachInput>
      })}
    </>
    );
}
 
export default UserIngredients;
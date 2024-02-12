import { EachInput } from "./userRecipe.styles";
const UserIngredients = ({ingredients, addNewIngredient}) => {
    return (
    <>
      {Object.entries(ingredients).map((x, idx)=> {
        return  <EachInput>
        <h3>{idx + 1}</h3>
        <input 
          type="text" 
          name={x[0]}
          value={x[1]}
          onChange={addNewIngredient}
        />
        </EachInput>
      })}
    </>
    );
}
 
export default UserIngredients;
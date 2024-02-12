

const UserIngredients = ({ingredients, addNewIngredient}) => {
    return (
    <>
    <h1>User Ingredients</h1> 
      {Object.keys(ingredients).map(x => {
        return  <>
        <h3>{x}</h3>
        <input 
          type="text" 
          name="cookTime"
          value={ingredients.x}
          onChange={addNewIngredient}
        />
        </>
      })}
    </>
    );
}
 
export default UserIngredients;
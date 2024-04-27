
const RecipeNameCreate = ({formValues, handleChange}) => {
    return (  
        <>
        <label>Recipe Name:</label>
         <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          placeholder="Ice Cream Cake"
        />
        </>
    );
}
 
export default RecipeNameCreate;
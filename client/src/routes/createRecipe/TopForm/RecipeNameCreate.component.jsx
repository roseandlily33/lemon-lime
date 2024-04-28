
const RecipeNameCreate = ({formValues, handleChange}) => {
    return (  
        <div className="each">
        <label>Recipe Name:</label>
         <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          placeholder="Ice Cream Cake"
        />
        </div>
    );
}
 
export default RecipeNameCreate;
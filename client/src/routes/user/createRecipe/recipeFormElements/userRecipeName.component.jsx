
const RecipeName = ({formValues, handleChange}) => {
    return ( 
        <>
        <label>Recipe Name:</label>
        <input 
          type="text" 
          name="recipeName"
          value={formValues.recipeName}
          onChange={handleChange}
          required
        />
        </>
     );
}
 
export default RecipeName;
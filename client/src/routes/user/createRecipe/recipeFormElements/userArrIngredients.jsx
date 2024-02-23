
const UserIngredientsArray = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.ingredients.map((x, idx) => {
            return <>
        <h3>{idx + 1}</h3>
        <input 
          type="text" 
          name={x[0]}   
          value={x[1]}
          onChange={handleChange}
        />
            </>
        })}
        
        </>
     );
}
 
export default UserIngredientsArray;
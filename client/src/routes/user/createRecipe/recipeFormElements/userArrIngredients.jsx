
const UserIngredientsArray = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.ingredients.map(e => {
            return <h3>{e}</h3>
        })}
        
        </>
     );
}
 
export default UserIngredientsArray;
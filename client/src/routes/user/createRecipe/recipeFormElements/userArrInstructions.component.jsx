

const UserInstructionsArray = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.instructions.map(e => {
            return <h3>{e}</h3>
        })}
        
        </>
     );
}
 
export default UserInstructionsArray;


const UserInstructionsArray = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.instructions.map((ele, idx )=> {
            return <>
            <h3>{idx + 1}</h3>
            <input type="text" value={ele} onChange={handleChange}/>
            </>
        })}
        
        </>
     );
}
 
export default UserInstructionsArray;
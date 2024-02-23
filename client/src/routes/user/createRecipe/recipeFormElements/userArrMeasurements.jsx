

const UserArrayMeasurements = ({formValues, handleChange}) => {
    return ( 
        <>
        {formValues.measurements.map(e => {
            return <h3>{e}</h3>
        })}
        
        </>
     );
}
 
export default UserArrayMeasurements;
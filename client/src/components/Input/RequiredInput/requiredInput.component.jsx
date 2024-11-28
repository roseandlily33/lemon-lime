
const RequiredInput = ({label, name, value, onChange, style}) => {
    return ( 
        <>
        <label>{label}</label>
        <input 
            style={style}
            type="text" 
            name={name}
            value={value}
            onChange={onChange}
            required
        />
        </>
     );
}
 
export default RequiredInput;
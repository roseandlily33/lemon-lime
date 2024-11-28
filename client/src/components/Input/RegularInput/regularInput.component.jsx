
const RegularInput = ({label, style, name, value, onChange, placeholder}) => {
    return (
        <>
        <label>{label}</label>
        <input 
            style={style}
            type="text" 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
        </>
      );
}
 
export default RegularInput;
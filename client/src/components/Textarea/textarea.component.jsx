
const TextArea = ({label, name, value, onChange }) => {
    return (  
        <>
        <label>{label}</label>
        <textarea rows="6" cols="30" name={name} value={value} onChange={onChange}></textarea>
        </>
    );
}
 
export default TextArea;
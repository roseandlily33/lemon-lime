
const IconButton = ({functionName, span, svg}) => {
    return (  
        <>
        <button onClick={functionName} className="buttonWithIcon">
            {svg}
            {span}
        </button>
        </>
    );
}
 
export default IconButton;

const PrimaryButton = ({functionName, span}) => {
    return ( 
        <>
        <button style={{width: '200px'}} onClick={functionName}>{span}</button>
        </>
     );
}
 
export default PrimaryButton;
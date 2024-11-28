
const SecondaryButton = ({functionName, span, svg}) => {
    return ( 

        <button className="secondaryButton" style={{display: 'flex', alignItems: 'center', maxHeight: '60px'}} onClick={functionName}>
    {svg}
    {span}
    </button> 
     );
}
 
export default SecondaryButton;
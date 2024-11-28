import { InstructionsDiv } from "../singleRecipe.styles";

const InstructionSection = ({singleRecipe}) => {
    return ( 
        <>
        <InstructionsDiv >
        <h4>Instructions</h4>
        <ol>
        {singleRecipe?.instructions?.map(({id, ins}, index) => {
        return <div style={{display: 'flex'}} key={id}>
        <p style={{paddingRight: '0.7em', color: '#6C9251'}}>{index + 1}</p>
        <p>{ins}</p>
        </div>
        })}
        </ol>
        </InstructionsDiv>
        </>
     );
}
 
export default InstructionSection;
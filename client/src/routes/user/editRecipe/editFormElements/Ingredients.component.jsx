import { IngredientsDivEdit } from "../edit.styles";

const EditIngredients = ({handleChangeIng, deleteIngredient, objIngredinets}) => {
    return ( 
        <>
         {Object.values(objIngredinets)?.map((x, idx)=> {
         return  <IngredientsDivEdit key={idx}>
         <label name={idx}></label>
          <input 
          type="text" 
          name={idx} 
          value={x}
          onChange={handleChangeIng} 
          />
         <button className="secondaryButton" onClick={(e) => deleteIngredient(e, idx)}>Remove Ingredient</button>
         </IngredientsDivEdit>
       })}
        </>
     );
}
 
export default EditIngredients;
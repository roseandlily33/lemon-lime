
const EditIngredients = ({handleChangeIng, deleteIngredient, objIngredinets}) => {
    return ( 

        <>
         {Object.values(objIngredinets)?.map((x, idx)=> {
         return  <div key={idx}>
         <label name={idx}></label>
          <input 
          type="text" 
          name={idx} 
          value={x}
          onChange={handleChangeIng} 
          />
         <button onClick={(e) => deleteIngredient(e, idx)}>Remove Ingredient</button>
         </div>
       })}
        

        </>
     );
}
 
export default EditIngredients;
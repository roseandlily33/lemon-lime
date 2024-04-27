
const AnoterIngredient = ({handleChangeIng, deleteIngredient, objIngredinets}) => {
    return ( 
        <>
        <h2>Edit Ingredients</h2>
         {Object.values(objIngredinets)?.map((x, idx)=> {
         return  <div key={idx} className="boxShadow">
         <label name={idx}></label>
          <input 
          type="text" 
          name={idx} 
          value={x}
          onChange={handleChangeIng} 
          />
         <button className="secondaryButton" onClick={(e) => deleteIngredient(e, idx)}>
          Remove Ingredient
<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-trash"><path class="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>

          </button>
         </div>
       })}
        </>
     );
}
 
export default AnoterIngredient;
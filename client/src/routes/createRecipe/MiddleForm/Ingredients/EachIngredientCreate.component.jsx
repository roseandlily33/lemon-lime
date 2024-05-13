import { useState, useEffect } from "react";
import EachMeasurementCreate from "./EachMeasurementCreate.component";
import { EachI } from "../../RecipeForm.styles";
const EachIngredientCreate = (
    {ing, id, idx, deleteIngredient, setIngredients,
         ingredients, mea}

) => {

    useEffect(() => {
        //console.log('USE EFFECT', id, ing, mea)
        setIngId(id);
        setIng(ing);
        setMeas(mea);
    }, [ing, id, mea]); 

    const [ingState, setIng] = useState();
    const [ingID, setIngId] = useState();
    const [meas, setMeas] = useState();
    const [updated, setUpdated] = useState(false);

    const setMyIngredients = (e) => {
        e.preventDefault();
        let ing = [...ingredients];
        let item = {
            ...ingredients[idx],
            id: ingID,
            mea: meas,
            ing: ingState
        }
        ing[idx] = item;
        setIngredients(ing);
        console.log('Set ingredients', ing, ingredients);
    }

    return ( 
        <>     
        {updated ? 
               <EachI className="boxShadow">
               <div className="left">
                <h4>{idx + 1}</h4>
                <EachMeasurementCreate mea={meas} id={ingID} idx={idx} setMeas={setMeas}/>
                <input type="text" value={ingState} name="ing" onChange={(e) => {
                    e.preventDefault();
                    setIng(e.target.value);
                }}/>
                </div>
                <div className="right">
               {/* Check Mark icon */}
                <svg onClick={(e) => {
                    e.preventDefault();
                    setUpdated(false);
                    setMyIngredients(e);
                }} className="primary icon icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" className="primary"/>
                    <path class="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"/></svg>
                {/* Delete icon */}
                <svg onClick={(e) => deleteIngredient(e, ingID)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-trash"><path className="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>
               </div>
               </EachI>
               : 
               <EachI className="boxShadow">
               <div className="left">
               <h4>{idx + 1}</h4>
                <p style={{marginRight: '1rem'}}>{mea}</p>
                <p>{ingState}</p>
                </div>
                <div className="right">
                {/* Edit Icon */}
                <svg onClick={(e) => {
                    e.preventDefault();
                    setUpdated(true)
                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-edit"><path className="primary" d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"/><rect width="20" height="2" x="2" y="20" class="secondary" rx="1"/></svg>
                {/* Delete Icon */}
                <svg onClick={(e) => deleteIngredient(e, ingID)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon-trash"><path className="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>
                </div>
               </EachI>
               }
       </>
     );
}
 
export default EachIngredientCreate;
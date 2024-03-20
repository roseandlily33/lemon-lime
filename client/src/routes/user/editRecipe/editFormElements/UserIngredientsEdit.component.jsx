import { useState,} from "react";
import {SingleMeaIngDivEdit, BottomIngDivEdit, TopIngDivEdit} from '../edit.styles';


const UserIngredientsEdit = ({measurements, ingredients, setMeasurements, setIngredients}) => {
    const objIngredinets = Object.assign({}, ingredients);
    const objMeasurements = Object.assign({}, measurements)
    const maxSteps = 15;
    const [newMea, setNewMea] = useState('');
    const [newIng, setNewIng] = useState('');
    const [myMea, setMyMea] = useState(objMeasurements);
    const [myIng, setMyIng] = useState(objIngredinets);
    const [count, setCount] = useState(ingredients.length);

    const handleChangeIng = (e) => {
        const {name, value} = e.target;
        console.log('Handling change', name, value)
        setMyIng({...myIng, [name]: value});
        const mainHomeIngredients = Object.values(myIng);
        setIngredients(mainHomeIngredients);
    }
    const handleChangeMea = (e) => {
      const {name, value} = e.target;
      setMyMea({...myMea, [name]: value});
      const mainHomeMeasurements = Object.values(myMea);
      setMeasurements(mainHomeMeasurements);
      console.log(measurements)
    }

    const addCard = async(e) => {
        e.preventDefault();
          if(maxSteps > count){
              try{
                console.log('THe incoming mea', newMea)
                //For the measurement:
                setMeasurements([...measurements, newMea]);
                const objMeasurements = await Object.assign({}, measurements);
                setMyMea(objMeasurements);
                //const mainHomeMeasurements = await Object.values(myMea);
                //setMeasurements(mainHomeMeasurements);
               
                //For the ingredients:
                setIngredients([...ingredients, newIng]);
                const objIng = await Object.assign({}, ingredients);
                setMyIng(objIng);
            
  
              } catch(err){
                console.log('Error in measurements' ,err)
              } finally{
                setNewIng('');
                setCount(count + 1);
              }
          } else {
              alert('Cannot add more Ingredients ');
          }
      }

    const deleteIngredient = (e, deleteI) => {
        e.preventDefault();
        const newMeasurements =  Object.values(myMea).filter((x, i) => {
            return i !== deleteI
          });
        setMyMea(newMeasurements);
        setMeasurements(newMeasurements);
        const newIngredients =  Object.values(myIng).filter((x, i) => {
          return i !== deleteI
        });
        setMyIng(newIngredients)
        setIngredients(newIngredients);
      }

    return ( 
        < >
        <h1>Opt 2</h1>
        {measurements ? 
         <TopIngDivEdit>
          {/* <MeasurementsEdit objMeasurements={objMeasurements} handleChangeMea={handleChangeMea}/>
         <EditIngredients handleChangeIng={handleChangeIng} deleteIngredient={deleteIngredient} objIngredinets={objIngredinets} /> */}
         <SingleMeaIngDivEdit className="glass">
          <div className="outerLeft">   {
             Object.values(objMeasurements)?.map((x,idx) => {
                 return <div className="left" key={idx}> 
           <label style={{fontSize: '1.4rem', paddingRight: '1em'}} name={idx}>{idx + 1}</label>
           <select name={x[0]} defaultValue={x} onChange={handleChangeMea}>
           <option value={x['1/8 tsp']}>1/8 tsp</option>
           <option value={x['1/4 tsp']}>1/4 tsp</option>
           <option value={x['1/2 tsp']}>1/2 tsp</option>
           <option value={x['3/4 tsp']}>3/4 tsp</option>
           <option value={x['1 tsp']}>1 tsp</option>
           <option value={x['1 1/4 tsp']}>1 1/4 tsp</option>
           <option value={x['1 1/2 tsp']}>1 1/2 tsp</option>
           <option value={x['2 tsp']}>2 tsp</option>
           <option value={x['2 1/4 tsp']}>2 1/4 tsp</option>
           <option value={x['2 1/2 tsp']}>2 1/2 tsp</option>
           <option value={x['3 tsp']}>3 tsp</option>
           <option value={x['1/8 Cup']}>1/8 Cup</option>
           <option value={x['1/4 Cup']}>1/4 Cup</option>
           <option value={x['1/2 Cup']}>1/2 Cup</option>
           <option value={x['3/4 Cup']}>3/4 Cup</option>
           <option value={x['1 Cup']}>1 Cup</option>
           <option value={x['1 1/4 Cup']}>1 1/4 Cup</option>
           <option value={x['1 1/2 Cup']}>1 1/2 Cup</option>
           <option value={x['1 3/4 Cup']}>1 3/4 Cup</option>
           <option value={x['2 Cups']}>2 Cups</option>
           <option value={x['2 1/4 Cup']}>2 1/4 Cup</option>
           <option value={x['2 1/2 Cup']}>2 1/2 Cup</option>
           <option value={x['2 3/4 Cup']}>2 3/4 Cup</option>
           <option value={x['3 Cups']}>3 Cups</option>
           <option value={x['3 1/4 Cup']}>3 1/4 Cup</option>
           <option value={x['3 1/2 Cup']}>3 1/2 Cup</option>
           <option value={x['3 3/4 Cup']}>3 3/4 Cup</option>
           <option value={x['4 Cups']}>4 Cups</option>
         </select>
             </div>
             }) 
         }
         </div>
         <div className="outerRight">
          {Object.values(objIngredinets)?.map((x, idx)=> {
         return  <div className="right" key={idx}>
         <label name={idx}></label>
          <input 
          type="text" 
          name={idx} 
          value={x}
          onChange={handleChangeIng} 
          />
         <button className="secondaryButton" onClick={(e) => deleteIngredient(e, idx)}>Remove Ingredient</button>
        </div>
       })}
       </div>

</SingleMeaIngDivEdit>

         </TopIngDivEdit>
         : 
         <h4>Add Some ingredients</h4>
         }
         <BottomIngDivEdit>
         <select name={newMea} onChange={(e) => setNewMea(e.target.value)}>
           <option value={'1/8 tsp'}>1/8 tsp</option>
           <option value={'1/4 tsp'}>1/4 tsp</option>
           <option value={'1/2 tsp'}>1/2 tsp</option>
           <option value={'3/4 tsp'}>3/4 tsp</option>
           <option value={'1 tsp'}>1 tsp</option>
           <option value={'1 1/4 tsp'}>1 1/4 tsp</option>
           <option value={'1 1/2 tsp'}>1 1/2 tsp</option>
           <option value={'2 tsp'}>2 tsp</option>
           <option value={'2 1/4 tsp'}>2 1/4 tsp</option>
           <option value={'2 1/2 tsp'}>2 1/2 tsp</option>
           <option value={'3 tsp'}>3 tsp</option>
           <option value={'1/8 Cup'}>1/8 Cup</option>
           <option value={'1/4 Cup'}>1/4 Cup</option>
           <option value={'1/2 Cup'}>1/2 Cup</option>
           <option value={'3/4 Cup'}>3/4 Cup</option>
           <option value={'1 Cup'}>1 Cup</option>
           <option value={'1 1/4 Cup'}>1 1/4 Cup</option>
           <option value={'1 1/2 Cup'}>1 1/2 Cup</option>
           <option value={'1 3/4 Cup'}>1 3/4 Cup</option>
           <option value={'2 Cups'}>2 Cups</option>
           <option value={'2 1/4 Cup'}>2 1/4 Cup</option>
           <option value={'2 1/2 Cup'}>2 1/2 Cup</option>
           <option value={'2 3/4 Cup'}>2 3/4 Cup</option>
           <option value={'3 Cups'}>3 Cups</option>
           <option value={'3 1/4 Cup'}>3 1/4 Cup</option>
           <option value={'3 1/2 Cup'}>3 1/2 Cup</option>
           <option value={'3 3/4 Cup'}>3 3/4 Cup</option>
           <option value={'4 Cups'}>4 Cups</option>
         </select>
         <input 
                type="text" 
                name={newIng}   
                value={newIng}
                onChange={(e) => setNewIng(e.target.value)}
         />
         <button onClick={addCard}>Add Ingredient</button>
         </BottomIngDivEdit>
         </>
        
     );
}
 
export default UserIngredientsEdit;
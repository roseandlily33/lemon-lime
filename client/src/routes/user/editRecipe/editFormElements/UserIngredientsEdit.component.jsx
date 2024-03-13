import { useState, useEffect } from "react";
import { TopIngDiv, BottomIngDiv, SingleMeaIngDiv } from "../../createRecipe/userRecipe.styles";

const UserIngredientsEdit = ({measurements, ingredients, setMeasurements, setIngredients}) => {
   const objIngredinets = Object.assign({}, ingredients);
    const maxSteps = 15;
    const [newMea, setNewMea] = useState('');
    const [newIng, setNewIng] = useState('');
    const [myMea, setMyMea] = useState(measurements);
    const [myIng, setMyIng] = useState(objIngredinets);
    const [count, setCount] = useState(ingredients.length);

    useEffect(() => {
      const objIngredinets = Object.assign({}, ingredients);
      setMyIng(objIngredinets)
    }, [ingredients])

    const handleChangeIng = (e) => {
        const {name, value} = e.target;
        setMyIng({...myIng, [name]: value});
        const mainHomeIngredients = Object.values(myIng);
        setIngredients(mainHomeIngredients);
    }

    const addCard = async(e) => {
        e.preventDefault();
          if(maxSteps > count){
              try{
                //For the measurement:
                setMyMea([...myMea, newMea]);
                setMeasurements([...measurements, myMea]);
                try{
                //For the ingredients:
                const objIng = await Object.assign({}, ingredients);
           
                setMyIng(objIng);
                setIngredients([...ingredients, newIng]);
                
                } catch(err){
                  console.log('Error in ingredients', err)
                }
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
        const newMeasurements =  myMea.filter((x, i) => {
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
        {measurements ? 
         <TopIngDiv>
           {
             myMea.map((x,idx) => {
                 return <SingleMeaIngDiv className="glass" key={idx}> 
             <h3>{idx + 1}</h3>
           <label name={idx}></label>
           <select name={newMea} defaultValue={x} onChange={(e) => setNewMea(e.target.value)}>
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
             </SingleMeaIngDiv>
             })
         }
          {Object.values(myIng)?.map((x, idx)=> {
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
         </TopIngDiv>
         : 
         <h4>Add Some ingredients</h4>
         }
         <BottomIngDiv>
         <select name={newMea}  onChange={(e) => setNewMea(e.target.value)}>
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
         </BottomIngDiv>
         </>
        
     );
}
 
export default UserIngredientsEdit;
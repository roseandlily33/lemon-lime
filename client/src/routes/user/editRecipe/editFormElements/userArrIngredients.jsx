import { useState } from "react";
import { TopIngDiv, BottomIngDiv, SingleMeaIngDiv } from "../../createRecipe/userRecipe.styles";

const UserIngredientsArray = ({formValues, setFormValues}) => {
  const {measurements, ingredients} = formValues;
  const objectIngredients = Object.assign({}, ingredients);
  const objectMeasurements = Object.assign({}, measurements);
  const [newMea, setNewMea] = useState(objectMeasurements);
  const [newIng, setNewIng] = useState(objectIngredients);

  const [measurement, setMea] = useState('1 Cup');
  const [ing, setIng] = useState('');
  const [count, setCount] = useState(ingredients.length);
  const maxSteps = 15;

  const handleIngredientChange = (e) => {
    const {name, value} = e.target;
    setNewIng({...newIng, [name]: value})
  }
  const handleMeasurementsChange = (e) => {
    const {name, value} = e.target;
    setNewMea({...newMea, [name]: value})
  }

  const addCard = (e) => {
    e.preventDefault();
      if(maxSteps > count){
         // setNewIng([...ingredients, newIng]);
          //setNewMea([...measurements, newMea]);
          setNewIng('');
          setCount(count + 1);
          setFormValues([...formValues, {
            ingredients: newIng,
            measurements: newMea
          }])
      } else {
          alert('Cannot add more Ingredients ');
      }
  }

    const removeIngredient = (e, index) => {
        e.preventDefault();
        console.log('Removing at index', index);
        let removed = measurements.filter((_, i) => { return i !== index;});
        console.log('Removed array measurements', removed);
        let removed2 = ingredients.filter((_, i) => {return i !== index;});
         console.log('Removed array ingredients', removed2);
        setNewMea(removed);
        setNewIng(removed2);
    }
   
    return ( 
        < >
       {measurements ? 
        <TopIngDiv>
          {
            Object.entries(newMea).map((x,idx) => {
                return <SingleMeaIngDiv className="glass" key={idx}> 
            <h3>{idx + 1}</h3>
          <label name={idx}></label>
         <select name={x[0]} defaultValue={x[1]} onChange={handleMeasurementsChange}>
          <option value={x[1]['1/8 tsp']}>1/8 tsp</option>
          <option value={x[1]['1/4 tsp']}>1/4 tsp</option>
          <option value={x[1]['1/2 tsp']}>1/2 tsp</option>
          <option value={x[1]['3/4 tsp']}>3/4 tsp</option>
          <option value={x[1]['1 tsp']}>1 tsp</option>
          <option value={x[1]['1 1/4 tsp']}>1 1/4 tsp</option>
          <option value={x[1]['1 1/2 tsp']}>1 1/2 tsp</option>
          <option value={x[1]['2 tsp']}>2 tsp</option>
          <option value={x[1]['2 1/4 tsp']}>2 1/4 tsp</option>
          <option value={x[1]['2 1/2 tsp']}>2 1/2 tsp</option>
          <option value={x[1]['3 tsp']}>3 tsp</option>
          <option value={x[1]['1/8 Cup']}>1/8 Cup</option>
          <option value={x[1]['1/4 Cup']}>1/4 Cup</option>
          <option value={x[1]['1/2 Cup']}>1/2 Cup</option>
          <option value={x[1]['3/4 Cup']}>3/4 Cup</option>
          <option value={x[1]['1 Cup']}>1 Cup</option>
          <option value={x[1]['1 1/4 Cup']}>1 1/4 Cup</option>
          <option value={x[1]['1 1/2 Cup']}>1 1/2 Cup</option>
          <option value={x[1]['1 3/4 Cup']}>1 3/4 Cup</option>
          <option value={x[1]['2 Cups']}>2 Cups</option>
          <option value={x[1]['2 1/4 Cup']}>2 1/4 Cup</option>
          <option value={x[1]['2 1/2 Cup']}>2 1/2 Cup</option>
          <option value={x[1]['2 3/4 Cup']}>2 3/4 Cup</option>
          <option value={x[1]['3 Cups']}>3 Cups</option>
          <option value={x[1]['3 1/4 Cup']}>3 1/4 Cup</option>
          <option value={x[1]['3 1/2 Cup']}>3 1/2 Cup</option>
          <option value={x[1]['3 3/4 Cup']}>3 3/4 Cup</option>
          <option value={x[1]['4 Cups']}>4 Cups</option>
        </select>
       
            </SingleMeaIngDiv>
            })
        }
         {Object.entries(newIng).map((x, idx)=> {
        return  <>
         <input type="text" name={x[0]} value={x[1]}
          onChange={handleIngredientChange} />
        <button onClick={(e) => removeIngredient(e, idx)}>Remove Ingredient</button>
        </>
      })}
        </TopIngDiv>
        : 
        <h4>Add Some ingredients</h4>
        }
        <BottomIngDiv>
        <select name={measurement} onChange={(e) => setMea(e.target.value)}>
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
          <option selected value={'1 Cup'}>1 Cup</option>
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
               name={ing}   
               value={ing}
               onChange={(e) => setIng(e.target.value)}
        />
        <button onClick={addCard}>Add Ingredient</button>
        </BottomIngDiv>
        </>
     );
}
 
export default UserIngredientsArray;
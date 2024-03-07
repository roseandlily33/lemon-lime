import { useState } from "react";
import { TopIngDiv, BottomIngDiv, SingleMeaIngDiv } from "../userRecipe.styles";

const UserIngredientsArray = ({formValues, setFormValues}) => {
  const {measurements, ingredients} = formValues;
  const [newMea, setNewMea] = useState(measurements);
  const [newIng, setNewIng] = useState(ingredients);
  const [ing, setIng] = useState('');
  const [count, setCount] = useState(ingredients.length);
  const maxSteps = 15;

  const addCard = (e) => {
    e.preventDefault();
      if(maxSteps > count){
          setNewIng([...ingredients, newIng]);
          setNewMea([...measurements, newMea]);
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
          {measurements.map((m, i) => {
            return ( 
                <SingleMeaIngDiv className="glass" key={i}>
                    <div>
                    <h4>{i + 1}</h4>
                    <p>{m}</p>
                    <input index={i} value={ingredients.at(i)} onChange={(e) => {
                      console.log(e.target);
                      const {index, value} = e.target;
                      setNewIng({...newIng, [index]: value})
                    }}/>
                    </div>
                    <div>
                    <button onClick={(e) => removeIngredient(e, i)}>Remove Ingredient</button>
                    </div>
                </SingleMeaIngDiv>
            )
          })}
          
        </TopIngDiv>
        : 
        <h4>Add Some ingredients</h4>
        }
        <BottomIngDiv>
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


        // {Object.entries(newIng).map((x, idx) => {
        //      return <div>
        //      <input 
        //        type="text" 
        //        name={x[0]}   
        //        value={x[1]}
        //        onChange={handleChange2}
        //      />
        //     </div>
        // })}
        // {
        //     Object.entries(newMea).map((x,idx) => {
        //         console.log('Mea', x);
        //         return <div> 
        //     <h3>{idx + 1}</h3>
        //     <label name={idx}></label>
        //  <select name={x[0]} defaultValue={x[0]} onChange={handleChange1}>
        //   <option value={x[1]['1 Cup']}>1 Cup</option>
        //   <option value={x[1]['2 Cups']}>2 Cups</option>
        //   <option value={x[1]['3 Cups']}>3 Cups</option>
        //   <option value={x[1]['1 tsp']}>1 tsp</option>
        //   <option value={x[1]['2 tsp']}>2 tsp</option>
        // </select>
        //     </div>
        //     })
        // }
       
     );
}
 
export default UserIngredientsArray;
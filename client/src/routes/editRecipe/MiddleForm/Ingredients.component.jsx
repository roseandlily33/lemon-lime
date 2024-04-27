import EachIngredient from "./EachIngredient.component";

const IngredientsEdit = ({ingredients, setIngredients}) => {
    return ( 
        <>
        <h2>Ingrediets Edit</h2>
        <EachIngredient />
        </>
     );
}
 
export default IngredientsEdit;
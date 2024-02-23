import { httpDeleteRecipe } from "../../../hooks/requests";

const DeleteRecipe = ({id}) => {
    const deleteRecipe = async(id) => {
        window.confirm('Are you sure you want to delete this recipe?')
        let res = await httpDeleteRecipe(id);
        if(res.ok){
            alert('Recipe has been deleted')
        } else {
            alert('Recipe has not been deleted')
        }
    }
    return ( <button onClick={() => deleteRecipe(id)}>Delete Recipe</button> );
}
 
export default DeleteRecipe;
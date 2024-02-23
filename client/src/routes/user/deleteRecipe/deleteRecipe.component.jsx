
const DeleteRecipe = ({id}) => {
    const deleteRecipe = (id) => {
        console.log('Deleting this recipe', id);
    }
    return ( <button onClick={() => deleteRecipe(id)}>Delete Recipe</button> );
}
 
export default DeleteRecipe;
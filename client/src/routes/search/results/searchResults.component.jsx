import RecipeContainer2 from "../../../components/Recipe/recipe2.container";

const SearchResults  = ({results }) => {

    return ( 
      <>
        {results?.map((recipe) => {
          return  <RecipeContainer2 recipe={recipe} />
        })}
        </>
    );
}
 
export default SearchResults ;
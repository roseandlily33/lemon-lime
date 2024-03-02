
const SearchResults  = ({results }) => {
    return ( 
        <>
        <h4>Search Results</h4>
        {results?.map((res) => {
            return <h4>{res.recipeName}</h4>
        })}
        </>
    );
}
 
export default SearchResults ;
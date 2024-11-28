import { RecentContainer } from "./recent.styles";
const RecentlySearched = ({recent, seachForOldSearch}) => {

    return ( 
        <RecentContainer>
        <h4>Recently Searched: </h4>
        <div style={{display: 'flex', gap: '1em'}}>
        {recent?.map((r) => <p onClick={() => seachForOldSearch(r)}>{r}</p>)}
        </div>
        </RecentContainer>
     );
}
 
export default RecentlySearched;
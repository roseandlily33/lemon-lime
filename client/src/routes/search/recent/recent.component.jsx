import { RecentContainer, RecentOption } from "./recent.styles";
const RecentlySearched = ({recent}) => {

    return ( 
        <RecentContainer>
        <h3>Recently Searched: </h3>
        <div style={{display: 'flex', gap: '1em'}}>
        {recent.map((r) => <RecentOption>{r}</RecentOption>)}
        </div>
        </RecentContainer>
     );
}
 
export default RecentlySearched;
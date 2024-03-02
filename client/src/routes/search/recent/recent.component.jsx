const RecentlySearched = ({recent, setRecent}) => {
    if(recent.length === 0){
       // setRecent([{1: "Opt 1"}, {2: "Opt 2"}, {3: "Opt 3"}])
       setRecent(['1', '2', '3'])
    }
    console.log('Recent', recent)

    return ( 
        <>
        <h4>Recently Searched</h4>
        {recent.map((r) => <h4>{r}</h4>)}
        </>
     );
}
 
export default RecentlySearched;